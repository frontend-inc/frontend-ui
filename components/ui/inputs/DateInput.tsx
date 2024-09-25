import React, { useState } from 'react'
import { Stack, InputBase } from '@mui/material'
import moment from 'moment'
import { sx } from './helpers/styles'
import { InputLabel } from '../../../components'

type DateInputProps = {
	errors?: any
	required?: boolean
	label?: string
	name: string
	value?: string
	placeholder?: string
	info?: string
	handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const DateInput: React.FC<DateInputProps> = (props) => {
	const {
		errors,
    direction,
		required,
		label,
		info,
		name,
		value,
		handleChange,
		placeholder,
	} = props

	const [error, setError] = useState(false)

	const handleInputChange = (ev) => {
		let { value } = ev.target
		required && value === '' ? setError(true) : setError(false)
		handleChange(ev)
	}

	let selectedDate = moment(value).format('yyyy-MM-DD')

	return (
		<Stack direction={direction} spacing={0.5}>
			<InputLabel label={label} info={info} />
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
		</Stack>
	)
}

export default DateInput
