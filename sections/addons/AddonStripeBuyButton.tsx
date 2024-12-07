'use client'

import React from 'react'
import { Section, StripeBuyButton } from '../../components'
import { StripeBuyButtonProps } from '../../components/addons/stripe/StripeBuyButton'
import { SectionProps } from '../../types'

type AddonStripeBuyButtonProps = SectionProps & StripeBuyButtonProps

const AddonStripeBuyButton: React.FC<AddonStripeBuyButtonProps> = (props) => {
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
			<StripeBuyButton {...rest} />
		</Section>
	)
}

export default AddonStripeBuyButton
