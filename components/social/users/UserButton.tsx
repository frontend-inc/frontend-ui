import React from 'react'
import { 
  UserAvatar 
} from '../..'
import {
  Box,
  Button,  
} from '@mui/material'
import { UserType } from '../../../types'

type UserButtonProps = {
  user: UserType
  size?: number
  handleClick?: () => void
} 

const UserButton: React.FC<UserButtonProps> = (props) => {
  const { user, size=24, handleClick } = props

  if(!user?.name) return null;
  return(
    <Box>
    <Button
      sx={ sx.root }
      onClick={ handleClick } 
      startIcon={ 
        <UserAvatar 
          user={ user } 
          size={ size }
        /> 
    }            
    >
      { user?.name }
    </Button>
    </Box>
  )
}

export default UserButton

const sx = {
  root: {
    color: 'text.secondary',
    '&:hover': {
      bgcolor: 'transparent',
    }
  }
}