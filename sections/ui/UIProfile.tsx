'use client'

import React from 'react'
import { Section } from '../../components'
import { Profile } from '../../components'
import { ProfileProps } from '../../components/ui/profiles/Profile'
import { SectionProps } from '../../types'

type UIProfileProps = SectionProps & ProfileProps

const UIProfile: React.FC<UIProfileProps> = (props) => {
	const {
		variant,
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
			variant={variant}
		>
			<Profile {...rest} />
		</Section>
	)
}

export default UIProfile
