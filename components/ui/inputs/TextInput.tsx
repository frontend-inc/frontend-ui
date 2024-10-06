import React, { useState, useEffect } from 'react'
import { InputBase } from '@mui/material'
import { Box, Stack, TextField } from '../../../tailwind'
import { InputLabel, ErrorText } from '../../../components'
import { sx } from './helpers/styles'
import { useError } from '../../../hooks'
import { TextInputPropsType } from '../../../types'
import { useDebounce } from 'use-debounce'

type TextInputProps = TextInputPropsType & {
	debounceDelay?: number
	disableDebounce?: boolean
	fontSize?: number
  fullWidth?: boolean
  className?: string
}

const TextInput: React.FC<TextInputProps> = (props) => {
	const {
		label,
		type='text',
		name,
		value = '',
		multiline,
		handleChange,
		rows,
		placeholder,
		errors,
    fullWidth = false,
    className,
		debounceDelay = 350,
		disableDebounce = false,
	} = props

	const [text, setText] = useState(value)
	const [debouncedText] = useDebounce(text, debounceDelay)

	const { error, clearError } = useError({
		errors,
		name,
	})

	const handleInputChange = (e) => {
		clearError()
		setText(e.target.value)
		if (disableDebounce) {
			handleChange(e)
		}
	}

	useEffect(() => {
		if (debouncedText !== value) {
			handleChange({
				target: {
					name,
					value: debouncedText,
				},
			})
		}
	}, [debouncedText])

	useEffect(() => {
		setText(value)
	}, [value])

	return (
		<Box>
      <TextField 
        type={type}
        label={label}
        helperText={error}
        error={error ? true : false}
        fullWidth={fullWidth}
        id={name}
        name={name}
        value={text}
        onChange={handleInputChange}
        placeholder={placeholder}
        className={ className }
      />
			<ErrorText error={error} />
			</Box>
	)
}

export default TextInput
