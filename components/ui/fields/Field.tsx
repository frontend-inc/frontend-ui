import React from 'react'
import { Box } from '@mui/material'
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
	document?: any
}

const Field: React.FC<FieldProps> = (props) => {
	const { field, document } = props
	const { variant, label } = field
	let value = document[field?.name]
	if (!value) return null
	return (
		<>
			{variant === 'boolean' && <FieldBoolean label={label} value={value} />}
			{variant === 'date' && <FieldDate label={label} value={value} />}
			{variant === 'datetime' && <FieldDate label={label} value={value} />}
			{variant === 'image' && <FieldImage value={value} />}
			{variant === 'video' && <FieldVideo value={value} />}
			{variant === 'json' && <FieldJSON label={label} value={value} />}
			{variant === 'url' && <FieldURL label={label} value={value} />}
			{variant === 'rating' && <FieldRating label={label} value={value} />}
			{variant === 'text' && <FieldText label={label} value={value} />}
      {variant === 'number' && <FieldText label={label} value={value} />}
			{variant === 'array' && <FieldArray label={label} value={value} />}
			{variant === 'string' && <FieldString label={label} value={value} />}
			{variant === 'price' && <FieldPrice label={label} value={value} />}
		</>
	)
}

export default Field
