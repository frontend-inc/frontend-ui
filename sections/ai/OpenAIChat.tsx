import React from 'react'
import { Section } from '../../components'
import { AIChat } from '../../components'
import { AIChatProps } from '../../components/ai/chat/AIChat'
import { SectionProps } from '../../types'

type OpenAIChatProps = SectionProps & AIChatProps

const OpenAIChat: React.FC<OpenAIChatProps> = (props) => {
	const {
		bgColor,
		py,
		px,
		maxWidth,
		requireAuth,

		requirePaid,
		...rest
	} = props

	return (
		<Section
			requireAuth={requireAuth}
			requirePaid={requirePaid}
			bgColor={bgColor}
			py={py}
			px={px}
			maxWidth={maxWidth}
		>
			<AIChat {...rest} />
		</Section>
	)
}

export default OpenAIChat
