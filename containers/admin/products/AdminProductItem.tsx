'use client'

import React from 'react'
import { PublishLabel, ListFields, ResourceListItem } from '../../../components'
import { ResourceItemProps } from '../../../components/cms/resources/ResourceItem'

const AdminProductItem: React.FC<ResourceItemProps> = (props) => {
	const {
		resource: product,
		selectable,
		selected,
		handleClick,
		handleEdit,
		handleDelete,
		handleSelect,
		...rest
	} = props

	return (
		<ResourceListItem
			sortable
			selectable={selectable}
			selected={selected}
			image={product?.image?.url}
			primary={product?.title}
			secondary={
				<ListFields
					resource={product}
					fields={[
						{
							label: 'Price',
							name: 'display_price',
							variant: 'string',
						},
					]}
				/>
			}
			secondaryAction={<PublishLabel published={product?.published} />}
			handleEdit={handleEdit}
			handleDelete={handleDelete}
			handleClick={handleClick}
			handleSelect={handleSelect}
			{...rest}
		/>
	)
}

export default AdminProductItem
