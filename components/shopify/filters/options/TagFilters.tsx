import React, { useState, useEffect } from 'react'
import { CheckboxFilterList } from '../../../../components/shopify'
import { ProductCollectionFilter } from 'frontend-shopify'
import { findTagFilters } from 'frontend-shopify'

type TagFiltersProps = {
	filters: ProductCollectionFilter[]
	options: string[]
	handleClick: (value: string | number) => void
}

const TagFilters: React.FC<TagFiltersProps> = (props) => {
	const { filters, options, handleClick } = props

	const [values, setValues] = useState([])

	useEffect(() => {
		if (filters) {
			setValues(findTagFilters(filters))
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

export default TagFilters
