import React from 'react'
import { Paper, Box, Container, Typography } from '@mui/material'
import Image from 'next/image'
import { useApp } from '../../../hooks'

type AuthScreenProps = {
	title: string
	subtitle?: string
	children: React.ReactNode
}

const AuthScreen: React.FC<AuthScreenProps> = (props) => {
	const { title, subtitle, children } = props

	const { logo } = useApp()

	return (
		<Box sx={sx.root}>
			<Container maxWidth="sm">
				<Paper elevation={0} sx={sx.paper}>
					<Box sx={sx.logo}>
            { logo && (
						  <Image src={logo} alt="Logo" height={48} width={48} />
            )}
					</Box>
					<Box sx={sx.titles}>
						<Typography variant="h4" sx={sx.title}>
							{title}
						</Typography>
						{subtitle && (
							<Typography variant="body1" sx={sx.subtitle}>
								{subtitle}
							</Typography>
						)}
					</Box>
					{children}
				</Paper>
			</Container>
		</Box>
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
		height: '100%',
	},
	titles: {
		mb: 1,
	},
	logo: {
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		pb: 2,
	},
	title: {
		textAlign: 'center',
	},
	subtitle: {
		textAlign: 'center',
		color: 'text.primary',
	},
	paper: {
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
