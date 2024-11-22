'use client'

import React from 'react'
import { Section, Row, Heading, Stack } from '../../components'
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

  const isRow = direction == 'row'

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
        <Row size={ isRow ? "1/3" : "full" }>
          <Heading
            label={label}
            title={title}
            subtitle={subtitle}
            size={fontSize}
            textAlign={direction == 'row' ? 'left' : 'center'}
          />
        </Row>
        <Row size={ isRow ? "2/3" : "full" }>
				  <ContactForm {...rest} />
        </Row>
			</Stack>
		</Section>
	)
}

export default FormContactUs
