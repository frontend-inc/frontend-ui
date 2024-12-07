'use client'

import React from 'react'
import { Section } from '../../components'
import { Calendly } from '../../components'
import { CalendlyProps } from '../../components/addons/calendly/Calendly'
import { SectionProps } from '../../types'

export type AddonCalendlyProps = SectionProps & CalendlyProps

const AddonCalendly: React.FC<AddonCalendlyProps> = (props) => {
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
			<Calendly {...rest} />
		</Section>
	)
}

export default AddonCalendly
