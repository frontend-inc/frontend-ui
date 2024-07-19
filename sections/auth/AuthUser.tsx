import React from 'react'
import { Section } from '../../components'
import { UserProfile } from '../../components'
import { UserProfileProps } from '../../components/social/users/UserProfile'
import { SectionProps } from '../../types'

type AuthUserProps = SectionProps & UserProfileProps

const AuthUser: React.FC<AuthUserProps> = (props) => {
	const {
		mode,
		py,
		px,
		maxWidth,
		requireAuth,
		requireTeam,
		requirePaid,
		requireAdmin,
		...rest
	} = props

	return (
		<Section
			requireAuth={requireAuth}
			requireTeam={requireTeam}
			requirePaid={requirePaid}
			requireAdmin={requireAdmin}
			mode={mode}
			py={py}
			px={px}
			maxWidth={maxWidth}
		>
			<UserProfile {...rest} />
		</Section>
	)
}

export default AuthUser
