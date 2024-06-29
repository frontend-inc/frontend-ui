import React from 'react'
import { 
  UserAvatar 
} from '../..'
import {
  Box,
  Button,  
  Typography
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
      <Typography variant="body2" color='text.primary'>
        { user?.name }
      </Typography>
    </Button>
    </Box>
  )
}

export default UserButton

const sx = {
  root: {      
    boxShadow: 0,  
    color: 'text.secondary',
    '&:hover': {
      boxShadow: 0,
      bgcolor: 'transparent',
    }
  }
}