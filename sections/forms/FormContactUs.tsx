'use client'

import React from 'react'
import { Section, Heading, Stack } from '../../components'
import { ContactForm } from '../../components'
import { ContactFormProps } from '../../components/cms/leads/ContactForm'
import { SectionProps, StackProps, HeadingProps } from '../../types'

type FormContactUsProps = SectionProps &
	HeadingProps &
	StackProps &
	ContactFormProps

const FormContactUs: React.FC<FormContactUsProps> = (props) => {
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
			<Stack direction={direction} spacing={10}>
        <Stack direction={direction} size="1/3">
          <Heading
            label={label}
            title={title}
            subtitle={subtitle}
            size={fontSize}
            textAlign={direction == 'row' ? 'left' : 'center'}
          />
        </Stack>
        <Stack direction={direction} size="2/3">
				  <ContactForm {...rest} />
        </Stack>
			</Stack>
		</Section>
	)
}

export default FormContactUs
