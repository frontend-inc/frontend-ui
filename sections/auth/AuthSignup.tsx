import React from 'react'
import { Section } from '../../components'
import { Signup } from '../../components'
import { SignupProps } from '../../components/auth/signup/Signup'
import { SectionProps } from '../../types'

type AuthSignupProps = SectionProps & SignupProps

const AuthSignup: React.FC<AuthSignupProps> = (props) => {
	const {
		bgcolor,
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
			requireAuth={false}
			bgcolor={bgcolor}
			py={py}
			px={px}
			maxWidth={maxWidth}
		>
			<Signup {...rest} />
		</Section>
	)
}

export default AuthSignup
