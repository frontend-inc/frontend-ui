'use client'

import React from 'react'
import { Section, Heading, Stack } from '../../components'
import { LeadForm } from '../../components'
import { LeadFormProps } from '../../components/cms/leads/LeadForm'
import { SectionProps, StackProps, HeadingProps } from '../../types'

type FormContactUsProps = SectionProps &
	HeadingProps &
	StackProps &
	LeadFormProps

const FormLead: React.FC<FormContactUsProps> = (props) => {
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
			<Stack direction={direction} spacing={4}>
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
					<LeadForm {...rest} />
				</Stack>
			</Stack>
		</Section>
	)
}

export default FormLead
