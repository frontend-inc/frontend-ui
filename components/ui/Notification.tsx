import React from 'react'
import { Box, Typography } from '@mui/material'
import { InfoOutlined } from '@mui/icons-material'

type NotificationProps = {
	children: React.ReactNode
}

const Notification: React.FC<NotificationProps> = (props) => {
	const { children } = props

	return (
		<Box sx={sx.root}>
			<Box sx={sx.icon}>
				<InfoOutlined sx={sx.icon} />
			</Box>
			<Typography variant="caption" sx={sx.text}>
				{children}
			</Typography>
		</Box>
	)
}

export default Notification

const sx = {
	root: {
		px: 2,
		py: 0.5,
		borderRadius: (theme) => theme.shape.borderRadius,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-start',
		width: '100%',
		border: '1px solid',
		borderColor: 'warning.border',
		bgcolor: 'warning.light',
	},
	text: {
		fontWeight: 500,
		color: 'text.primary',
	},
	icon: {
		mr: 1,
		height: '20px',
		width: '20px',
		color: 'warning.main',
	},
}
