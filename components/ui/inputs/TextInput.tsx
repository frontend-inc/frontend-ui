import React, { useState, useEffect } from 'react'
import { Box, Stack, FormControl, InputBase, Typography } from '@mui/material'
import { ErrorText } from '../../../components'
import { sx } from './styles'
import { useError } from '../../../hooks'
import { TextInputPropsType } from '../../../types'
import { useDebounce } from 'use-debounce'

const TextInput: React.FC<TextInputPropsType> = (props) => {
	const {
		label,
		type,
		name,
		margin,
		value = '',
		multiline,
		handleChange,
		rows,
		placeholder,
		disabled,
		errors,
		direction = 'column',
		styles = {},
	} = props

	const [text, setText] = useState(value)
	const [debouncedValue] = useDebounce(text, 500)

	const { error, clearError } = useError({
		errors,
		name,
	})

	const handleInputChange = (e) => {
		if (error) clearError()
		setText(e.target.value)
	}

	const [debouncedChanged] = useDebounce(handleInputChange, 3000)

	useEffect(() => {
		if (debouncedValue !== value) {
			handleChange({
				target: {
					name,
					value: debouncedValue,
				},
			})
		}
	}, [debouncedValue])

	useEffect(() => {
		if (value !== text) {
			setText(value)
		}
	}, [value])

	return (
		<>
			<Stack
				sx={{
					...sx.stack,
					...(direction == 'row' && !multiline && sx.stackVertical),
				}}
				direction={direction}
				spacing={0.5}
			>
				{label && (
					<Typography sx={sx.label} variant="caption" color="text.secondary">
						{label}
					</Typography>
				)}
				<Box sx={sx.inputContainer}>
					<InputBase
						rows={rows}
						error={error ? true : false}
						sx={{
							...sx.inputBase,
							...((error && sx.inputError) || {}),
							...styles,
						}}
						multiline={multiline}
						autoComplete="off"
						fullWidth
						type={type}
						name={name}
						margin={margin}
						disabled={disabled}
						placeholder={placeholder}
						onChange={debouncedChanged}
						value={text}
					/>
					<ErrorText error={error} />
				</Box>
			</Stack>
		</>
	)
}

export default TextInput
