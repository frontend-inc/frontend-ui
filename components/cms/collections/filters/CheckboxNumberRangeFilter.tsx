import React from 'react'
import CheckboxNumberRangeFilterItem from './CheckboxNumberRangeFilterItem'
import {
	FilterOperatorType,
	FilterWhereType,
	FilterOptionType,
} from '../../../../types'
import { ExpandableList } from '../../../../components'

type CheckboxNumberRangeFilterProps = {
	name: string
	where?: FilterWhereType
	operator?: FilterOperatorType
	options?: {
    label: string 
		min: string | number
		max: string | number
	}[]
	values?: any
	handleClick: (filter: FilterOptionType) => void
	label?: string
	icon?: React.ReactNode
	enableBorder?: boolean	
	disablePadding?: boolean
	closed?: boolean
}

const CheckboxNumberRangeFilter: React.FC<CheckboxNumberRangeFilterProps> = (
	props
) => {
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
		<ExpandableList
			label={label}
			enableBorder={enableBorder}
			disablePadding={disablePadding}
			closed={closed}
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
							field: name,
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
		</ExpandableList>
	)
}

export default CheckboxNumberRangeFilter
