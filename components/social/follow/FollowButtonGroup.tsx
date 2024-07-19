import React, { useState, useEffect } from 'react'
import { Link, Stack, Divider, Typography } from '@mui/material'
import { UserType } from '../../../types'
import FollowModal from './FollowModal'

type FollowButtonGroupProps = {
	user: UserType
	color?: string
}

const FollowButtonGroup: React.FC<FollowButtonGroupProps> = (props) => {
	const { user } = props

	const [open, setOpen] = useState(false)

	const handleClick = () => {
		setOpen(true)
	}

	return (
		<>
			<Stack
				direction="row"
				spacing={1}
				alignItems="center"
				divider={<Divider sx={sx.divider} />}
			>
				<Stack direction="row" spacing={1} alignItems="center">
					<Link sx={ sx.link } variant="overline" onClick={handleClick}>
						{user?.display_num_followers}
					</Link>
				</Stack>
				<Stack direction="row" spacing={1} alignItems="center">
					<Link variant='overline' sx={ sx.link } onClick={handleClick}>
						{user?.display_num_following}
					</Link>
				</Stack>
			</Stack>
			<FollowModal open={open} handleClose={() => setOpen(false)} user={user} />
		</>
	)
}

export default FollowButtonGroup

const sx = {
	divider: {
		borderRight: '2px solid',
		borderColor: 'divider',
		height: 16,
	},
	link: {
    minWidth: 100,
		boxShadow: 0,
		color: 'text.secondary',
    textDecoration: 'none'
	},
}
