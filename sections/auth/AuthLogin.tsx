import React from 'react'
import { Section } from '../../components'
import { Login } from '../../components'
import { LoginProps } from '../../components/auth/login/Login'
import { SectionProps } from '../../types'

type AuthLoginProps = SectionProps & LoginProps

const AuthLogin: React.FC<AuthLoginProps> = (props) => {
	const { bgcolor, py, px, maxWidth, requireAuth, ...rest } = props

	return (
		<Section
			requireAuth={false}
			bgcolor={bgcolor}
			py={py}
			px={px}
			maxWidth={maxWidth}
		>
			<Login {...rest} />
		</Section>
	)
}

export default AuthLogin
