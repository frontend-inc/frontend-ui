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
		direction = 'row',
		label,
		title,
		subtitle,
		textAlign = 'center',
		fontSize = 'md',
		variant,
		bgColor,
		bgImage,
		bgOverlay,
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
			bgImage={bgImage}
			bgOverlay={bgOverlay}
			mode={mode}
			py={py}
			px={px}
			maxWidth={maxWidth}
			variant={variant}
		>
			<Stack direction={direction} spacing={direction == 'row' ? 10 : 2 }>
				<Stack direction={direction} size="1/3">
					<Heading
						label={label}
						title={title}
						subtitle={subtitle}
						size={fontSize}
						textAlign={direction == 'row' ? 'left' : 'center'}
						editable={editable}
						handleChange={handleChange}
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
