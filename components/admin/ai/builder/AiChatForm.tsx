'use client'

import React, { useEffect } from 'react'
import { TextArea } from '../../..'

type AiChatFormProps = {
	input: string
	handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const AiChatForm: React.FC<AiChatFormProps> = (props) => {

  const {
    input,
    handleChange,
  } = props	

	return (
		<div className="flex p-2 flex-col space-y-4">
			<TextArea
				label="Generate a page about ..."
				name="prompt"
				placeholder="Enter page description..."
				value={input}
				handleChange={handleChange}
			/>			
		</div>
	)
}

export default AiChatForm
