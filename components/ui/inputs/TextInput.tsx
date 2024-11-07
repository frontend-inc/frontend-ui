'use client'

import React, { useEffect, useState } from 'react'
import { Input } from 'frontend-shadcn'
import { InputLabel, ErrorText } from '../../../components'
import { useError } from '../../../hooks'
import { TextInputPropsType } from '../../../types'
import { useDebounce } from 'use-debounce'
import { cn } from 'frontend-shadcn'

type TextInputProps = TextInputPropsType & {
	debounceDelay?: number
	disableDebounce?: boolean
}

export default function TextInput({
	label,
	type,
	name,
	value = '',
	handleChange,
	placeholder,
	disabled,
	errors,
	direction = 'column',
	info,
	className,
	debounceDelay = 350,
	disableDebounce = false,
}: TextInputProps) {

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
		<div
			className={cn(
				'flex flex-col w-full space-y-2',
				direction === 'row' && 'sm:flex-row sm:items-center'
			)}
		>
			<InputLabel label={label} info={info} />
			<div className="relative w-full">
				<Input
					className={cn(
            'focus:ring-2 focus:ring-offset-3',            
						error && 'border-2 border-destructive',
						className
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
		</div>
	)
}
