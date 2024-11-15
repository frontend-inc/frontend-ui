'use client'

import React from 'react'
import { Section, Heading } from '../../components'
import { ContactForm } from '../../components'
import { ContactFormProps } from '../../components/cms/leads/ContactForm'
import { SectionProps, HeadingProps } from '../../types'

type FormContactUsProps = SectionProps & HeadingProps & ContactFormProps

const FormContactUs: React.FC<FormContactUsProps> = (props) => {
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

  console.log('FormContactUs', maxWidth, props)

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
        size={fontSize}
        textAlign={textAlign}
      />
			<ContactForm {...rest} />
		</Section>
	)
}

export default FormContactUs
