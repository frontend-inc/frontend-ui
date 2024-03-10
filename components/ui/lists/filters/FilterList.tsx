import React, { useState } from 'react'
import FilterInput from './FilterInput'
import FilterListItem from './FilterListItem'
import {
	FilterOperatorType,
	FilterWhereType,
	FilterOptionType,
	OptionType,
} from '../../../../types'

type FilterListProps = {
	name?: string
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

const FilterList: React.FC<FilterListProps> = (props) => {
	const {
		label,
		name,
		where = 'AND',
		operator = 'in',
		options,
		values,
		handleClick,
		enableBorder,
		disablePadding = false,
		closed = false,
	} = props

	const [open, setOpen] = useState(!closed)

	const handleToggleClick = () => {
		setOpen(!open)
	}

	return (
		<FilterInput
			label={label}
			enableBorder={enableBorder}
			disablePadding={disablePadding}
			closed={closed}
		>
			{options?.map((option, index) => (
				<FilterListItem
					key={index}
					values={values}
					option={option}
					handleClick={() =>
						handleClick({
							where,
							operator,
							field: name,
							value: option.value,
						})
					}
				/>
			))}
		</FilterInput>
	)
}

export default FilterList
