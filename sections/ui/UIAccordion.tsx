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
		description,
		textAlign,
		mode,
		py,
		px,
		maxWidth,
		requireAuth,

		requirePaid,
		...rest
	} = props

	return (
		<Section
			requireAuth={requireAuth}
			requirePaid={requirePaid}
			mode={mode}
			py={py}
			px={px}
			maxWidth={maxWidth}
		>
			<Heading
				label={label}
				title={title}
				description={description}
				textAlign={'center'}
				
			/>
			<Accordion {...rest} />
		</Section>
	)
}

export default UIAccordion
