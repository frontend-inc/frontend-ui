import React from 'react'
import {
	FilterOperatorType,
	FilterWhereType,
	FilterOptionType,
} from '../../../../types'
import CheckboxNumberRangeFilter from './CheckboxNumberRangeFilter'

type CheckboxPriceRangeFilterProps = {
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

const CheckboxPriceRangeFilter: React.FC<CheckboxPriceRangeFilterProps> = (
	props
) => {
	return <CheckboxNumberRangeFilter {...props} enableCurrency />
}

export default CheckboxPriceRangeFilter
