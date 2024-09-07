import React from 'react'
import { ProductListProps } from './ProductList'
import {
	ProductList,
	ProductListItem,
	SortableRelatedProductListItems,
} from '../..'

const SortableRelatedProductList: React.FC<ProductListProps> = (
	props
) => {
	const { query, slots = { item: {} } } = props
	let { url, resource } = props
	url = `${url}/${resource?.id}/references`

	return (
		<ProductList
			{...props}
			url={url}
			resource={resource}
			list={SortableRelatedProductListItems}
			component={ProductListItem}
			query={{
				...query,
				sort_by: 'position',
				sort_direction: 'asc',
			}}
			slots={{
				...slots,
				item: {
					...slots.item,
					sortable: true,
				},
			}}
		/>
	)
}

export default SortableRelatedProductList
