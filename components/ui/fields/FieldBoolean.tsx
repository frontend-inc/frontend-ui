import React from 'react'
import { Label, FieldWrapper } from '../../../components'

type FieldBooleanProps = {
	value?: boolean
	label?: string
	rest?: any
}

const FieldBoolean: React.FC<FieldBooleanProps> = (props) => {
	const { value, label, ...rest } = props
	return (
		<FieldWrapper label={label} {...rest}>
			<Label label={value ? 'true' : 'false'} />
		</FieldWrapper>
	)
}

export default FieldBoolean

const sx = {
	button: {
		textTransform: 'none',
		fontFamily: (theme) => theme.typography.body2.fontFamily,
		letterSpacing: 0,
	},
	buttonTrue: {
		color: 'success.dark',
		bgcolor: 'success.light',
		'&:hover': {
			bgcolor: 'success.light',
		},
	},
	buttonFalse: {
		color: 'error.dark',
		bgcolor: 'error.light',
		'&:hover': {
			bgcolor: 'error.light',
		},
	},
}
