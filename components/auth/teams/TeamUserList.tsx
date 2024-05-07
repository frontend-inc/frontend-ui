import React from 'react'
import { useAuth } from 'frontend-js'
import { List } from '@mui/material'
import {
  SelectableListItem  
} from '../../../components'
import { TeamType, TeamUserType } from '../../../types'
import { useTeams } from '../../../hooks'

const TeamUserListItem: React.FC = (props) => {    

  const { currentUser, fetchMe } = useAuth()
  const { selectTeam } = useTeams()

  const handleClick = async (teamUser: TeamUserType) => {
    let resp = await selectTeam(teamUser.team_id)     
    if(resp?.id){
      fetchMe()
    }    
  }

  return(
    <List>
      { currentUser?.team_users?.map((teamUser: TeamType) => (
        <SelectableListItem      
          key={teamUser.id}
          selected={currentUser?.team_id === teamUser.team_id}
          icon={'Users'}
          color={teamUser.team.color}
          title={teamUser.team.name}
          handleClick={() => handleClick(teamUser)}
        />
      ))}
    </List>
  )
}

export default TeamUserListItem