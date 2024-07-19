import React from 'react'
import { Section } from '../../components'
import { UserDetails } from '../../components'
import { UserDetailsProps } from '../../components/auth/users/UserDetails'
import { SectionProps } from '../../types'

type AuthUserDetailsProps = SectionProps & UserDetailsProps

const AuthUserDetails: React.FC<AuthUserDetailsProps> = (props) => {
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
			<UserDetails {...rest} />
		</Section>
	)
}

export default AuthUserDetails
