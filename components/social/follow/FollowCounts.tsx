import React from 'react'
import { Stack, Divider, Typography } from '@mui/material'
import { UserType } from '../../../types'

type FollowCountsProps = {
	user: UserType
	color?: string	
}

const FollowCounts: React.FC<FollowCountsProps> = (props) => {
	const {
		user
	} = props


	return (
    <Stack direction="row" spacing={1} alignItems='center' divider={<Divider sx={ sx.divider } />}>
      <Stack direction="row" spacing={1} alignItems='center'>
        <Typography variant="subtitle2" color="text.primary">
          {user?.num_followers} 
        </Typography>
        <Typography variant="overline" color="text.secondary">
          Followers
        </Typography>
      </Stack>
      <Stack direction="row" spacing={1} alignItems='center'>
        <Typography variant="subtitle2" color="text.primary">
          {user?.num_following} 
        </Typography>
        <Typography variant="overline" color="text.secondary">
          Following
        </Typography>
      </Stack>
    </Stack>
	)
}

export default FollowCounts

const sx = {
  divider: {
    borderRight: '2px solid',
    borderColor: 'divider',
    height: 16,
  }
}