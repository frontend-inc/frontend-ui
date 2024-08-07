import React from 'react'
import { Section } from '../../components'
import { CurrentUserDetails } from '../../components'
import { CurrentUserDetailsProps } from '../../components/auth/users/CurrentUserDetails'
import { SectionProps } from '../../types'

type AuthUserDetailsProps = SectionProps & CurrentUserDetailsProps

const AuthUserDetails: React.FC<AuthUserDetailsProps> = (props) => {
	const {
		mode,
		py,
		px,
		maxWidth,
		requireAuth,
		requireTeam,
		requirePaid,
		...rest
	} = props

	return (
		<Section
			requireAuth={requireAuth}
			requireTeam={requireTeam}
			requirePaid={requirePaid}
			mode={mode}
			py={py}
			px={px}
			maxWidth={maxWidth}
		>
			<CurrentUserDetails {...rest} />
		</Section>
	)
}

export default AuthUserDetails
