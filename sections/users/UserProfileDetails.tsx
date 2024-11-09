'use client'

import React from 'react'
import { Section } from '../../components'
import { UserDetails } from '../../components'
import { UserDetailsProps } from '../../components/users/profile/UserDetails'
import { SectionProps } from '../../types'

type CmsUserDetailsProps = SectionProps & UserDetailsProps

const CmsUserDetails: React.FC<CmsUserDetailsProps> = (props) => {
	const {
		bgColor,
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
			mode={mode}
			py={py}
			px={px}
			maxWidth={maxWidth}
		>
			<UserDetails {...rest} />
		</Section>
	)
}

export default CmsUserDetails
