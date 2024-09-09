import React from 'react'
import { ProductListProps } from './ProductList'
import { ProductList, ProductListItem, SortableDataListItems } from '../..'

const SortableProductList: React.FC<ProductListProps> = (props) => {
	const { query, slots = { item: {} } } = props
	return (
		<ProductList
			{...props}
			style="list"
			list={SortableDataListItems}
			component={ProductListItem}
			query={{
				...query,
				sort_by: 'position',
				sort_direction: 'asc',
			}}
			slots={{
				...slots,
				list: {
					sortable: true,
				},
				item: {
					...slots.item,
					sortable: true,
				},
			}}
		/>
	)
}

export default SortableProductList
