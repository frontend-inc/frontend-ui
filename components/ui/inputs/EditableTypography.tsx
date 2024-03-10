import React from 'react'
import { Typography } from '@mui/material'
import { SyntheticEvent } from '../../../types'

type EditableTypographyProps = {
	variant: any
	name: string
	handleChange: (e: SyntheticEventType) => void
	children: string
	text: string
}

const EditableTypography: React.FC<EditableTypographyProps> = (props) => {
	const { variant, name, handleChange, text } = props

	const handleInputChange = (e) => {
		let value = e.currentTarget?.textContent
		handleChange({
			target: {
				value: value,
				name: name,
			},
		})
	}

	return (
		<Typography
			suppressContentEditableWarning
			contentEditable="true"
			onInput={handleInputChange}
			variant={variant}
			{...props}
		>
			{text}
		</Typography>
	)
}

export default EditableTypography
