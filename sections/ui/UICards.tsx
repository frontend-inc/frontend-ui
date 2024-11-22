'use client'

import React from 'react'
import { Section, Stack, Row, Heading } from '../../components'
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
			<Stack direction={direction}>
        <Row size="1/3">
          <Heading
            label={label}
            title={title}
            subtitle={subtitle}
            textAlign={direction == 'row' ? 'left' : 'center'}
            size={fontSize}
          />
        </Row>
        <Row size="2/3">
				  <Cards {...rest} />
        </Row>
			</Stack>
		</Section>
	)
}

export default UICards
