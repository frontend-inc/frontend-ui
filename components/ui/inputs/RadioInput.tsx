import React from 'react'
import {
	FormControl,
	FormControlLabel,
	Radio,
	RadioGroup,
	Typography,
} from '@mui/material'
import { SelectInputPropsType } from '../../../types'
import { InputLabel } from '../../../components'

const RadioInput: React.FC<SelectInputPropsType> = (props) => {
	const { label, info, name, value, options, handleChange } = props

	return (
		<FormControl fullWidth component="fieldset">
      <InputLabel label={label} info={info} />			
			<RadioGroup name={name} value={String(value)} onChange={handleChange}>
				{options?.map((option, idx) => (
					<FormControlLabel
						key={idx}
						value={String(option.value)}
						control={<Radio />}
						label={<Typography variant="body2">{option.label}</Typography>}
					/>
				))}
			</RadioGroup>
		</FormControl>
	)
}

export default RadioInput
