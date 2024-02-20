import React from 'react'
import { Button } from '@mui/material'
import { FieldWrapper } from '../../../components'

type FieldBooleanProps = {
	value?: boolean
	label?: string
	rest?: any
}

const FieldBoolean: React.FC<FieldBooleanProps> = (props) => {
	const { value, label, ...rest } = props
	return (
		<FieldWrapper label={label} {...rest}>
			<Button size="small" color="primary" sx={sx.button}>
				{value ? 'true' : 'false'}
			</Button>
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
