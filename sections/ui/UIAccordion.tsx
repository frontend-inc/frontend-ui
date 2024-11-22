'use client'

import React from 'react'
import { Section, Stack, Heading } from '../../components'
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
					<Accordion {...rest} />
				</Stack>
			</Stack>
		</Section>
	)
}

export default UIAccordion
