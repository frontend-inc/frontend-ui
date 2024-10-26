'use client'

import React, { useState } from 'react'
import { Icon, Sheet } from '../../../../components'
import { TextInputPropsType } from '../../../../types'
import AiChatForm from './AiChatForm'
import { useChat } from 'ai/react'
import { Button } from '../../../core'
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from 'frontend-shadcn'

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
			<TooltipProvider>
				<Tooltip>
					<TooltipTrigger asChild>
						<Button 
              className="bg-blue-500 text-white hover:bg-blue-700"
              startIcon={
                <Icon name="Zap" />
              }
              onClick={() => setOpen(!open)}
            >
              Generate 
						</Button>
					</TooltipTrigger>
					<TooltipContent>
						Use AI to generate text
					</TooltipContent>
				</Tooltip>
			</TooltipProvider>
			<Sheet
				title={label}
				open={open}
				handleClose={() => setOpen(false)}
				buttons={
					<Button
						fullWidth
            className="bg-blue-500 text-white hover:bg-blue-700"
						onClick={handleChatSubmit}
						loading={loading}
						startIcon={<Icon name="Zap" className="text-white" />}
					>
						Generate
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
			</Sheet>
		</>
	)
}

export default AiChatModal
