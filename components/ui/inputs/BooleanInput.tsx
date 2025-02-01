'use client'

import React from 'react'
import { TabsInput } from '../..'
import { SyntheticEventType } from '../../../types'

type BooleanInputProps = {
	value: boolean
	name: string
	handleChange: (ev: SyntheticEventType) => void
	label?: string
}

const BooleanInput: React.FC<BooleanInputProps> = (props) => {
	const { name, value, handleChange, label } = props

	const handleTabChange = (ev) => {
    console.log('ev', ev)
		const newValue = ev.target.value == 'true' ? true : false
		handleChange({
			target: {
				name,
				value: newValue,
			},
		})
	}

	return (
		<TabsInput
			name={name}
			label={label}
			options={[
				{ label: 'No', value: 'false' },
				{ label: 'Yes', value: 'true' },
			]}
			value={value == true ? 'true' : 'false'}
			handleChange={handleTabChange}
		/>
	)
}

export default BooleanInput
