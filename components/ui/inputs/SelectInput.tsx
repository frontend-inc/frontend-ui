'use client'

import React, { useState } from 'react'
import { Select, SelectItem } from '@nextui-org/select'
import { SyntheticEventType } from 'frontend-js'

type SelectInputPropsType = {
	errors?: any
	label?: string
	name: string
	value: string
	placeholder?: string
	options?: {
		value: string | number | boolean
		label: string
	}[]
	handleChange: (e: SyntheticEventType) => void
	info?: string
}

export default function SelectInput(props: SelectInputPropsType) {
	const { label, placeholder, name, value, options, handleChange } = props

	const handleSelect = (keys) => {
		const value = keys.currentKey
		handleChange({
			target: {
				name,
				value,
			},
		})
	}

	return (
		<Select
			label={label}
			placeholder={placeholder || 'Select an option'}
			items={options}
			selectionMode="single"
      defaultSelectedKeys={[value]}
			onSelectionChange={handleSelect}
		>
			{(option) => (
				<SelectItem
					// @ts-ignore
					key={option?.value}
				>
					{option.label}
				</SelectItem>
			)}
		</Select>
	)
}
