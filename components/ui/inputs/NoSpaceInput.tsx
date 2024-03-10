import React from 'react'
import { TextInput } from '../../../components'
import { InputPropsType } from '../../../types'

const NoSpaceInput: React.FC<InputPropsType> = (props) => {
	const { errors, value, name, label, placeholder, handleChange, disabled } =
		props

	const handleInputChange = (ev) => {
		let { value } = ev.target
		value = value.replace(' ', '_').toLowerCase()
		handleChange({
			target: {
				name,
				value,
			},
		})
	}

	return (
		<TextInput
			errors={errors}
			value={value}
			disabled={disabled}
			placeholder={placeholder}
			handleChange={handleInputChange}
			name={name}
			label={label}
		/>
	)
}

export default NoSpaceInput

const sx = {
	root: {},
}
