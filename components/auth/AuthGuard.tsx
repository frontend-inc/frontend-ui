import React from 'react'
import { useAuth } from 'frontend-js'
import { Box } from '@mui/material'
import { Heading, AuthWall, PayWall } from '..'

export type AuthGuardProps = {
	children: React.ReactNode
	roles?: string[]
	requireAuth?: boolean
	requireTeam?: boolean
	requirePaid?: boolean
}

const AuthGuard: React.FC<AuthGuardProps> = (props) => {
	const {
		children,
		roles = [],
		requireAuth = false,
		requireTeam = false,
		requirePaid = false,
	} = props
	const { currentUser } = useAuth()

	if (requireAuth && !currentUser?.id) {
		return <AuthWall />
	}
	if (requireTeam && !currentUser?.team_id) {
		return (
			<Box sx={sx.center}>
				<Heading
					textAlign="center"
					title="Team required"
					description="You must be a member of a team."
				/>
			</Box>
		)
	}
	if (
		roles?.length > 0 &&
		!roles?.includes(currentUser?.role) &&
		currentUser?.role !== 'admin'
	) {
		return (
			<Box sx={sx.center}>
				<Heading
					textAlign="center"
					title="Unauthorized"
					description="You are not authorized to access this page."
				/>
			</Box>
		)
	}
	if (requirePaid && !currentUser?.paid) {
		return <PayWall />
	}
	return children
}

export default AuthGuard

const sx = {
	center: {
		width: '100%',
		height: '100vh',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
}
