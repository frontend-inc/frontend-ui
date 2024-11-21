'use client'

import React from 'react'
import { Section, Heading, Stack } from '../../components'
import { EmailSubscribe } from '../../components'
import { EmailSubscribeProps } from '../../components/cms/newsletter/EmailSubscribe'
import { SectionProps, StackProps, HeadingProps } from '../../types'

type FormEmailSubscribeProps = SectionProps & HeadingProps & StackProps & 
  EmailSubscribeProps

const FormEmailSubscribe: React.FC<FormEmailSubscribeProps> = (props) => {
	
  const {
    direction='row',
    split='1/3',
    label,
		title,
		subtitle,
		textAlign='center',
    fontSize='lg',    
		bgColor,
		mode,
		py,
		px,
		maxWidth='lg',
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
			  <EmailSubscribe {...rest} />
      </Stack>
		</Section>
	)
}

export default FormEmailSubscribe
