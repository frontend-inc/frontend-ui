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
    split,
		label,
		title,
		subtitle,
		textAlign='center',
    fill,
    border,
		bgColor,
		mode,
		py,
		px,
    fontSize='lg',
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
      fill={fill}
      border={border}
		>
			<Stack direction={direction} split={split}>
				<Heading
					label={label}
					title={title}
					subtitle={subtitle}
					textAlign={textAlign}
          size={fontSize}
				/>
				<Cards {...rest} />
			</Stack>
		</Section>
	)
}

export default UICards
