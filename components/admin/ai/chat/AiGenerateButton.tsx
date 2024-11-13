'use client'

import React, { useEffect, useState } from 'react'
import { Icon, Sheet } from '../../..'
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

type AiGenerateButtonProps = TextInputPropsType & {
	prompt?: string
	id?: string
}

const AiGenerateButton: React.FC<AiGenerateButtonProps> = (props) => {
	const { id = 'openai-chat', label, name, handleChange } = props

	const [open, setOpen] = useState(false)
	const [loading, setLoading] = useState(false)

  /*
  const [input, setInput] = useState('')  
  const handleInputChange = (ev) => {
    const { name, value } = ev.target
    setInput(value)
  }*/

	const { 
    input,
    handleInputChange,
    handleSubmit,
    messages, 
    setMessages, 
  } = useChat({
		id,
		onFinish: (resp) => setLoading(false),
    onError: (error) => {
      console.error(error)
      setLoading(false)
    }
	})

  useEffect(() => {
    console.log("Messages", messages)    
  }, [input, messages])

	const handleClick = (text: string) => {
		setOpen(false)
		handleChange({
			target: {
				name,
				value: text,
			},
		})
	}

	const handleChatSubmit = async (ev) => {
		setLoading(true)
		handleSubmit(ev)
	}

	return (
		<>
			<TooltipProvider>
				<Tooltip>
					<TooltipTrigger asChild>
						<Button
							className="bg-accent hover:bg-accent/80 text-white"
							startIcon={<Icon name="Zap" className='text-white' />}
							onClick={() => setOpen(!open)}
						>
							Generate
						</Button>
					</TooltipTrigger>
					<TooltipContent>Use AI to generate text</TooltipContent>
				</Tooltip>
			</TooltipProvider>
			<Sheet
				title={label}
				open={open}
				handleClose={() => setOpen(false)}
			>
        <AiChatForm
          open={open}
          handleClick={handleClick}
          messages={messages}
          setMessages={setMessages}
          input={input}
          handleInputChange={handleInputChange}
        />
        <Button
          type="submit"
          fullWidth
          className="bg-blue-500 text-white hover:bg-blue-700"					
          loading={loading}
          onClick={handleChatSubmit}
          startIcon={<Icon name="Zap" className="text-white" />}
        >
          Generate
        </Button>
			</Sheet>
		</>
	)
}

export default AiGenerateButton
