import React from 'react'
import { TextInput, IconLoading } from '../../../components'
import { Button, Stack } from '@mui/material'
import { TextInputPropsType } from '../../../types'

type TextButtonInputProps = TextInputPropsType & {
	loading?: boolean
	onClick: () => void
	color?: 'primary' | 'secondary'
	children: React.ReactNode
}

const TextButtonInput: React.FC<TextButtonInputProps> = (props) => {
	const {
		name,
		value,
		handleChange,
		placeholder,
		color,
		onClick,
		loading,
		children,
	} = props

	return (
		<Stack
			direction="row"
			spacing={0}
			alignItems="flex-end"
			sx={sx.inputContainer}
		>
			<TextInput
				name={name}
				value={value}
				handleChange={handleChange}
				placeholder={placeholder}
				styles={sx.input}
			/>
			<Button
				variant="contained"
				color={color}
				sx={sx.button}
				onClick={onClick}
				startIcon={loading ? <IconLoading loading /> : null}
			>
				{children}
			</Button>
		</Stack>
	)
}

export default TextButtonInput

const sx = {
	inputContainer: {
		width: '100%',
	},
	button: {
		height: 43,
		px: 3,
		borderRadius: (theme) =>
			`0 ${theme.shape.borderRadius}px ${theme.shape.borderRadius}px 0`,
	},
	input: {
		'& .MuiInputBase-input': {
			borderRadius: (theme) =>
				`${theme.shape.borderRadius}px 0 0 ${theme.shape.borderRadius}px`,
		},
	},
}
