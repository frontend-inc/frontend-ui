import React, { useEffect } from 'react'
import { TextAreaInput } from '../../../../components'
import { Button } from "../../../../shadcn/ui/button"
import { ScrollArea } from "../../../../shadcn/ui/scroll-area"

type AiChatFormProps = {
  id?: string
  open: boolean
  prompt: string
  handleClick: (text: string) => void
  messages: any[]
  setMessages: React.Dispatch<React.SetStateAction<any[]>>
  input: string
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const AiChatForm: React.FC<AiChatFormProps> = ({
  open,
  prompt,
  handleClick,
  messages,
  setMessages,
  input,
  handleInputChange,
}) => {
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
  }, [open, prompt, setMessages])

  return (
    <div className="flex flex-col space-y-4">
      <TextAreaInput
        label="Write a sentence about ..."
        name="prompt"
        placeholder="Enter text..."
        value={input}
        handleChange={handleInputChange}
      />
      <ScrollArea className="h-[300px] w-full rounded-md border">
        <div className="p-4">
          {messages
            .filter((message) => message.role === 'assistant')
            .map((message, i) => (
              <Button
                key={i}
                variant="outline"
                className="w-full justify-start mb-2 p-4 text-left whitespace-pre-line hover:border-primary"
                onClick={() => handleClick(message.content)}
              >
                {message.content}
              </Button>
            ))}
        </div>
      </ScrollArea>
    </div>
  )
}

export default AiChatForm