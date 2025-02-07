'use client'

import React, { useEffect, useState } from 'react'
import { Input } from '@nextui-org/react'
import { useError } from '../../../hooks'
import { TextInputProps } from '../../../types'
import { useDebouncedCallback } from 'use-debounce'
import { cn } from '@nextui-org/react'

export default function TextInput(props: TextInputProps) {
  const {
    label,
    type,
    name,
    value,
    handleChange,
    placeholder = '',
    disabled,
    errors,
    className,
    debounceDelay = 350,
    disableDebounce = false,
  } = props

  const [text, setText] = useState(value)
  const { error, clearError } = useError({ errors, name })

  // Create a debounced callback for handleChange
  const debouncedChange = useDebouncedCallback((newText: string) => {
    handleChange({
      target: {
        name,
        value: newText,
      },
    })
  }, debounceDelay)

  const handleInputChange = (newValue: string) => {
    clearError()
    setText(newValue)
    if (disableDebounce) {
      // Immediate update if debouncing is disabled
      handleChange({
        target: {
          name,
          value: newValue,
        },
      })
    } else {
      debouncedChange(newValue)
    }
  }

  // When the value prop changes (for example, when a new element is clicked),
  // update the local text state and cancel any pending debounced calls.
  useEffect(() => {
    setText(value)
    debouncedChange.cancel()
  }, [name, value, debouncedChange])

  return (
    <Input
      label={label}
      type={type}
      name={name}
      disabled={disabled}
      placeholder={placeholder}
      labelPosition="top"
      onValueChange={handleInputChange}
      value={text || ''}
      autoComplete="off"
      errorMessage={error}
      classNames={{
        input: className,
      }}
    />
  )
}
