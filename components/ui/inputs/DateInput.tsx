import React, { useState } from 'react'
import { FormControl, InputBase, Typography } from '@mui/material'
import moment from 'moment'
import { sx } from './styles'

type DateInputProps = {
	errors?: any
	required?: boolean
	label?: string
	name: string
	value?: string
	placeholder?: string
	handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const DateInput: React.FC<DateInputProps> = (props) => {
	const { errors, required, label, name, value, handleChange, placeholder } =
		props

	const [error, setError] = useState(false)

	const handleInputChange = (ev) => {
		let { value } = ev.target
		required && value === '' ? setError(true) : setError(false)
		handleChange(ev)
	}

	let selectedDate = moment(value).format('yyyy-MM-DD')

	return (
		<FormControl fullWidth>
			<Typography variant="caption" color="textSecondary">
				{label}
			</Typography>
			<InputBase
				error={error}
				autoComplete="off"
				fullWidth
				type="date"
				name={name}
				sx={sx.inputBase}
				placeholder={placeholder}
				margin="dense"
				onChange={handleInputChange}
				value={selectedDate}
			/>
		</FormControl>
	)
}

export default DateInput
