import React from 'react'
import { Section } from '../../components'
import { ContactForm } from '../../components'
import { ContactFormProps } from '../../components/cms/leads/ContactForm'
import { SectionProps } from '../../types'

type CmsContactFormProps = SectionProps & ContactFormProps

const CmsContactForm: React.FC<CmsContactFormProps> = (props) => {
	const {
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
			<ContactForm {...rest} />
		</Section>
	)
}

export default CmsContactForm
