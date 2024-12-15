'use client'

import React from 'react'
import { Section } from '../../components'
import { Typeform } from '../../components'
import { TypeformProps } from '../../components/addons/typeform/Typeform'
import { SectionProps } from '../../types'

type AddonTypeformProps = SectionProps & TypeformProps

const AddonTypeform: React.FC<AddonTypeformProps> = (props) => {
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
			<Typeform {...rest} />
		</Section>
	)
}

export default AddonTypeform
