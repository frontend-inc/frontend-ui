import React from 'react'
import {
	Input,
	FormControl,
	Typography,
	Box,
	InputAdornment,
} from '@mui/material'
import { InputLabel } from '../../../components'
import { SyntheticEventType } from '../../../types'

export type NumberRangeInputProps = {
	label?: string
	name?: string
	value?: {
		min: number
		max: number
	}
	handleChange: (value: SyntheticEventType) => void
	currency?: string
	info?: string
	startAdornment?: React.ReactNode
}

const NumberRangeInput: React.FC<NumberRangeInputProps> = (props) => {
	const {
		value = {
			min: 0,
			max: 0,
		},
		name,
		label,
		handleChange,
		currency = 'usd',
		info,
		startAdornment,
	} = props || {}

	const handleMinChange = (ev) => {
		const { value: min } = ev.target
		handleChange({
			target: {
				name: name,
				value: {
					...value,
					min,
				},
			},
		})
	}

	const handleMaxChange = (ev) => {
		const { value: max } = ev.target
		handleChange({
			target: {
				name: name,
				value: {
					...value,
					max,
				},
			},
		})
	}

	return (
		<Box sx={sx.root}>
			<InputLabel label={label} info={info} />
			<Box sx={sx.inputs}>
				<FormControl variant="standard">
					<Input
						type="number"
						onChange={handleMinChange}
						value={value?.min}
						startAdornment={
							startAdornment && (
								<InputAdornment position="start">
									<Typography color="textPrimary" variant="body2">
										{currency}
									</Typography>
								</InputAdornment>
							)
						}
					/>
				</FormControl>
				<Box sx={sx.to}>
					<Typography variant="body2">to</Typography>
				</Box>
				<FormControl variant="standard">
					<Input
						type="number"
						value={value?.max}
						onChange={handleMaxChange}
						startAdornment={
							startAdornment && (
								<InputAdornment sx={sx.inputAdornment} position="start">
									{startAdornment}
								</InputAdornment>
							)
						}
					/>
				</FormControl>
			</Box>
		</Box>
	)
}

export default NumberRangeInput

const sx = {
	root: {
		width: '100%',
	},
	inputs: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		width: '100%',
	},
	inputAdornment: {
		color: 'text.primary',
	},
	to: {
		mx: 2,
	},
}
