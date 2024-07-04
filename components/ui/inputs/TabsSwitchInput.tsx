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

  const handleTabChange = (ev) => {
    const newValue = ev.target.value
    handleChange({
      target: {
        name,
        value: newValue == 1 ? true : false,
      },
    })
  }

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
			handleChange={handleTabChange}
		/>
	)
}

export default TabsSwitchInput
