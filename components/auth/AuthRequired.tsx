import React from 'react'
import { useAuth } from 'frontend-js'
import { SignInButton, Placeholder } from '../../components'

export type AuthRequiredProps = {
	children: React.ReactNode
	requireAuth?: boolean
	requireTeam?: boolean
	requirePaid?: boolean
	requireAdmin?: boolean
}

const AuthRequired: React.FC<AuthRequiredProps> = (props) => {
	const {
		children,
		requireAuth = false,
		requireTeam = false,
		requirePaid = false,
		requireAdmin = false,
	} = props
	const { currentUser } = useAuth()

	if (requireAuth && !currentUser?.id) {
		return (
			<Placeholder
				title="Sign In required"
				description="You must be logged in."
				actions={<SignInButton />}
			/>
		)
	}
	if (requireTeam && !currentUser?.team_id) {
		return (
			<Placeholder
				title="Team required"
				description="You must be a member of a team."
				actions={<SignInButton />}
			/>
		)
	}
	if (requirePaid && !currentUser?.paid) {
		return (
			<Placeholder
				title="You must be a subscriber"
				description="You must become a paid subscriber to continue."
				actions={<SignInButton />}
			/>
		)
	}
	if (requireAdmin && currentUser?.role != 'admin') {
		return (
			<Placeholder
				title="You must be an admin"
				description="You must an admin to continue."
				actions={<SignInButton />}
			/>
		)
	}
	return children
}

export default AuthRequired
