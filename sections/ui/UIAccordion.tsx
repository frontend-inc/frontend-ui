'use client'

import React from 'react'
import { Section, Heading } from '../../components'
import { Accordion } from '../../components'
import { AccordionProps } from '../../components/web/accordions/Accordion'
import { SectionProps, HeadingProps } from '../../types'

type UIAccordionProps = SectionProps & HeadingProps & AccordionProps

const UIAccordion: React.FC<UIAccordionProps> = (props) => {
	const {
		label,
		title,
		subtitle,
		textAlign='center',
    fontSize='lg',
		bgColor,
		mode,
		py,
		px,
		maxWidth='sm',
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
			<Heading
				label={label}
				title={title}
				subtitle={subtitle}
				textAlign={textAlign}
        size={fontSize}
			/>
			<Accordion {...rest} />
		</Section>
	)
}

export default UIAccordion
