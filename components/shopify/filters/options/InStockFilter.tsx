import React, { useState, useEffect } from 'react'
import { CheckboxFilterList } from '../../../../components/shopify'
import { ProductCollectionFilter } from 'frontend-shopify'
import { findAvailableFilter } from 'frontend-shopify'

type InStockFilterProps = {
	filters: ProductCollectionFilter[]
	handleClick: (value: string) => void
}

const InStockFilter: React.FC<InStockFilterProps> = (props) => {
	const { filters, handleClick } = props

	const [values, setValues] = useState([])

	useEffect(() => {
		if (filters) {
			setValues([findAvailableFilter(filters)])
		}
	}, [filters])

	return (
		<CheckboxFilterList
      // @ts-ignore
			options={[{ label: 'In-stock', value: true }]}
			values={values}
			handleClick={handleClick}
		/>
	)
}

export default InStockFilter
