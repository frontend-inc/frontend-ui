'use client'

import React from 'react'
import {
	FilterOperatorType,
	FilterWhereType,
	FilterOptionType,
} from '../../../types'
import { MenuList } from '../..'
import { Checkbox } from 'frontend-shadcn'
import { Rating } from '../../../components'

type CheckboxRatingsFilterItemProps = {
	label?: string
	option: {
		label: string
		value: number
	}
	values?: any[]
	handleClick: () => void
}

const CheckboxRatingsFilterItem: React.FC<CheckboxRatingsFilterItemProps> = (
	props
) => {
	const { values = [], option, handleClick } = props

	return (
		<li className="list-none">
			<button
				className="flex items-center w-full px-0 py-2 hover:bg-accent hover:text-accent-foreground"
				onClick={handleClick}
			>
				<div className="mr-2">
					<Checkbox
						checked={values?.includes(option.value)}
						onCheckedChange={handleClick}
					/>
				</div>
				<Rating readOnly value={Number(option?.value)} />
			</button>
		</li>
	)
}

type CheckboxFilterProps = {
	field: string
	where?: FilterWhereType
	operator?: FilterOperatorType
	values?: any
	handleClick: (filter: FilterOptionType) => void
	label: string
	icon?: React.ReactNode
}

const CheckboxFilter: React.FC<CheckboxFilterProps> = (props) => {
	const { label, field, values, handleClick } = props

	let RATING_OPTIONS = [
		{ label: '5 Star', value: 5 },
		{ label: '4 Stars', value: 4 },
		{ label: '3 Stars', value: 3 },
		{ label: '2 Stars', value: 2 },
		{ label: '1 Stars', value: 1 },
	]

	return (
		<MenuList label={label}>
			{RATING_OPTIONS?.map((option, index) => (
				<CheckboxRatingsFilterItem
					key={index}
					values={values}
					option={option}
					handleClick={() =>
						handleClick({
							where: 'OR',
							operator: 'eq',
							field: field,
							value: option.value,
						})
					}
				/>
			))}
		</MenuList>
	)
}

export default CheckboxFilter
