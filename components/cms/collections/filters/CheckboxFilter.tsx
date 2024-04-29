import React, { useState } from 'react'
import CheckboxFilterItem from './CheckboxFilterItem'
import {
	FilterOperatorType,
	FilterWhereType,
	FilterOptionType,
	OptionType,
} from '../../../../types'
import { ExpandableList } from '../../../../components'

type CheckboxFilterProps = {
	name: string
	where?: FilterWhereType
	operator?: FilterOperatorType
	options?: OptionType[]
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
		options,
		values,
		handleClick,
		disablePadding = false,
		closed = false,
	} = props

	return (
		<ExpandableList
			label={label}
			enableBorder={false}
			disablePadding={disablePadding}
			closed={closed}
		>
			{options?.map((option, index) => (
				<CheckboxFilterItem
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
		</ExpandableList>
	)
}

export default CheckboxFilter
