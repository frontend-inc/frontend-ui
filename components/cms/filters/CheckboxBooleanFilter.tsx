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
	field: string
	options?: OptionType[]
	values?: any
	handleClick: (filter: FilterOptionType) => void
	label?: string
	disableBorder?: boolean
	disablePadding?: boolean
}

type BooleanOptionType = {
	label: string
	operator: FilterOperatorType
	value: boolean
}[]

const CheckboxFilter: React.FC<CheckboxFilterProps> = (props) => {
	const {
		label,
		field,
		values,
		handleClick,
		disableBorder,
		disablePadding = false,
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
		>
			{BOOLEAN_OPTIONS?.map((option, index) => (
				<CheckboxFilterItem
					key={index}
					values={values}
					option={option}
					handleClick={() =>
						handleClick({
							field,
							where: 'OR',
							operator: option.operator,
							value: option.value,
						})
					}
				/>
			))}
		</MenuList>
	)
}

export default CheckboxFilter
