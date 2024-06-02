import React from 'react'
import { Stack, Container, Box } from '@mui/material'
import Image from 'next/image'
import { useApp } from '../../../hooks'

type AuthLayoutProps = {
	children: React.ReactNode
	footer?: React.ReactNode
}

const AuthLayout: React.FC<AuthLayoutProps> = (props) => {
	const { children, footer } = props

	const { logo } = useApp()

	return (
		<Stack width='100%' direction="column" spacing={2} justifyContent="space-between">
			<Box sx={sx.header}>
				<Box sx={sx.logo}>
					{logo && (
						<Image
							src={logo}
							alt="Logo"
							height={100}
							width={100}
							layout="responsive"
							style={{
								width: '100%',
								objectFit: 'contain',
							}}
						/>
					)}
				</Box>
			</Box>
			<Box sx={sx.root}>
				<Container maxWidth="sm">{children}</Container>
			</Box>
			<Box sx={sx.footer}>{footer}</Box>
		</Stack>
	)
}

export default AuthLayout

const sx = {
	root: {
    width: '100%',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		height: 'calc(100vh - 160px)',
		bgcolor: 'background.default',
	},
	header: {
		py: 2,
		height: 60,
		maxHeight: 60,
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	footer: {
		py: 2,
		height: 60,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	logo: {
		maxHeight: 40,
		maxWidth: 110,
	},
}
