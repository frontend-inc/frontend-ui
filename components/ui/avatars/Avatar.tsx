import React from 'react'
import { Box, Avatar as MuiAvatar, Typography } from '@mui/material'

type UserAvatarProps = {
	src?: string
  variant?: 'circular' | 'rounded' | 'square'
	label?: string
	size?: number
	color?: string
	enableGradient?: boolean
	enableOverlay?: boolean
}

const Avatar: React.FC<UserAvatarProps> = (props) => {
	const {
		src,
		color='#333333',
		label,
    variant='circular',
		enableGradient = false,
		enableOverlay = false,
		size = 40,
	} = props
  
	return (
		<MuiAvatar
			src={src}
      variant={variant}
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
				<Box />
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
