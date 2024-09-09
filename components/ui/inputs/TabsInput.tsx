import React, { useState, useEffect } from 'react'
import { Stack } from '@mui/material'
import { ButtonTabs } from '../../../components'
import { SyntheticEventType } from '../../../types'
import { InputLabel } from '../../../components'
import sx from './helpers/styles'

type TabsInputProps = {
	name: string
	label?: string
	handleChange: (ev: SyntheticEventType) => void
	options: {
		icon?: string
		label?: string
		value: number
	}[]
	value: number
	disablePadding?: boolean
	disableBorder?: boolean
	iconPosition?: 'start' | 'end' | 'top' | 'bottom'
	variant?: 'fullWidth' | 'scrollable'
	size?: 'small' | 'large'
	direction?: 'row' | 'column'
	info?: string
	debounceDelay?: number
	disableDebounce?: boolean
}

const TabsInput: React.FC<TabsInputProps> = (props) => {
	const {
		name,
		label,
		disablePadding = false,
		disableBorder = false,
		handleChange,
		options,
		value,
		iconPosition = 'start',
		variant = 'fullWidth',
		size = 'large',
		direction = 'row',
		info,
		debounceDelay,
		disableDebounce,
	} = props

	const handleInputChange = (value: number) => {
		handleChange({
			target: {
				name,
				value,
			},
		})
	}

	return (
		<Stack
			sx={{
				...sx.stack,
				...(direction == 'row' && sx.stackVertical),
				justifyContent: 'space-between',
			}}
			direction={direction}
			spacing={1}
		>
			<InputLabel label={label} info={info} />
			<ButtonTabs
				options={options}
				value={value}
				iconPosition={iconPosition}
				variant={variant}
				size={size}
				handleChange={handleInputChange}
				disableBorder={disableBorder}
				disablePadding={disablePadding}
				debounceDelay={debounceDelay}
				disableDebounce={disableDebounce}
			/>
		</Stack>
	)
}

export default TabsInput
