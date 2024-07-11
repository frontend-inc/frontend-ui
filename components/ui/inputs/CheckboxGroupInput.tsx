import React from 'react'
import {
	Checkbox,
	FormControl,
	FormControlLabel,
	FormGroup,
	Typography,
} from '@mui/material'
import { InputLabel } from '../../../components'
import { OptionType } from '../../../types'

type CheckboxGroupInputProps = {
	errors: any
	name: string
	label: string
	value?: string[]
	options: OptionType[]
	info?: string
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
		info,
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
				<InputLabel label={label} info={info} />
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
