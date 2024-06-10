import React from 'react'
import { 
  UserAvatar 
} from '../..'
import {
  Button,
  Stack,
  Typography 
} from '@mui/material'
import { UserType } from '../../../types'

type UserButtonProps = {
  user: UserType
  size?: number
  handleClick: () => void
} 

const UserButton: React.FC<UserButtonProps> = (props) => {
  const { user, size=24, handleClick } = props

  return(
    <Button
      onClick={ handleClick } 
      startIcon={ 
        <UserAvatar user={ user } size={ size } /> 
    }            
    >
      @{ user?.username }
    </Button>
  )
}

export default UserButton