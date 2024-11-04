'use client'

import React from 'react'
import { TextInput } from '../..'
import { InputPropsType } from '../../../types'

type SlugInputPropsType = InputPropsType & {
	joinChar?: string
}

const SlugInput: React.FC<SlugInputPropsType> = (props) => {
	const {
		errors,		
		direction = 'column',
		value,
		name,
		label,
		info,
		placeholder,
		handleChange,
		disabled,
	} = props

	const handleInputChange = (ev) => {
		let { value } = ev.target
		value = value.replace(' ', '-')
		value = value.toLowerCase()
		handleChange({
			target: {
				name,
				value,
			},
		})
	}

	return (
		<TextInput
			disableDebounce
			direction={direction}
			errors={errors}
			value={value}
			disabled={disabled}
			placeholder={placeholder}
			handleChange={handleInputChange}
			name={name}
			label={label}
			info={info}
		/>
	)
}

export default SlugInput
