'use client'

import React from 'react'
import { Section } from '../../components'
import { AIChat } from '../../components'
import { AIChatProps } from '../../components/ai/chat/AIChat'
import { SectionProps } from '../../types'

type OpenAIChatProps = SectionProps & AIChatProps

const OpenAIChat: React.FC<OpenAIChatProps> = (props) => {
	const {
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
			<AIChat {...rest} />
		</Section>
	)
}

export default OpenAIChat
