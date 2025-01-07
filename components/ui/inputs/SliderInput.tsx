'use client'

import React from 'react'
import { Slider } from '@nextui-org/react'
import { cn } from '@nextui-org/react'

type SliderValue = number | number[]

type SliderInputProps = {
	label?: string
	name: string
	value: SliderValue
	handleChange: (value: SliderValue) => void
	min: number
	max: number
	stepSize?: number
	className?: string
}

const SliderInput: React.FC<SliderInputProps> = (props) => {
	const {
		value = [],
		name,
		handleChange,
		min = 0,
		max = 10,
		stepSize = 1,
		className,
	} = props

	return (
		<Slider
			name={name}
			defaultValue={value}
			onChangeEnd={handleChange}
			step={stepSize}
			minValue={min}
			maxValue={max}
			value={value}
			className={cn('w-full', className)}
		/>
	)
}

export default SliderInput
