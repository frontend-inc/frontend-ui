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
			fill={fill}
			border={border}
			requireAuth={requireAuth}
			bgColor={bgColor}
			mode={mode}
			py={py}
			px={px}
			maxWidth={maxWidth}
		>
			<Stack direction={direction} spacing={10}>
        <Stack direction={direction} size="1/3" className="items-center">
          <Heading
            label={label}
            title={title}
            subtitle={subtitle}
            size={fontSize}
            textAlign={direction == 'row' ? 'left' : 'center'}
          />
        </Stack>
        <Stack direction={direction} size="2/3">
				  <EmailSubscribe {...rest} />
        </Stack>
			</Stack>
		</Section>
	)
}

export default FormEmailSubscribe
