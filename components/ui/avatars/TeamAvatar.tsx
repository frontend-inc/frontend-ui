import React from 'react'
import { Avatar, Typography } from '@mui/material'
import { Icon } from '../..'
import { getInitials } from '../../../helpers'

type TeamAvatarProps = {
	team: any
	size?: number
}

const TeamAvatar: React.FC<TeamAvatarProps> = (props) => {
	const { team, size = 36 } = props
	return (
		<Avatar
			src={team?.image?.url}
			sx={{
				...sx.root,
				height: size,
				width: size,
				bgcolor: team?.image?.url ? 'common.white' : team?.color,
			}}
		>
			{team?.name ? (
				<Typography variant="button" color="background.default" sx={sx.label}>
					{getInitials(team?.name)}
				</Typography>
			) : (
				<Icon name="User" color="secondary.contrastText" />
			)}
		</Avatar>
	)
}

export default TeamAvatar

const sx = {
	root: {
		display: 'flex',
		pt: '2px',
		bgcolor: 'secondary.main',
	},
	label: {
		textTransform: 'uppercase',
	},
}
