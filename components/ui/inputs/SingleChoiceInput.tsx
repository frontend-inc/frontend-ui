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
    buttonText='Submit',
		handleChange,
	} = props


	return (
		<MultipleChoiceInput 
      multiSelect={false}
      direction={direction}
      name={name}
      label={label}
      value={value}
      handleChange={ handleChange }
      options={options}   
      buttonText={ buttonText }   
    />
	)
}

export default SingleChoiceInput
