import React from 'react'
import { Stack, Chip } from '@mui/material'
import { FieldWrapper } from '../../../components'

type FieldArrayProps = {
	value?: any[]
	label?: string
	rest?: any
}

const FieldArray: React.FC<FieldArrayProps> = (props) => {
	const { value: values, label, ...rest } = props
	return (
		<FieldWrapper label={label} {...rest}>
      <Stack sx={ sx.stack } direction={'row'} spacing={1}>
			{ Array.isArray(values) && 
        values?.map((value, index) => (
				<Chip key={index} label={value} sx={sx.chip} size="small" />
			))}
      </Stack>
		</FieldWrapper>
	)
}

export default FieldArray

const sx = {
	chip: {
		fontFamily: (theme) => theme.typography.button.fontFamily,
		letterSpacing: 0,
    borderRadius: theme => `${theme.shape.borderRadius}px`,
	},
  stack: {
    display: 'flex',
    flexWrap: 'wrap',
  }
}
