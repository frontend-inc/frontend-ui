'use client'

import React, { useEffect, useState } from 'react'
import { Input } from '@nextui-org/react'
import { InputLabel, ErrorText } from '../../../components'
import { useError } from '../../../hooks'
import { TextInputProps } from '../../../types'
import { useDebounce } from 'use-debounce'
import { cn } from '@nextui-org/react'

export default function TextInput(props: TextInputProps) {
	const {
		label,
		type,
		name,
		value,
		handleChange,
		placeholder='',
		disabled,
		errors,
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

	const handleInputChange = (value) => {
    console.log('Input changed', value)
		clearError()
		setText(value)
		if (disableDebounce) {
			handleChange({
				target: {
					name,
					value,
				},
			})
		}
	}

	useEffect(() => {
		if (debouncedText !== value) {
			handleChange({
				target: {
					name,
					value: debouncedText,
				},
			} as React.ChangeEvent<HTMLInputElement>)
		}
	}, [debouncedText])
  
	useEffect(() => {
    if(value) setText(value);
	}, [name, value])

	return (
		<Input
			label={label}
			type={type}
			name={name}
			disabled={disabled}
			placeholder={placeholder}
      labelPosition='top'
			onValueChange={handleInputChange}
			value={text ? text : ''}
			autoComplete="off"
			errorMessage={error}   
      classNames={{
        input: className
      }}
		/>
	)
}
