'use client'

import React from 'react'
import { Section, Heading } from '../../components'
import { Pricing } from '../../components'
import { PricingProps } from '../../components/web/prices/Pricing'
import { SectionProps, HeadingProps } from '../../types'

type UIPricingProps = SectionProps & HeadingProps & PricingProps

const UIPricing: React.FC<UIPricingProps> = (props) => {
	const {
		label,
		title,
		description,
		textAlign,
		bgColor,
		mode,
		py,
		px,
		maxWidth,
		requireAuth,

		requirePaid,
		...rest
	} = props

	return (
		<Section
			requireAuth={requireAuth}
			requirePaid={requirePaid}
			bgColor={bgColor}
			mode={mode}
			py={py}
			px={px}
			maxWidth={maxWidth}
		>
			<Heading
				label={label}
				title={title}
				description={description}
				textAlign={'center'}
        textVariant="h2"
			/>
			<Pricing {...rest} />
		</Section>
	)
}

export default UIPricing
