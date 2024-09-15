import React from 'react'
import { UserAvatar } from '../..'
import { Stack, Typography } from '@mui/material'
import { UserType } from '../../../types'

type UserChipProps = {
	user: UserType
	enableUsername?: boolean
	enableEmail?: boolean
	size?: number
}

const UserChip: React.FC<UserChipProps> = (props) => {
	const { user, enableEmail, enableUsername, size = 24 } = props

	if (!user?.name) return null
	return (
		<Stack sx={sx.root} direction="row" spacing={1}>
			<UserAvatar user={user} size={size} />
			<Stack sx={sx.root} direction="column" spacing={0}>
				<Typography variant="caption" color="text.secondary">
					{user?.name}
				</Typography>
				{enableEmail && user?.email && (
					<Typography variant="caption" color="text.secondary">
						{user?.email}
					</Typography>
				)}
				{enableUsername && (
					<Typography variant="caption" color="text.secondary">
						@{user?.username}
					</Typography>
				)}
			</Stack>
		</Stack>
	)
}

export default UserChip

const sx = {
	root: {
		py: 0.5,
		alignItems: 'center',
	},
}
