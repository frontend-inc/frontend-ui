import React, { useState } from 'react'
import { Icon, Drawer, IconLoading } from '../../../../components'
import { Button, Tooltip, IconButton } from '@mui/material'
import { TextInputPropsType } from '../../../../types'
import AiChatForm from './AiChatForm'
import { useChat } from 'ai/react'

type AiChatModalProps = TextInputPropsType & {
	prompt?: string
	id?: string
}

const AiChatModal: React.FC<AiChatModalProps> = (props) => {
	const { id = 'openai-chat', label, name, handleChange, prompt = '' } = props

	const [open, setOpen] = useState(false)
	const [loading, setLoading] = useState(false)

	const { messages, setMessages, handleSubmit, input, handleInputChange } =
		useChat({
			id,
			onFinish: (resp) => setLoading(false),
		})

	const handleClick = (text: string) => {
		setOpen(false)
		handleChange({
			target: {
				name,
				value: text,
			},
		})
	}

	const handleChatSubmit = (ev) => {
		setLoading(true)
		handleSubmit(ev)
	}

	return (
		<>
			<Tooltip title="Use AI to generate text">
				<IconButton
					size="small"
					sx={sx.iconButton}
					onClick={() => setOpen(!open)}
				>
					<Icon name="Sparkles" color="text.primary" />
				</IconButton>
			</Tooltip>
			<Drawer
				title={label}
				open={open}
				handleClose={() => setOpen(false)}
				buttons={
					<Button
						fullWidth
						variant="contained"
						color="primary"
						onClick={handleChatSubmit}
						startIcon={
							loading ? (
								loading && <IconLoading />
							) : (
								<Icon name="Sparkles" color="primary.contrastText" />
							)
						}
					>
						{!loading && `Generate`}
					</Button>
				}
			>
				<AiChatForm
					open={open}
					prompt={prompt}
					handleClick={handleClick}
					messages={messages}
					setMessages={setMessages}
					input={input}
					handleInputChange={handleInputChange}
				/>
			</Drawer>
		</>
	)
}

export default AiChatModal

const sx = {
	iconButton: {
		width: 40,
		height: 40,
		border: '1px solid',
		borderColor: 'divider',
		borderRadius: 1,
	},
}
