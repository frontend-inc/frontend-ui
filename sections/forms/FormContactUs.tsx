'use client'

import React from 'react'
import { Section } from '../../components'
import { ContactForm } from '../../components'
import { ContactFormProps } from '../../components/cms/leads/ContactForm'
import { SectionProps } from '../../types'

type FormContactUsProps = SectionProps & ContactFormProps

const FormContactUs: React.FC<FormContactUsProps> = (props) => {
	const {
		bgColor,
		mode,
		py=12,
		px,
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
		>
			<ContactForm {...rest} />
		</Section>
	)
}

export default FormContactUs
