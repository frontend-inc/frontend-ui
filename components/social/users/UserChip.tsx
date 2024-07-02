import React from 'react'
import { 
  UserAvatar 
} from '../..'
import {  
  Stack,  
  Typography
} from '@mui/material'
import { UserType } from '../../../types'

type UserChipProps = {
  user: UserType
  size?: number  
} 

const UserChip: React.FC<UserChipProps> = (props) => {
  const { user, size=24 } = props

  if(!user?.name) return null;
  return(
    <Stack 
      sx={ sx.root }
      direction="row"
      spacing={1}
    >
      <UserAvatar 
        user={ user } 
        size={ size }
      /> 
      <Typography variant="body2" color='text.primary'>
        { user?.name }
      </Typography>
    </Stack>
  )
}

export default UserChip

const sx = {
  root: {      
    alignItems: 'center'
  }
}