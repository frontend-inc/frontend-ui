import React, { useState } from 'react'
import { TextInput } from '../../../components'
import { XCircle, Edit, CheckCircle } from 'lucide-react'
import { Box, IconButton, CircularProgress } from '@mui/material'

type EditableTextInputProps = {
	value: string
	name: string
	label: string
	handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	handleSubmit: (name: string, value: string) => void
	loading?: boolean
	placeholder?: string
  info?: string 
}

const EditableTextInput: React.FC<EditableTextInputProps> = (props) => {
	const {
		value,
		name,
		label,
		handleChange,
		handleSubmit,
		loading,
		placeholder,
    info
	} = props

	const [editing, setEditing] = useState(false)

	const handleSubmitInput = (name, value) => {
		setEditing(false)
		handleSubmit(name, value)
	}

	return (
		<Box sx={sx.root}>
			<TextInput
				disabled={!editing}
				value={value}
				label={label}
				name={name}
				handleChange={handleChange}
				placeholder={placeholder}
        info={info}
			/>
			<Box sx={sx.icons}>
				{loading ? (
					<CircularProgress disableShrink size={24} sx={sx.icon} />
				) : (
					<>
						{editing ? (
							<IconButton
								size="small"
								onClick={() => setEditing(false)}
								sx={sx.iconButton}
							>
								<XCircle />
							</IconButton>
						) : (
							<IconButton
								size="small"
								onClick={() => setEditing(true)}
								sx={sx.iconButton}
							>
								<Edit />
							</IconButton>
						)}
						{editing && (
							<IconButton
								size="small"
								onClick={() => handleSubmitInput(name, value)}
								sx={sx.iconButton}
							>
								<CheckCircle />
							</IconButton>
						)}
					</>
				)}
			</Box>
		</Box>
	)
}

export default EditableTextInput

const sx = {
	root: {
		display: 'flex',
		flexDirection: 'row',
		height: '100%',
		alignItems: 'center',
	},
	icons: {
		mt: 2,
		display: 'flex',
		flexDirection: 'row',
		height: '100%',
		alignItems: 'center',
	},
	icon: {
		height: 20,
		width: 20,
		color: 'secondary.main',
	},
	iconButton: {},
}
