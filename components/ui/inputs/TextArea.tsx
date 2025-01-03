'use client'

import React, { useEffect, useState } from 'react'
import { useError } from '../../../hooks'
import { TextInputProps } from '../../../types'
import { useDebounce } from 'use-debounce'
import { cn } from '@nextui-org/react'
import { Textarea } from '@nextui-org/react'

type TextAreaProps = Omit<TextInputProps, 'type'> & {
	debounceDelay?: number
	disableDebounce?: boolean
	rows?: number
	className?: string
}

export default function TextArea(props: TextAreaProps) {
	const {
		label,
		name,
		value = '',
		handleChange,
		placeholder,
		disabled,
		errors,
		debounceDelay = 350,
		disableDebounce = false,
		rows = 3,
		className,
	} = props

	const [text, setText] = useState(value)
	const [debouncedText] = useDebounce(text, debounceDelay)

	const { error, clearError } = useError({
		errors,
		name,
	})

	const handleTextAreaChange = (text: string) => {
		clearError()
		setText(text)
		if (disableDebounce) {
			handleChange({
				target: {
					name,
					value: text,
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
			} as React.ChangeEvent<HTMLTextAreaElement>)
		}
	}, [debouncedText])

	useEffect(() => {
		setText(value)
	}, [value])

	return (
		<Textarea
			label={label}
			className={cn(className)}
			name={name}
			disabled={disabled}
			placeholder={placeholder || `Enter ${label}`}
			onValueChange={handleTextAreaChange}
			value={text}
			rows={rows}
			errorMessage={error}
		/>
	)
}
