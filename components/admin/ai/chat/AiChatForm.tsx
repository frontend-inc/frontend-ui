import React, { useEffect } from 'react'
import {
	List,
	ListItem,
	ListItemButton,
	ListItemText,
	Stack,
} from '@mui/material'
import { TextInput } from '../../../../components'

// Optional but recommended: use the Edge Runtime. This can only be done at the page level, not inside nested components.
//export const runtime = 'edge';
type AiChatFormProps = {
	id?: string
	open: boolean
	prompt: string
	handleClick: (text: string) => void
	messages: any[]
	setMessages: any
	input: string
	handleInputChange: any
}

const AiChatForm: React.FC<AiChatFormProps> = (props) => {
	const {
		open,
		prompt,
		handleClick,

		messages,
		setMessages,
		input,
		handleInputChange,
	} = props

	useEffect(() => {
		if (open) {
			setMessages([
				{
					id: 'openai-chat',
					role: 'system',
					content: prompt,
				},
			])
		}
	}, [open])

	return (
		<Stack direction="column" spacing={1}>
			<TextInput
				multiline
				label="Write a sentence about ..."
				name="prompt"
				placeholder="Enter text..."
				value={input}
				handleChange={handleInputChange}
			/>
			<List disablePadding>
				{messages
					.filter((message) => message.role == 'assistant')
					.map((message, i) => (
						<ListItem key={i} disablePadding sx={sx.listItem}>
							<ListItemButton
								sx={sx.listItemButton}
								onClick={() => handleClick(message.content)}
							>
								<ListItemText sx={sx.text} primary={message.content} />
							</ListItemButton>
						</ListItem>
					))}
			</List>
		</Stack>
	)
}

export default AiChatForm

const sx = {
	listItem: {
		mb: 1,
	},
	listItemButton: {
		border: '1px solid',
		borderColor: 'divider',
		bgcolor: 'background.paper',
		p: 1,
		borderRadius: 1,
		'&:hover': {
			borderColor: 'primary.main',
			bgcolor: 'background.paper',
		},
	},
	text: {
		'& .MuiListItemText-primary': {
			whiteSpace: 'pre-line',
		},
	},
}
