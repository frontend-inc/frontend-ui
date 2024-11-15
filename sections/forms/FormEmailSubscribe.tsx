'use client'

import React from 'react'
import { Section, Heading } from '../../components'
import { EmailSubscribe } from '../../components'
import { EmailSubscribeProps } from '../../components/cms/newsletter/EmailSubscribe'
import { SectionProps, HeadingProps } from '../../types'

type FormEmailSubscribeProps = SectionProps & HeadingProps & 
  EmailSubscribeProps

const FormEmailSubscribe: React.FC<FormEmailSubscribeProps> = (props) => {
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
			<EmailSubscribe {...rest} />
		</Section>
	)
}

export default FormEmailSubscribe
