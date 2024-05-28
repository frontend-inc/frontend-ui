import React from 'react'
import { Section, Heading } from '../../components'
import { Accordion } from '../../components'
import { AccordionProps } from '../../components/web/accordions/Accordion'
import { SectionProps, HeadingProps } from '../../types'

type WebAccordionProps = SectionProps & HeadingProps & AccordionProps

const WebAccordion: React.FC<WebAccordionProps> = (props) => {
	const {
		label,
		title,
		description,
		textAlign,
		bgcolor,
		py,
		px,
		maxWidth,
		requireAuth,
		requireTeam,
		requirePaid,
		requireAdmin,
		...rest
	} = props

	return (
		<Section
			requireAuth={requireAuth}
			requireTeam={requireTeam}
			requirePaid={requirePaid}
			requireAdmin={requireAdmin}
			bgcolor={bgcolor}
			py={py}
			px={px}
			maxWidth={maxWidth}
		>
			<Heading
				label={label}
				title={title}
				description={description}
				textAlign={textAlign}
			/>
			<Accordion {...rest} />
		</Section>
	)
}

export default WebAccordion
