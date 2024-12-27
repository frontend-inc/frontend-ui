'use client'

import React, { useState } from 'react'
import { useError } from '../../../hooks'
import { RemixIcon, InputLabel, ErrorText } from '../../../components'
import { SyntheticEventType } from '../../../types'
import { cn } from 'frontend-shadcn'
import { Input } from 'frontend-shadcn'
import { ButtonGroup, Button } from '@nextui-org/react'

type ArrayInputProps = {
	errors?: any
	value?: string[]
	label?: string
	name: string
	placeholder?: string
	handleChange: (e: SyntheticEventType) => void
	direction?: 'row' | 'column'
	info?: string
}

export default function ArrayInput(props: ArrayInputProps) {

  const {
    errors,
    label,
    name,
    placeholder,
    handleChange,
    direction = 'column',
    info,
    value = [],
  } = props || {}

	const { error, clearError } = useError({ errors, name })
	const [inputValue, setInputValue] = useState('')

	const handleInputChange = (newValues: string[]) => {
		if (error) clearError()
		handleChange({
			target: {
				name,
				value: newValues,
			},
		} as SyntheticEventType)
	}

	const addTag = (tag: string) => {
		const trimmedTag = tag.trim()
		if (trimmedTag && !value.includes(trimmedTag)) {
			handleInputChange([...value, trimmedTag])
		}
		setInputValue('')
	}

	const removeTag = (tagToRemove: string) => {
		handleInputChange(value.filter((tag) => tag !== tagToRemove))
	}

	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter' || e.key === ',') {
			e.preventDefault()
			addTag(inputValue)
		} else if (e.key === 'Backspace' && inputValue === '' && value.length > 0) {
			e.preventDefault()
			const newValues = [...value]
			newValues.pop()
			handleInputChange(newValues)
		}
	}

	return (
		<div
			className={cn(
				'flex w-full space-y-2',
				direction === 'row' ? 'flex-row items-center' : 'flex-col'
			)}
		>
			<InputLabel label={label} info={info} />
			<div className="relative w-full">
				<div
					className={cn(
						'bg-input flex flex-wrap gap-2 p-1 border-2 rounded-lg min-h-[42px]',
						error && 'border-destructive'
					)}
				>
					{Array.isArray(value) &&
						value?.map((tag) => (
            <ButtonGroup variant="solid" key={tag}>                
              <Button className='min-w-[70px] pl-4 pr-0' size="sm">
                { tag }
              </Button>							
              <Button 
                size="sm"
                isIconOnly
                onPress={() => removeTag(tag) }                
              >
                <RemixIcon name="ri-close-line" />
              </Button>							
            </ButtonGroup>
						))}
					<Input
						type="text"
						placeholder={placeholder}
						value={inputValue}
						onChange={(e) => setInputValue(e.target.value)}
						onKeyDown={handleKeyDown}
						onBlur={() => addTag(inputValue)}
						className="text-foreground flex-1 px-0 py-0 text-sm border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
					/>
				</div>
				<ErrorText error={error} />
			</div>
		</div>
	)
}
