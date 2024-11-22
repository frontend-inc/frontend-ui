'use client'

import React from 'react'
import { Section, Stack, Heading } from '../../components'
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
		fill,
		border,
		bgColor,
		mode,
		py,
		px,
		fontSize = 'lg',
		maxWidth,
		requireAuth,
    editable,
    handleChange,
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
			fill={fill}
			border={border}
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
					<Cards {...rest} />
				</Stack>
			</Stack>
		</Section>
	)
}

export default UICards
