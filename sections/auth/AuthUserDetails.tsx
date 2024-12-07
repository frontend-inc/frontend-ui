'use client'

import React from 'react'
import { Section } from '../../components'
import { CurrentUserDetails } from '../../components'
import { CurrentUserDetailsProps } from '../../components/auth/users/CurrentUserDetails'
import { SectionProps } from '../../types'

type AuthUserDetailsProps = SectionProps & CurrentUserDetailsProps

const AuthUserDetails: React.FC<AuthUserDetailsProps> = (props) => {
	const {
		bgColor,
		bgImage,
		bgOverlay,
		mode,
		py,
		px,
		maxWidth,
		requireAuth,
		...rest
	} = props

	return (
		<Section
			requireAuth={requireAuth}
			bgColor={bgColor}
			bgImage={bgImage}
			bgOverlay={bgOverlay}
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
