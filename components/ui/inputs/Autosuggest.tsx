'use client'

import React, { useEffect, useState } from 'react'
import {
	Select,
  SelectItem  
} from '@nextui-org/react'
import { OptionType, SyntheticEventType } from 'frontend-js'

type AutosuggestProps = {
	errors?: any
	label?: string
	info?: string
	name: string
	value: string | number
	placeholder?: string
	handleChange: (ev: SyntheticEventType) => void
	handleInputChange?: (value: string) => void
	options: OptionType[]
	enableClear?: boolean
}

const Autosuggest: React.FC<AutosuggestProps> = (props) => {
	const {
		label,
		info,
		name,
		value,
		placeholder = 'Search...',
		handleChange,
		handleInputChange,
		options = [],
	} = props

	const [selectedOption, setSelectedOption] = useState<OptionType | null>(null)
	const [open, setOpen] = useState(false)

	const handleCommandChange = (ev) => {
		if (handleInputChange) {
			handleInputChange(ev)
		}
	}

	const handleSelect = (currentValue: string) => {
		const selectedOption = options.find(
			(option) => option.label === currentValue
		)
		const value = selectedOption?.value || null
		if (value) {
			handleChange({
				target: {
					name,
					value,
				},
			})
		}
		setOpen(false)
	}

	useEffect(() => {
		if (value && options?.length > 0) {
			const selectedOption = options.find((option) => option.value === value)
			setSelectedOption(selectedOption || null)
		}
	}, [value, options])

  const handleSelection = (keys) => {
    const value = keys.currentKey 
    handleChange({
      target: {
        name,
        value,
      }
    })
  }

  return (
    <Select 
      aria-label={ label }
      label={ label }
      selectionMode="single"
      selectedKeys={[value]}
      onSelectionChange={handleSelection}
      items={options}
    >
      {(option) => (
        <SelectItem key={option.value}>
          {option.label}
        </SelectItem>
      )}
    </Select>
	)
}

export default Autosuggest
