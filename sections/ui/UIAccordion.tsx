'use client'

import React from 'react'
import { Section, Stack, Row, Heading } from '../../components'
import { Accordion } from '../../components'
import { AccordionProps } from '../../components/web/accordions/Accordion'
import { SectionProps, StackProps, HeadingProps } from '../../types'

type UIAccordionProps = SectionProps &
	HeadingProps &
	StackProps &
	AccordionProps

const UIAccordion: React.FC<UIAccordionProps> = (props) => {
	const {
		direction = 'column',
		label,
		title,
		subtitle,
		textAlign = 'center',
		fontSize = 'lg',
		fill,
		border,
		bgColor,
		mode,
		py,
		px,
		maxWidth = 'lg',
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
					<Accordion {...rest} />
				</Row>
			</Stack>
		</Section>
	)
}

export default UIAccordion
