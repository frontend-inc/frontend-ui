'use client'

import React, { useEffect, useState } from 'react'
import { useError } from '../../../hooks'
import { TextInputProps } from '../../../types'
import { useDebouncedCallback } from 'use-debounce'
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
    value,
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
  const { error, clearError } = useError({ errors, name })

  // Create a debounced version of the handleChange call
  const debouncedChange = useDebouncedCallback(
    (newText: string) => {
      handleChange({
        target: {
          name,
          value: newText,
        },
      })
    },
    debounceDelay
  )

  const handleTextAreaChange = (newText: string) => {
    clearError()
    setText(newText)
    if (disableDebounce) {
      // Immediate update if debouncing is disabled
      handleChange({
        target: {
          name,
          value: newText,
        },
      })
    } else {
      debouncedChange(newText)
    }
  }

  // When the value prop changes (i.e. a new element is clicked), update the local text.
  // Also, cancel any pending debounced calls to avoid updating the wrong element.
  useEffect(() => {
    setText(value)
    debouncedChange.cancel()
  }, [value, debouncedChange])

  return (
    <Textarea
      label={label}
      className={cn(className)}
      name={name}
      disabled={disabled}
      placeholder={placeholder}
      onValueChange={handleTextAreaChange}
      value={text}
      rows={rows}
      errorMessage={error}
    />
  )
}
