import React from 'react'
import { Input, FormControl, Typography, Box } from '@mui/material'
import { TextInput } from '../../../components'
import { SyntheticEventType } from '../../../types'

type NumberRangeInputProps = {
	label?: string
	name: string
	value?: {
		min: number
		max: number
	}
	handleChange: (value: SyntheticEventType) => void
}

const NumberRangeInput: React.FC<NumberRangeInputProps> = (props) => {
	const {
		value = {
			min: null,
			max: null,
		},
		name,
		label,
		handleChange,
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
			{label && (
				<Typography variant="caption" color="textSecondary">
					{label}
				</Typography>
			)}
			<Box sx={sx.inputs}>
				<TextInput
					type="number"
					name="min"
					handleChange={handleMinChange}
					value={value?.min}
					placeholder="Min"
				/>
				<TextInput
					type="number"
					name="max"
					handleChange={handleMaxChange}
					value={value?.max}
					placeholder="Max"
				/>
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
