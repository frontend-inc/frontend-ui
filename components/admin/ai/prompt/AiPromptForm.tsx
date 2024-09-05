import React from 'react'
import { Stack } from '@mui/material'
import { TextInput } from 'frontend-ui/components'
import { SyntheticEventType } from '@frontend-mui/types'

type AiPromptFormProps = {
	open: boolean
	value: string
	label?: string
	placeholder?: string
	handleChange: (ev: SyntheticEventType) => void
}

const AiPromptForm: React.FC<AiPromptFormProps> = (props) => {
	const {
		label = 'Prompt',
		placeholder = 'Enter a prompt',
		value,
		handleChange,
	} = props

	return (
		<Stack direction="column" spacing={1}>
			<TextInput
				multiline
				label={label}
				name="prompt"
				placeholder={placeholder}
				value={value}
				handleChange={handleChange}
			/>
		</Stack>
	)
}

export default AiPromptForm
