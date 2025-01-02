'use client'

import React, { useEffect, useState } from 'react'
import { InputOtp } from '@nextui-org/react'
import { useError } from '../../../hooks'
import { TextInputProps } from '../../../types'
import { useDebounce } from 'use-debounce'
import { cn } from '@nextui-org/react'

type InputOtpProps = TextInputProps & {
  length?: number
}

export default function TextInput(props: InputOtpProps) {
	const {
		label,
		type,
		name,
		value = '',
		handleChange,
		placeholder,
		disabled,
		errors,
    length=6,		
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
		clearError()
		setText(value)
		if (disableDebounce) {
			handleChange({ 
        target: {
          name, 
          value
        }
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
		setText(value)
	}, [value])

	return (
    <InputOtp
      label={ label }
      className={cn(									
        className
      )}
      length={length}
      type={type}
      name={name}
      disabled={disabled}
      placeholder={placeholder || `Enter ${label}`}
      onValueChange={handleInputChange}
      value={text}
      autoComplete="off"
      errorMessage={error}
    />
	)
}
