import React from 'react'
import { useAuth } from 'frontend-js'
import { Box } from '@mui/material'
import { Heading, AuthWall, PayWall } from '..'

export type AuthGuardProps = {
	children: React.ReactNode
	requireAuth?: boolean
	requireTeam?: boolean
	requirePaid?: boolean
	requireAdmin?: boolean
}

const AuthGuard: React.FC<AuthGuardProps> = (props) => {
	const {
		children,
		requireAuth = false,
		requireTeam = false,
		requirePaid = false,
		requireAdmin = false,
	} = props
	const { currentUser } = useAuth()

	if (requireAuth && !currentUser?.id) {
		return <AuthWall />
	}
	if (requireTeam && !currentUser?.team_id) {
		return (
			<Box sx={sx.center}>
				<Heading
					title="Team required"
					description="You must be a member of a team."
				/>
			</Box>
		)
	}
	if (requirePaid && !currentUser?.paid) {
		return <PayWall />
	}
	if (requireAdmin && currentUser?.role != 'admin') {
		return (
			<Box sx={sx.center}>
				<Heading
					title="Admin Required"
					description="You must be an admin to access this page."
				/>
			</Box>
		)
	}
	return children
}

export default AuthGuard

const sx = {
	center: {
		height: '100vh',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
}
