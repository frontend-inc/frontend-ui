'use client'

import React from 'react'
import { Section, Stack, Heading } from '../../components'
import { FeatureCards } from '../../components'
import { FeatureCardsProps } from '../../components/web/feature-cards/FeatureCards'
import { SectionProps, StackProps, HeadingProps } from '../../types'

type UIFeatureCardsProps = SectionProps &
	HeadingProps &
	StackProps &
	FeatureCardsProps

const UIFeatureCards: React.FC<UIFeatureCardsProps> = (props) => {
	const {
		direction = 'column',
		label,
		title,
		subtitle,
		textAlign = 'center',
		fontSize = 'md',
		bgColor,
		bgImage,
		bgOverlay,
		mode,
		py,
		px,
		maxWidth = 'lg',
		requireAuth,
		isEditing,
		handleChange,
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
			<Stack spacing={4}>
				<Heading
					label={label}
					title={title}
					subtitle={subtitle}
					textAlign="center"
					size={fontSize}
					isEditing={isEditing}
					handleChange={handleChange}
				/>
				<FeatureCards {...rest} />
			</Stack>
		</Section>
	)
}

export default UIFeatureCards
