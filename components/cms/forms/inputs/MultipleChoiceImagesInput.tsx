import React from 'react'
import MultipleChoiceInput from './MultipleChoiceInput'
import { MultipleChoiceInputProps } from './MultipleChoiceInput'

const MultipleChoiceImagesInput: React.FC<MultipleChoiceInputProps> = (
	props
) => {
	const {
		label,
		direction = 'column',
		name,
		value,
		options,
		handleChange,
	} = props

	return (
		<MultipleChoiceInput
			multiSelect
			layout="grid"
			direction={direction}
			name={name}
			label={label}
			value={value}
			handleChange={handleChange}
			options={options}
		/>
	)
}

export default MultipleChoiceImagesInput
