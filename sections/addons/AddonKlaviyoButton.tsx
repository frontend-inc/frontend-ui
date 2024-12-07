'use client'

import React from 'react'
import { Section } from '../../components'
import { KlaviyoButton } from '../../components'
import { KlaviyoButtonProps } from '../../components/addons/klaviyo/KlaviyoButton'
import { SectionProps } from '../../types'

type AddonKlaviyoButtonProps = SectionProps & KlaviyoButtonProps

const AddonKlaviyoButton: React.FC<AddonKlaviyoButtonProps> = (props) => {
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
			<KlaviyoButton {...rest} />
		</Section>
	)
}

export default AddonKlaviyoButton
