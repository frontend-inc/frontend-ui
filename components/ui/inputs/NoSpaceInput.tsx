import React from 'react'
import { TextInput } from '../../../components'
import { InputPropsType } from '../../../types'

type NoSpaceInputPropsType = InputPropsType & {
	joinChar?: string
  disableLowerCase?: boolean
}

const NoSpaceInput: React.FC<NoSpaceInputPropsType> = (props) => {
	const {
		errors,
		joinChar = '_',
		direction = 'column',
		value,
		name,
		label,
		placeholder,
		handleChange,
		disabled,
    disableLowerCase
	} = props

	const handleInputChange = (ev) => {
		let { value } = ev.target
		value = value.replace(' ', joinChar)
    if(!disableLowerCase){
      value = value.toLowerCase()
    }
		handleChange({
			target: {
				name,
				value,
			},
		})
	}

	return (
		<TextInput
			direction={direction}
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
