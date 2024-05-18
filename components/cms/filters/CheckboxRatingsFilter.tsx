import React, { useState } from 'react'
import CheckboxRatingsFilterItem from './CheckboxRatingsFilterItem'
import {
	FilterOperatorType,
	FilterWhereType,
	FilterOptionType,
} from '../../../types'
import { MenuList } from '../..'

type CheckboxFilterProps = {
	name: string
	where?: FilterWhereType
	operator?: FilterOperatorType
	values?: any
	handleClick: (filter: FilterOptionType) => void
	label?: string
	icon?: React.ReactNode
	disablePadding?: boolean
	closed?: boolean
}

const CheckboxFilter: React.FC<CheckboxFilterProps> = (props) => {
	const {
		label,
		name,
		values,
		handleClick,
		disablePadding = false,
		closed = false,
	} = props

	let RATING_OPTIONS = [
		{ label: '5 Star', value: 5 },
		{ label: '4 Stars', value: 4 },
		{ label: '3 Stars', value: 3 },
		{ label: '2 Stars', value: 2 },
		{ label: '1 Stars', value: 1 },
	]

	return (
		<MenuList
			label={label}
			disablePadding={disablePadding}
			closed={closed}
		>
			{RATING_OPTIONS?.map((option, index) => (
				<CheckboxRatingsFilterItem
					key={index}
					values={values}
					option={option}
					handleClick={() =>
						handleClick({
							where: 'OR',
							operator: 'eq',
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
