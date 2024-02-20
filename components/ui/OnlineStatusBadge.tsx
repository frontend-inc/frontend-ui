import React from 'react'
import { Badge } from '@mui/material'

type OnlineStatusBadgeProps = {
	children?: React.ReactNode
}

const OnlineStatusBadge: React.FC<OnlineStatusBadgeProps> = (props) => {
	const { children } = props

	return (
		<Badge
			{...props}
			variant="dot"
			sx={sx.badge}
			anchorOrigin={{
				vertical: 'bottom',
				horizontal: 'right',
			}}
			color="success"
		>
			{children && children}
		</Badge>
	)
}

export default OnlineStatusBadge

const sx = {
	badge: {
		'& .MuiBadge-dot': {
			right: '5px',
			bottom: '5px',
			bgcolor: 'success.main',
		},
	},
}
