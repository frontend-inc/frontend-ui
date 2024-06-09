import React, { useEffect, useState } from 'react'
import { 
  Stack,
  Box,
  Button,
  Avatar,
  Typography, 
  Link   
} from '@mui/material'
import { ExpandableText } from '../../../components'
import { UserType } from '../../../types'

export type UserProfileProps = {
  user: UserType 
}

const UserProfile: React.FC<UserProfileProps> = (props) => {
  const { user } = props || {}
  const { name, username, bio, avatar } = user || {}

  return (
    <Box sx={ sx.container }>
      <Stack sx={ sx.profile } direction="row" spacing={4} alignItems="center">
        { avatar?.url && (
          <Avatar 
            src={avatar?.url} 
            sx={ sx.avatar }
          />
        )}      
        <Stack direction="column" spacing={1}>
          <Typography variant="h6"  color='text.primary'>{name}</Typography>
          <Typography variant="body2"  color='text.secondary'>@{username}</Typography>
          <Link href={`/${username}`} variant="body2"  color='text.secondary'>{username}</Link>
          { bio && (
            <ExpandableText 
              text={ bio }
            />
          )}      
        </Stack>
      </Stack>
    </Box>
  )
}

export default UserProfile  

const sx = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profile: {
    maxWidth: 600
  },
  avatar: {
    width: 110,
    height: 110
  }
}