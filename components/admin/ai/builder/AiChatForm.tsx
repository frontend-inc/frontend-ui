'use client'

import React, { useEffect } from 'react'
import { TextArea } from '../../..'
import { ScrollArea } from 'frontend-shadcn'

type OpenaiMessageType = {
  id: string
  role: string
  content: string
}

type AiChatFormProps = {
	id?: string
	open: boolean
	prompt: string
	handleClick: (text: string) => void
	messages: OpenaiMessageType[]
	setMessages: React.Dispatch<React.SetStateAction<any[]>>
	input: string
	handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const AiChatForm: React.FC<AiChatFormProps> = (props) => {

  const {
    open,
    handleClick,
    messages,
    setMessages,
    input,
    handleInputChange,
  } = props

	useEffect(() => {
		if (open) {
			setMessages([])
		}
	}, [open, setMessages])

	return (
		<div className="flex p-2 flex-col space-y-4">
			<TextArea
				label="Generate a page about ..."
				name="prompt"
				placeholder="Enter page description..."
				value={input}
				handleChange={handleInputChange}
			/>
			<ScrollArea className="max-h-[calc(100vh-120px)] w-full">
				<ul className="flex flex-col text-foreground space-y-2">
					{messages
						.filter((message) => message.role === 'assistant')
						.map((message, i) => (
							<li
								key={i}
								className="cursor-pointer border border-border hover:border-primary rounded-lg p-2 text-sm w-full justify-start mb-2 text-left whitespace-pre-line"
								onClick={() => handleClick(message.content)}
							>
								{message.content}
							</li>
						))}
				</ul>
			</ScrollArea>
		</div>
	)
}

export default AiChatForm
