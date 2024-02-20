import React from 'react'
import { Box, Slider } from '@mui/material'

type SliderInputProps = {
	label?: string
	name: string
	value?: number[]
	handleChange: (ev: any) => void
	min: number
	max: number
	stepSize?: number
}

const SliderInput: React.FC<SliderInputProps> = (props) => {
	const {
		value,
		name,
		handleChange,
		min = 0,
		max = 10,
		stepSize = 1,
	} = props || {}

	return (
		<Slider
			sx={sx.root}
			name={name}
			defaultValue={value}
			valueLabelDisplay="auto"
			onChange={handleChange}
			step={stepSize}
			min={min}
			max={max}
			value={value}
		/>
	)
}

export default SliderInput

const sx = {
	root: {
		width: '100%',
	},
}
