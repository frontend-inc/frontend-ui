import React from 'react'
import { Box, Typography, Slider } from '@mui/material'
import { SyntheticEvent } from '../../../types'

type NumberSliderInputProps = {
	label?: string
	name: string
	value?: number[]
	handleChange: (value: SyntheticEventType) => void
	min: number
	max: number
	stepSize?: number
}

const NumberSliderInput: React.FC<NumberSliderInputProps> = (props) => {
	const { value, label, name, handleChange, min, max, stepSize } = props || {}

	const handleInputChange = (ev, newValue: number[]) => {
		handleChange({
			target: {
				name: name,
				value: newValue,
			},
		})
	}

	return (
		<Box sx={sx.slider}>
			{label && (
				<Typography sx={sx.label} variant="caption" color="textSecondary">
					{label}
				</Typography>
			)}
			<Slider
				defaultValue={value}
				valueLabelDisplay="auto"
				onChange={handleInputChange}
				step={stepSize}
				min={min}
				max={max}
				value={value}
			/>
		</Box>
	)
}

export default NumberSliderInput

const sx = {
	slider: {
		px: 0,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
		width: '100%',
	},
	label: {
		mb: 0,
		minWidth: '100px',
	},
}
