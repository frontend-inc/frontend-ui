import React from 'react'
import { SyntheticEventType } from '../../../types'
import { Checkbox, Box, FormControlLabel, Typography } from '@mui/material'
import { InputLabel } from '../../../components'

type CheckboxInputProps = {
	name: string
	value: boolean
	placeholder: string
	label?: string
	handleChange: (e: SyntheticEventType) => void
	disableBorder?: boolean
	info?: string
}

const CheckboxInput: React.FC<CheckboxInputProps> = (props) => {
	const {
		name,
		value,
		placeholder,
		label,
		handleChange,
		disableBorder = false,
		info,
	} = props

	const handleCheckboxChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
		const value = ev.target.checked
		handleChange({
			target: {
				name,
				value,
			},
		})
	}

	return (
		<Box sx={sx.root}>
			<InputLabel label={label} info={info} />
			<Box
				sx={{
					...sx.input,
					...(!disableBorder && sx.border),
				}}
			>
				<FormControlLabel
					control={
						<Checkbox
							name={name}
							checked={value == true ? true : false}
							onChange={handleCheckboxChange}
							value="true"
						/>
					}
					label={
						<Typography variant="body2" color="textSecondary">
							{placeholder}
						</Typography>
					}
				/>
			</Box>
		</Box>
	)
}

export default CheckboxInput

const sx = {
	root: {
		width: '100%',
	},
	input: {
		display: 'flex',
		direction: 'column',
		fontSize: 15,
	},
	border: {
		border: (theme) => `1px solid ${theme.palette.divider}`,
		boxShadow: `rgb(0 0 0 / 5%) 0px 2px 4px !important`,
		pt: 0.5,
		pr: 2,
		pb: 0.5,
		pl: 2,
		borderRadius: 1,
	},
}
