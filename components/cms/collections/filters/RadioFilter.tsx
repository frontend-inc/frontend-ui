import React, { useState } from 'react'
import FilterWrapper from './FilterWrapper'
import RadioFilterItem from './RadioFilterItem'
import {
	FilterOperatorType,
	FilterWhereType,
	FilterOptionType,
	OptionType,
} from '../../../../types'

type RadioFilterProps = {
	name: string
	where?: FilterWhereType
	operator?: FilterOperatorType
	options?: OptionType[]
	values?: any
	handleClick: (filter: FilterOptionType) => void
	label?: string
	icon?: React.ReactNode
	enableBorder?: boolean
	disablePadding?: boolean
	closed?: boolean
}

const RadioFilter: React.FC<RadioFilterProps> = (props) => {
	const {
		label,
		name,
		options,
		values,
		handleClick,
		enableBorder,
		disablePadding = false,
		closed = false,
	} = props

	return (
		<FilterWrapper
			label={label}
			enableBorder={enableBorder}
			disablePadding={disablePadding}
			closed={closed}
		>
			{options?.map((option, index) => (
				<RadioFilterItem
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
		</FilterWrapper>
	)
}

export default RadioFilter
