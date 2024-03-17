import React from 'react'
import FilterWrapper from './FilterWrapper'
import CheckboxNumberRangeFilterItem from './CheckboxNumberRangeFilterItem'
import {
	FilterOperatorType,
	FilterWhereType,
	FilterOptionType,
} from '../../../../types'

type CheckboxNumberRangeFilterProps = {
	name: string
	where?: FilterWhereType
	operator?: FilterOperatorType
	options?: {
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

const CheckboxNumberRangeFilter: React.FC<CheckboxNumberRangeFilterProps> = (props) => {
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
				<CheckboxNumberRangeFilterItem
					key={index}
					values={values}
					option={{
            min: parseFloat(String(option.min)),
            max: parseFloat(String(option.max))
          }}
					handleClick={() =>
						handleClick({
                field: name,
                operator: 'btw',
                where: 'OR',
                value: [
                  parseFloat(String(option.min)), 
                  parseFloat(String(option.max))
                ]
              })            
            }					
				/>
			))}
		</FilterWrapper>
	)
}

export default CheckboxNumberRangeFilter
