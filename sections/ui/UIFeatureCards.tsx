'use client'

import React from 'react'
import { Section, Heading } from '../../components'
import { FeatureCards } from '../../components'
import { FeatureCardsProps } from '../../components/web/featured/FeatureCards'
import { SectionProps, HeadingProps } from '../../types'

type UIFeatureCardsProps = SectionProps & HeadingProps & FeatureCardsProps

const UIFeatureCards: React.FC<UIFeatureCardsProps> = (props) => {
	const {
		label,
		title,
		subtitle,
		textAlign,
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
			<div className="flex flex-col space-y-2">
				<Heading
					label={label}
					title={title}
					subtitle={subtitle}
					textAlign={'center'}
					size="lg"
				/>
				<FeatureCards {...rest} />
			</div>
		</Section>
	)
}

export default UIFeatureCards
