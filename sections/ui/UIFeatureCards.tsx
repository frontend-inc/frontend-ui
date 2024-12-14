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
		maxWidth='lg',
		requireAuth,
		editable,
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
			<Stack direction={direction} spacing={10}>
				<Stack direction={direction} size="1/3">
					<Heading
						label={label}
						title={title}
						subtitle={subtitle}
						textAlign={direction == 'row' ? 'left' : 'center'}
						size={fontSize}
						editable={editable}
						handleChange={handleChange}
					/>
				</Stack>
				<Stack direction={direction} size="2/3">
					<FeatureCards {...rest} />
				</Stack>
			</Stack>
		</Section>
	)
}

export default UIFeatureCards
