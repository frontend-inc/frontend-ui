'use client'

import React from 'react'
import { Section } from '../../components'
import { Login } from '../../components'
import { LoginProps } from '../../components/auth/login/Login'
import { SectionProps } from '../../types'

type AuthLoginProps = SectionProps & LoginProps

const AuthLogin: React.FC<AuthLoginProps> = (props) => {
	const {
		bgColor,
		bgImage,
		bgOverlay,
		mode,
		py,
		px,
		maxWidth = 'sm',
		requireAuth,
		...rest
	} = props

	return (
		<Section
			requireAuth={false}
			bgColor={bgColor}
			bgImage={bgImage}
			bgOverlay={bgOverlay}
			mode={mode}
			py={py}
			px={px}
			maxWidth={maxWidth}
		>
			<Login {...rest} />
		</Section>
	)
}

export default AuthLogin
