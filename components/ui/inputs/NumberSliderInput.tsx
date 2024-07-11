import React from 'react'
import { Box, Slider } from '@mui/material'
import { SyntheticEventType } from '../../../types'
import { InputLabel } from '../../../components'

type NumberSliderInputProps = {
	label?: string
	name: string
	value?: number[]
	handleChange: (value: SyntheticEventType) => void
	min: number
	max: number
	stepSize?: number
  info?: string 
}

const NumberSliderInput: React.FC<NumberSliderInputProps> = (props) => {
	const { value, label, info, name, handleChange, min, max, stepSize } = props || {}

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
      <InputLabel label={label} info={info} />
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
	}
}
