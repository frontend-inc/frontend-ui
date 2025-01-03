'use client'

import React from 'react'
import { TextInputProps } from '../../../types'
import { Avatar, Autocomplete, AutocompleteItem } from '@nextui-org/react'

type AutocompleteInput = TextInputProps & {
	handleInputChange: (keywords: string) => void
}

export default function AutocompleteInput(props: AutocompleteInput) {
	const {
		name = 'title',
		value = '',
		label,
		placeholder = 'Search',
		handleChange,
		handleInputChange,
		options = [],
	} = props

	const handleKeywordsChange = (input: string) => {
		if (input) {
			handleInputChange(input)
		}
	}

	const handleSelectionChange = (value: any) => {
		handleChange({
			target: {
				name,
				value,
			},
		})
	}

	return (
		<Autocomplete
			name={name}
			label={label}
			placeholder={placeholder}
			onInputChange={handleKeywordsChange}
			items={options}
			onSelectionChange={handleSelectionChange}
		>
			{(option) => (
				<AutocompleteItem
					key={option.value}
					startContent={
						<Avatar alt="Argentina" src={option?.image} radius="sm" />
					}
				>
					{option.label}
				</AutocompleteItem>
			)}
		</Autocomplete>
	)
}
