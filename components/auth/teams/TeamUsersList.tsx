import React, { useState, useEffect } from 'react'
import { useAuth } from 'frontend-js'
import { List } from '@mui/material'
import {
  UserListItem  
} from '../../../components'
import { TeamType, TeamUserType } from '../../../types'
import { useTeams } from '../../../hooks'

const TeamList: React.FC = (props) => {    

  const { 
    loading, 
    teams, 
    users,
    findUsers 
  } = useTeams()

  const { currentUser, fetchMe } = useAuth()  

  useEffect(() => {    
    if(currentUser?.team_id){      
      findUsers(currentUser?.team_id)    
    }
  }, [currentUser?.team_id])

  return(
    <List dense>
      { users?.map((user: UserType) => (
        <UserListItem      
          key={user.id}
          user={ user }
          handleClick={() => handleClick(user)}
        />
      ))}
    </List>
  )
}

export default TeamList