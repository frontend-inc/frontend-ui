import React from 'react'
import { Box } from '@mui/material'
import { TextInput, InputLabel } from '../../../components'
import { SyntheticEventType } from '../../../types'

type NumberRangeInputProps = {
	label?: string
	name: string
	value?: {
		min: number
		max: number
	}
	info?: string
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
		info,
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
