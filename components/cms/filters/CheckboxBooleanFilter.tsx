import React, { useState } from 'react'
import CheckboxFilterItem from './CheckboxFilterItem'
import {
	FilterOperatorType,
	FilterWhereType,
	FilterOptionType,
	OptionType,
} from '../../../types'
import { MenuList } from '../..'

type CheckboxFilterProps = {
	name: string
	where?: FilterWhereType
	operator?: FilterOperatorType
	options?: OptionType[]
	values?: any
	handleClick: (filter: FilterOptionType) => void
	label?: string
	icon?: React.ReactNode
	disableBorder?: boolean
	disablePadding?: boolean
	defaultClosed?: boolean
}

type BooleanOptionType = {
	label: string
	operator: FilterOperatorType
	value: boolean
}[]

const CheckboxFilter: React.FC<CheckboxFilterProps> = (props) => {
	const {
		label,
		name,
		values,
		handleClick,
		disableBorder,
		disablePadding = false,
		defaultClosed = false,
	} = props

	const BOOLEAN_OPTIONS: BooleanOptionType = [
		{ label: 'True', operator: 'eq', value: true },
		{ label: 'False', operator: 'eq', value: false },
	]

	return (
		<MenuList      
			label={label}
			disableBorder={disableBorder}
			disablePadding={disablePadding}
			defaultClosed={defaultClosed}
		>
			{BOOLEAN_OPTIONS?.map((option, index) => (
				<CheckboxFilterItem
					key={index}
					values={values}
					option={option}
					handleClick={() =>
						handleClick({
							where: 'OR',
							operator: option.operator,
							field: name,
							value: option.value,
						})
					}
				/>
			))}
		</MenuList>
	)
}

export default CheckboxFilter
