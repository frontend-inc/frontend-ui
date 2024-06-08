import React from 'react'
import { Paper, Box, Typography } from '@mui/material'

type AuthScreenProps = {
	title: string
	subtitle?: string
	children: React.ReactNode
}

const AuthScreen: React.FC<AuthScreenProps> = (props) => {
	const { title, subtitle, children } = props

	return (
		<Paper elevation={0} sx={sx.paper}>
			<Box sx={sx.titles}>
				<Typography variant="h4" sx={sx.title}>
					{title}
				</Typography>
				{subtitle && (
					<Typography variant="body2" color="text.secondary" sx={sx.subtitle}>
						{subtitle}
					</Typography>
				)}
			</Box>
			{children}
		</Paper>
	)
}

export default AuthScreen

const sx = {
	root: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		bgcolor: 'background.default',
	},
	titles: {
		mb: 1,
	},
	title: {
		textAlign: 'center',
	},
	subtitle: {
		textAlign: 'center',
	},
	paper: {
		width: '100%',
		p: {
			sm: 4,
			xs: 2,
		},
		border: '1px solid',
		borderColor: 'divider',
		borderRadius: 1,
		bgcolor: 'background.paper',
	},
}
