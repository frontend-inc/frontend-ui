import React from 'react'
import {
	FieldArray,
	FieldBoolean,
	FieldDate,
	FieldImage,
	FieldJSON,
	FieldURL,
	FieldPrice,
	FieldRating,
	FieldString,
	FieldText,
	FieldVideo,
} from '../../../components'

type FieldProps = {
	field?: any
  enableBorder?: boolean
	document?: any
}

const Field: React.FC<FieldProps> = (props) => {
	const { field, document, enableBorder } = props
	const { variant, label } = field
	let value = document[field?.name]
	if (!value) {
		value = '-'
	}

  const components = {
    "boolean": FieldBoolean,
    "date": FieldDate,
    "datetime": FieldDate,
    "image": FieldImage,
    "video": FieldVideo,
    "json": FieldJSON,
    "url": FieldURL,
    "rating": FieldRating,
    "text": FieldText,
    "number": FieldText,
    "array": FieldArray,
    "string": FieldString,
    "select": FieldString,
    "price": FieldPrice
  }

  const Component = components[variant]

	return (
		<Component 
      label={label} 
      value={value} 
      enableBorder={enableBorder}
    />			
	)
}

export default Field
