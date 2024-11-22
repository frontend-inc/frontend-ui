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
		subtitle,
		textAlign = 'center',
		fontSize = 'lg',
		bgColor,
		mode,
		py,
		px,
		maxWidth = 'xl',
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
			<div className="flex flex-col space-y-4 w-full">
				<Heading
					label={label}
					title={title}
					subtitle={subtitle}
					textAlign={textAlign}
					size={fontSize}
				/>
				<Pricing {...rest} />
			</div>
		</Section>
	)
}

export default UIPricing
