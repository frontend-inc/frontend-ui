'use client'

import React from 'react'
import { Section, Stack, Heading } from '../../components'
import { Accordion } from '../../components'
import { AccordionProps } from '../../components/web/accordions/Accordion'
import { SectionProps, StackProps, HeadingProps } from '../../types'

type UIAccordionProps = SectionProps & HeadingProps & StackProps & AccordionProps

const UIAccordion: React.FC<UIAccordionProps> = (props) => {
	const {
    direction='column',
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
          textAlign={direction =='row' ? 'left' : 'center'}
          size={fontSize}
        />
        <Accordion {...rest} />
      </Stack>       
		</Section>
	)
}

export default UIAccordion
