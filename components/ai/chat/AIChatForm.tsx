import React, { useEffect } from 'react'
import { TextInput } from '../../../components'

// Optional but recommended: use the Edge Runtime. This can only be done at the page level, not inside nested components.
//export const runtime = 'edge';
type AiChatFormProps = {
	id?: string
	label?: string
	prompt: string
	setMessages: any
	input: string
	handleInputChange: any
}

const AiChatForm: React.FC<AiChatFormProps> = (props) => {
	const {
		label = 'Start a conversation',
		prompt,
		setMessages,
		input,
		handleInputChange,
	} = props

	useEffect(() => {
		setMessages([
			{
				id: 'openai-chat',
				role: 'system',
				content: prompt,
			},
		])
	}, [prompt])

	return (
		<TextInput
			multiline
			label={label}
			name="prompt"
			placeholder="Enter text..."
			value={input}
			handleChange={handleInputChange}
		/>
	)
}

export default AiChatForm
