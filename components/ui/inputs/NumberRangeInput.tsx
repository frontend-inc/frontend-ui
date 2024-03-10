import React from 'react'
import {
	Input,
	FormControl,
	Typography,
	Box,
	InputAdornment,
} from '@mui/material'
import { SyntheticEvent } from '../../../types'

type NumberRangeInputProps = {
	label?: string
	name: string
	value?: number[]
	handleChange: (value: SyntheticEventType) => void
	currency?: string
}

const NumberRangeInput: React.FC<NumberRangeInputProps> = (props) => {
	const {
		value = [0, 100],
		name,
		label = 'TEST',
		handleChange,
		currency = '',
	} = props || {}

	const handleMinChange = (ev) => {
		const { value: min } = ev.target
		handleChange({
			target: {
				name: name,
				value: [min, value[1]],
			},
		})
	}

	const handleMaxChange = (ev) => {
		const { value: max } = ev.target
		handleChange({
			target: {
				name: name,
				value: [value[0], max],
			},
		})
	}

	return (
		<Box sx={sx.root}>
			{label && (
				<Typography variant="caption" color="textSecondary">
					{label}
				</Typography>
			)}
			<Box sx={sx.inputs}>
				<FormControl variant="standard">
					<Input
						type="number"
						onChange={handleMinChange}
						value={value[0]}
						startAdornment={
							<InputAdornment position="start">
								<Typography color="textPrimary" variant="body2">
									{currency}
								</Typography>
							</InputAdornment>
						}
					/>
				</FormControl>
				<Box sx={sx.to}>
					<Typography variant="body2">to</Typography>
				</Box>
				<FormControl variant="standard">
					<Input
						type="number"
						value={value[1]}
						onChange={handleMaxChange}
						startAdornment={
							<InputAdornment sx={sx.inputAdornment} position="start">
								<Typography color="textPrimary" variant="body2">
									{currency}
								</Typography>
							</InputAdornment>
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
