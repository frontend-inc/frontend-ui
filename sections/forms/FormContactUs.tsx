'use client'

import React from 'react'
import { Section, Heading, Stack } from '../../components'
import { ContactForm } from '../../components'
import { ContactFormProps } from '../../components/cms/leads/ContactForm'
import { SectionProps, StackProps, HeadingProps } from '../../types'

type FormContactUsProps = SectionProps & HeadingProps & StackProps & ContactFormProps

const FormContactUs: React.FC<FormContactUsProps> = (props) => {
	const {
    split='1/3',
    direction='column',
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
      <Stack direction={direction} split={split}>
        <Heading
          label={label}
          title={title}
          subtitle={subtitle}
          size={fontSize}
          textAlign={direction == 'row' ? 'left' : 'center'}
        />
        <ContactForm {...rest} />
      </Stack>
		</Section>
	)
}

export default FormContactUs
