'use client'

import React, { useEffect } from 'react'
import { TextArea } from '../../..'

type AiChatFormProps = {
  label?: string
	input: string
	handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const AiChatForm: React.FC<AiChatFormProps> = (props) => {

  const {
    label="Enter prompt ...",
    input,
    handleChange,
  } = props	

	return (
		<div className="flex p-2 flex-col space-y-4">
			<TextArea
				label={label}
				name="prompt"
				placeholder="Enter website description..."
				value={input}
				handleChange={handleChange}
			/>			
		</div>
	)
}

export default AiChatForm
