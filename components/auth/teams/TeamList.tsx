import React, { useState, useEffect } from 'react'
import { useAuth } from 'frontend-js'
import { List } from '@mui/material'
import {
  SelectableListItem  
} from '../../../components'
import { TeamType } from '../../../types'
import { useTeams } from '../../../hooks'

const TeamList: React.FC = (props) => {    

  const { loading, teams, findTeams } = useTeams()

  const { currentUser, fetchMe } = useAuth()
  const { selectTeam } = useTeams()

  const [activeTeamId, setActiveTeamId] = useState(-1)

  const handleClick = async (team) => {
    let resp = await selectTeam(team.id)         
    //@ts-ignore
    if(resp?.team_id){
      //@ts-ignore
      setActiveTeamId(resp?.team_id)
      fetchMe()
    }    
  }

  useEffect(() => {    
    if(currentUser?.id){
      setActiveTeamId(currentUser?.team_id)
      findTeams()    
    }
  }, [currentUser?.id])

  return(
    <List>
      { teams?.map((team) => (        
        <SelectableListItem      
          key={team.id}
          selected={team?.id == activeTeamId ? true : false}
          icon={'Users'}
          color={team.color}
          title={team.name}          
          handleClick={() => handleClick(team)}
        />
      ))}
    </List>
  )
}

export default TeamList