import React, { useEffect, useState } from 'react'
import { TabsInput } from '../..'
import { SyntheticEventType } from '../../../types'
import { useDebounce } from 'use-debounce'

type BooleanInputProps = {
	value: boolean
	name: string
	handleChange: (ev: SyntheticEventType) => void
	disableBorder?: boolean
	disablePadding?: boolean
	label?: string
	direction?: 'row' | 'column'
	size?: 'small' | 'large'
	info?: string
  debounceDelay?: number
  disableDebounce?: boolean
}

const BooleanInput: React.FC<BooleanInputProps> = (props) => {
	const {
		name,
		value,
		handleChange,
		label,
		direction = 'row',
		size = 'small',
		disableBorder = false,
		disablePadding = false,
		info,
    debounceDelay,
    disableDebounce,
	} = props

	const handleTabChange = (ev) => {
		const newValue = ev.target.value == 1 ? true : false
    handleChange({
      target: {
        name, 
        value: newValue
      }
    })
	}

	return (
		<TabsInput
			name={name}
			label={label}
			info={info}
			size={size}
			direction={direction}
			disableBorder={disableBorder}
			disablePadding={disablePadding}
			options={[
				{ label: 'No', value: 0 },
				{ label: 'Yes', value: 1 },
			]}
			value={value == true ? 1 : 0}
			handleChange={handleTabChange}
      debounceDelay={debounceDelay}
      disableDebounce={disableDebounce}
		/>
	)
}

export default BooleanInput
