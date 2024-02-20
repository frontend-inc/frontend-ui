import React, { useState } from 'react'
import FilterInput from './FilterInput'
import FilterListItem from './FilterListItem'
import {
	FilterOperator,
	FilterWhere,
	FilterOption,
	Option,
} from '../../../../types'

type FilterListProps = {
	name?: string
	where?: FilterWhere
	operator?: FilterOperator
	options?: Option[]
	values?: any
	handleClick: (filter: FilterOption) => void
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

const sx = {
	root: {
		width: '100%',
		minWidth: '280px',
	},
	padding: {
		px: 1,
	},
	listItem: {
		borderRadius: (theme) => theme.shape.borderRadius,
		height: '40px',
	},
	listItemButton: {
		borderRadius: (theme) => theme.shape.borderRadius,
		height: '40px',
	},
	listItemIcon: {
		minWidth: '40px',
		width: '40px',
	},
	label: {
		py: 0,
		color: 'text.secondary',
		lineHeight: '1em',
	},
	icon: {
		transition: 'transform 0.3s ease-in-out',
	},
	expandMore: {
		transform: 'rotate(90deg)',
	},
	borderTop: {
		borderTop: '1px solid',
		borderColor: 'divider',
	},
}
