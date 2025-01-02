'use client'

import React from 'react'
import {
	Autocomplete,
  AutocompleteItem  
} from '@nextui-org/react'
import { OptionType, SyntheticEventType } from 'frontend-js'

type AutosuggestProps = {
	errors?: any
	label?: string
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
		name,
		value,
		placeholder = 'Search...',
		handleChange,
		handleInputChange,
		options = [],
	} = props

  const handleSelection = (value: any) => {        
    handleChange({
      target: {
        name,
        value,
      }
    })
  }

  return (
    <Autocomplete 
      aria-label={ label }
      label={ label }
      //@ts-ignore
      selectedKeys={[value]}
      onSelectionChange={handleSelection}
      defaultItems={options}
      onInputChange={handleInputChange}
      placeholder={placeholder}
    >
      {(option) => (
        <AutocompleteItem key={option.value}>
          {option.label}
        </AutocompleteItem>
      )}
    </Autocomplete>
	)
}

export default Autosuggest
