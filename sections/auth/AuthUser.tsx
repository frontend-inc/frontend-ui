import React from 'react'
import { Section } from '../../components'
import { CurrentUser } from '../../components'
import { CurrentUserProps } from '../../components/auth/users/CurrentUser'
import { SectionProps } from '../../types'

type AuthUserProps = SectionProps & CurrentUserProps

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
			<CurrentUser {...rest} />
		</Section>
	)
}

export default AuthUser
