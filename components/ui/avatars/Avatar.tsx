import React from 'react'
import { Avatar as MuiAvatar, Typography } from '@mui/material'
import { Icon } from '../..'

type UserAvatarProps = {
	src: string
	label?: string
	size?: number
	color?: string
	enableGradient?: boolean
	enableOverlay?: boolean
}

const Avatar: React.FC<UserAvatarProps> = (props) => {
	const {
		src,
		color,
		label,
		enableGradient = false,
		enableOverlay = false,
		size = 40,
	} = props
	return (
		<MuiAvatar
			variant="rounded"
			src={src}
			sx={{
				...sx.avatar,
				height: size,
				width: size,
				bgcolor: src ? 'common.white' : color,
				...(enableGradient && sx.gradient),
				...(enableOverlay && sx.overlay),
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
    borderRadius: 1
	},
	overlay: {
		'&::after': {
			content: '""',
			borderRadius: 1,
			position: 'absolute',
			bottom: 0,
			left: 0,
			width: '100%',
			height: '100%',
			background: 'rgb(0,0,0,0.5)',
		},
	},
	gradient: {
		'&::after': {
			content: '""',
			borderRadius: 1,
			position: 'absolute',
			bottom: 0,
			left: 0,
			width: '100%',
			height: '100%',
			background: 'linear-gradient(to top, rgb(0,0,0,0.3), transparent)',
		},
	},
	label: {
		textTransform: 'uppercase',
	},
}
