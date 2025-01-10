'use client'

import React from 'react'
import { Section, Grid, Heading } from '../../components'
import { Cards } from '../../components'
import { CardsProps } from '../../components/web/cards/Cards'
import { SectionProps, StackProps, HeadingProps } from '../../types'

type UICardsProps = SectionProps & HeadingProps & StackProps & CardsProps

const UICards: React.FC<UICardsProps> = (props) => {
	const {
		direction,
		label,
		title,
		subtitle,
		textAlign = 'center',
		variant,
		bgColor,
		bgImage,
		bgOverlay,
		mode,
		py,
		px,
		fontSize = 'md',
		maxWidth,
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
			variant={variant}
		>
			<Grid cols={3} gap={10}>
				<GridItem span="1">
					<Heading
						label={label}
						title={title}
						subtitle={subtitle}
						textAlign={direction == 'row' ? 'left' : 'center'}
						size={fontSize}
						isEditing={isEditing}
						handleChange={handleChange}
					/>
				</Grid>
				<GridItem item span="2">
					<Cards {...rest} />
				</GridItem>
			</Grid>
		</Section>
	)
}

export default UICards
