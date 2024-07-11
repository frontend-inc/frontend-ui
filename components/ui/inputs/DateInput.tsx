import React, { useState } from 'react'
import { FormControl, InputBase, Typography } from '@mui/material'
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
	const { errors, required, label, info, name, value, handleChange, placeholder } =
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
      <InputLabel 
        label={label}
        info={info}
      />
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
