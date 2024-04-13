import React from 'react'
import MultipleChoiceInput from './MultipleChoiceInput'
import { MultipleChoiceInputProps } from './MultipleChoiceInput'

const SingleChoiceInput: React.FC<MultipleChoiceInputProps> = (props) => {
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
      layout="grid"
			multiSelect={false}
			direction={direction}
			name={name}
			label={label}
			value={value}
			handleChange={handleChange}
			options={options}
		/>
	)
}

export default SingleChoiceInput
