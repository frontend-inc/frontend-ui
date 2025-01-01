'use client'

import React from 'react'
import { SyntheticEventType } from '../../../types'
import { Checkbox } from '@nextui-org/react'
import { InputLabel } from '../../../components'
import { cn } from '@nextui-org/react'

type CheckboxInputProps = {
	name: string
	value: boolean
	placeholder: string
	label?: string
	handleChange: (e: SyntheticEventType) => void
	disableBorder?: boolean
	info?: string
}

export default function CheckboxInput({
	name,
	value,
	placeholder,
	label,
	handleChange,
	disableBorder = false,
	info,
}: CheckboxInputProps) {
	const handleCheckboxChange = (checked: boolean) => {
		handleChange({
			target: {
				name,
				value: checked,
			},
		})
	}

	return (
    <Checkbox
      id={name}
      isSelected={value}
      onValueChange={handleCheckboxChange}
    >
      { label }
    </Checkbox>
	)
}
