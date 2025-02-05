'use client'

import React, { useEffect, useState } from 'react'
import { Input } from 'frontend-shadcn'
import { ErrorText } from '../../../components'
import { useError } from '../../../hooks'
import { TextInputProps } from '../../../types'
import { useDebounce } from 'use-debounce'
import { cn } from '@nextui-org/react'

export default function InputBase(props: TextInputProps) {
	const {
		type,
		name,
		value = '',
		handleChange,
		placeholder,
		disabled,
		errors,
		className,
		debounceDelay = 350,
		disableDebounce = false,
	} = props || {}

	const [text, setText] = useState(value)
	const [debouncedText] = useDebounce(text, debounceDelay)

	const { error, clearError } = useError({
		errors,
		name,
	})

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
			} as React.ChangeEvent<HTMLInputElement>)
		}
	}, [debouncedText])

	useEffect(() => {
		setText(value)
	}, [value])

	return (
		<div className="relative w-full">
			<Input
				className={cn(
					className,
					'w-full bg-input text-foreground',
					error && 'border border-destructive'
				)}
				type={type}
				name={name}
				disabled={disabled}
				placeholder={placeholder}
				onChange={handleInputChange}
				value={text}
				autoComplete="off"
			/>
			<ErrorText error={error} />
		</div>
	)
}
