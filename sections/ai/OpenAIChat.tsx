import React from 'react'
import { Section } from '../../components'
import { AIChat } from '../../components'
import { AIChatProps } from '../../components/ai/chat/AIChat'
import { SectionProps } from '../../types'

type OpenAIChatProps = SectionProps & AIChatProps

const OpenAIChat: React.FC<OpenAIChatProps> = (props) => {
	const {
		theme,
		py,
		px,
		maxWidth,
		requireAuth,
		requireTeam,
		requirePaid,
		requireAdmin,
		...rest
	} = props

	return (
		<Section
			requireAuth={requireAuth}
			requireTeam={requireTeam}
			requirePaid={requirePaid}
			requireAdmin={requireAdmin}
			theme={theme}
			py={py}
			px={px}
			maxWidth={maxWidth}
		>
			<AIChat {...rest} />
		</Section>
	)
}

export default OpenAIChat
