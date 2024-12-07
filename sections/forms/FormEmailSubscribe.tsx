'use client'

import React from 'react'
import { Section, Heading, Stack } from '../../components'
import { EmailSubscribe } from '../../components'
import { EmailSubscribeProps } from '../../components/cms/newsletter/EmailSubscribe'
import { SectionProps, StackProps, HeadingProps } from '../../types'

type FormEmailSubscribeProps = SectionProps &
	HeadingProps &
	StackProps &
	EmailSubscribeProps

const FormEmailSubscribe: React.FC<FormEmailSubscribeProps> = (props) => {
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
			<Stack direction={direction} spacing={10} className="items-center">
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
				<Stack
					direction={direction}
					size="2/3"
					className="items-center h-full justify-center"
				>
					<EmailSubscribe {...rest} />
				</Stack>
			</Stack>
		</Section>
	)
}

export default FormEmailSubscribe
