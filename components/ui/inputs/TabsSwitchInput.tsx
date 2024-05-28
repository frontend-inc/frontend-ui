import React from 'react'
import { TabsInput } from '../../../components'
import { SyntheticEventType } from '../../../types'

type TabsSwitchInputProps = {
	value: boolean
	name: string
	handleChange: (ev: SyntheticEventType) => void
	disableBorder?: boolean
	disablePadding?: boolean
	label?: string
	direction?: 'row' | 'column'
	size?: 'small' | 'large'
}

const TabsSwitchInput: React.FC<TabsSwitchInputProps> = (props) => {
	const {
		name,
		value,
		handleChange,
		label,
		direction = 'row',
		size = 'small',
		disableBorder = false,
		disablePadding = false,
	} = props

	return (
		<TabsInput
			name={name}
			label={label}
			size={size}
			direction={direction}
			disableBorder={disableBorder}
			disablePadding={disablePadding}
			options={[
				{ label: 'No', value: 0 },
				{ label: 'Yes', value: 1 },
			]}
			value={value == true ? 1 : 0}
			handleChange={handleChange}
		/>
	)
}

export default TabsSwitchInput
