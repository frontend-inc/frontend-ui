import React, { useState, useEffect } from 'react'
import { Button, Stack, Divider, Typography } from '@mui/material'
import { UserType } from '../../../types'
import FollowModal from './FollowModal'

type FollowCountsProps = {
	user: UserType
	color?: string	
}

const FollowCounts: React.FC<FollowCountsProps> = (props) => {
	const {
		user
	} = props

  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(true)
  }

	return (
    <>
    <Stack direction="row" spacing={1} alignItems='center' divider={<Divider sx={ sx.divider } />}>
      <Stack direction="row" spacing={1} alignItems='center'>
        <Button sx={ sx.link } onClick={handleClick}>
          {user?.display_num_followers}
        </Button>
      </Stack>
      <Stack direction="row" spacing={1} alignItems='center'>
        <Button sx={ sx.link } onClick={handleClick}>
          {user?.display_num_following}
        </Button>
      </Stack>
    </Stack>
    <FollowModal 
      open={open}
      handleClose={() => setOpen(false)}
      user={user}
    />
    </>
	)
}

export default FollowCounts

const sx = {
  divider: {
    borderRight: '2px solid',
    borderColor: 'divider',
    height: 16,
  },
  link: {
    boxShadow: 0,
    color: 'text.secondary',
  }
}