import React from 'react'
import { Avatar as MuiAvatar, Typography } from '@mui/material'
import { Icon } from '../..'

type UserAvatarProps = {
	src: string
	label?: string
	size?: number
	color?: string
}

const Avatar: React.FC<UserAvatarProps> = (props) => {
	const { src, color, label, size = 40 } = props
	return (
		<MuiAvatar
			variant="circular"
			src={src}
			sx={{
				...sx.avatar,
				height: size,
				width: size,
				bgcolor: src ? 'common.white' : color,
			}}
		>
			{label ? (
				<Typography variant="button" color="background.default" sx={sx.label}>
					{label}
				</Typography>
			) : (
				<Icon name="User" color="secondary.contrastText" />
			)}
		</MuiAvatar>
	)
}

export default Avatar

const sx = {
	avatar: {
		display: 'flex',
		pt: '2px',
		bgcolor: 'secondary.main',
	},
	label: {
		textTransform: 'uppercase',
	},
}
