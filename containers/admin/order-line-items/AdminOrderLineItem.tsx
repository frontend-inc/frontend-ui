'use client'

import React from 'react'
import {
	Label,
	Image,
	ListFields,
	ResourceListItem,
} from '../../../components'
import { Badge } from 'frontend-shadcn'
import { ResourceItemProps } from '../../../components/cms/resources/ResourceItem'

const AdminOrderLineItem: React.FC<ResourceItemProps> = (props) => {
	const {
		resource: orderLineItem,
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
			selectable={selectable}
			selected={selected}
			image={orderLineItem?.product_data?.image_url}
			avatar={
        <div className="relative w-[64px] h-[64px]">
          <Image
            alt={orderLineItem?.product_data?.title || ''}
            src={orderLineItem?.product_data?.image_url}
            height={64}
            width={64}
          />
          <Badge className="py-0 px-1 rounded-full absolute top-0 right-0 transform translate-x-[3px] -translate-y-[3px]">
            {orderLineItem?.quantity}
          </Badge>
        </div>				
			}
			primary={orderLineItem.product_data?.title}
			secondary={
				<ListFields
					resource={orderLineItem}
					fields={[
						{ label: 'Price', name: 'product_data.price', variant: 'price' },
					]}
				/>
			}
			secondaryAction={<Label label={orderLineItem?.status} />}
			handleEdit={handleEdit}
			handleClick={handleClick}
			handleSelect={handleSelect}
			{...rest}
		/>
	)
}

export default AdminOrderLineItem
