import React, { useState, useEffect } from 'react'
import { CheckboxFilterList } from '../../../../components/shopify'
import { ProductCollectionFilter } from 'frontend-shopify'
import { findProductTypeFilters } from 'frontend-shopify'

type ProductTypeFiltersProps = {
	filters: ProductCollectionFilter[]
	options: string[]
	handleClick: (value: string) => void
}

const ProductTypeFilters: React.FC<ProductTypeFiltersProps> = (props) => {
	const { filters, options, handleClick } = props

	const [values, setValues] = useState([])

	useEffect(() => {
		if (filters) {
			setValues(findProductTypeFilters(filters))
		}
	}, [filters])

	return (
		<CheckboxFilterList
			options={options}
			values={values}
			handleClick={handleClick}
		/>
	)
}

export default ProductTypeFilters
