'use client'

import React from 'react'
import { Section } from '../../components'
import { Quote, Heading } from '../../components'
import { QuoteProps } from '../../components/ui/typography/Quote'
import { SectionProps, HeadingProps } from '../../types'

type UIQuoteProps = SectionProps & HeadingProps & QuoteProps

const UIQuote: React.FC<UIQuoteProps> = (props) => {
	const { 
    bgColor, 
    mode, 
    py='sm', 
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
      <Quote {...rest} />
		</Section>
	)
}

export default UIQuote
