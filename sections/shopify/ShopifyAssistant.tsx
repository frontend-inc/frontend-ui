'use client'

import React from 'react'
import { Section, Heading } from '../../components'
import { ShopifyAiAssistant } from '../../components/shopify'
import { ShopifyAiAssistantProps } from '../../components/shopify/ai/ShopifyAiAssistant'
import { SectionProps, HeadingProps } from '../../types'

type ShopifyAssistantProps = SectionProps &
	HeadingProps &
	ShopifyAiAssistantProps

const ShopifyAssistant: React.FC<ShopifyAssistantProps> = (props) => {
	const {
		label,
		title,
		subtitle,
		textAlign = 'center',
		bgColor,
		bgImage,
		bgOverlay,
		mode,
		py,
		px,
		maxWidth,
		requireAuth,
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
		>
			<Heading
				label={label}
				title={title}
				subtitle={subtitle}
				textAlign={textAlign}
			/>
			<ShopifyAiAssistant {...rest} />
		</Section>
	)
}

export default ShopifyAssistant
