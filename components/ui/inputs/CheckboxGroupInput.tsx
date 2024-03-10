import React from 'react'
import {
	Checkbox,
	FormControl,
	FormControlLabel,
	FormGroup,
	Typography,
} from '@mui/material'
import { OptionType } from '../../../types'

type CheckboxGroupInputProps = {
	errors: any
	name: string
	label: string
	value?: string[]
	options: OptionType[]
	handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const CheckboxGroupInput: React.FC<CheckboxGroupInputProps> = (props) => {
	const {
		errors,
		label,
		name,
		value: values = [],
		options,
		handleChange,
	} = props || {}

	const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault()
		let value = e.target.value
		let newValues = values.includes(value)
			? values.filter((v) => v != value)
			: [...values, value]

		handleChange({
			target: {
				name: name,
				//@ts-ignore
				value: newValues,
			},
		})
	}

	return (
		<FormControl>
			<FormGroup>
				<Typography variant="caption" color="textSecondary">
					{label}
				</Typography>
				{options?.map((option, idx) => (
					<FormControlLabel
						key={idx}
						control={
							<Checkbox
								name={name}
								checked={values.includes(String(option.value)) ? true : false}
								onChange={handleCheckboxChange}
								value={option.value}
							/>
						}
						label={
							<Typography variant="body2" color="textSecondary">
								{option.label}
							</Typography>
						}
					/>
				))}
			</FormGroup>
		</FormControl>
	)
}

export default CheckboxGroupInput
