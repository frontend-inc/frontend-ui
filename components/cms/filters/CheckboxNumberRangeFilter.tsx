import React from 'react'
import CheckboxNumberRangeFilterItem from './CheckboxNumberRangeFilterItem'
import {
	FilterOperatorType,
	FilterWhereType,
	FilterOptionType,
} from '../../../types'
import { MenuList } from '../..'

type CheckboxNumberRangeFilterProps = {
	field: string
	options?: {
		label: string
		min: string | number
		max: string | number
	}[]
	values?: any
	handleClick: (filter: FilterOptionType) => void
	label?: string
	disablePadding?: boolean
	defaultClosed?: boolean
}

const CheckboxNumberRangeFilter: React.FC<CheckboxNumberRangeFilterProps> = (
	props
) => {
	const {
		label,
		field,
		options,
		values,
		handleClick,
		disablePadding = false,
		defaultClosed = false,
	} = props

	return (
		<MenuList
			label={label}
			disablePadding={disablePadding}
			defaultClosed={defaultClosed}
		>
			{options?.map((option, index) => (
				<CheckboxNumberRangeFilterItem
					key={index}
					values={values}
					option={{
						label: option.label,
						min: parseFloat(String(option.min)),
						max: parseFloat(String(option.max)),
					}}
					handleClick={() =>
						handleClick({
							field,
							operator: 'btw',
							where: 'OR',
							value: [
								parseFloat(String(option.min)),
								parseFloat(String(option.max)),
							],
						})
					}
				/>
			))}
		</MenuList>
	)
}

export default CheckboxNumberRangeFilter
