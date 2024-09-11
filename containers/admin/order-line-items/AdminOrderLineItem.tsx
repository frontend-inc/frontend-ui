import React from 'react'
import {
	Label,
  Image,
	DisplayFields,
	ResourceListItem,
} from '../../../components'
import { Badge, Box } from '@mui/material'
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
        <Badge badgeContent={2} color="secondary">					
          <Box sx={ sx.image }>
            <Image
              alt={orderLineItem?.product_data?.title || ''}
              src={orderLineItem?.product_data?.image_url}
              height={64}
              width={64}
            />		
          </Box>			
				</Badge>
      }
			primary={orderLineItem.product_data?.title}
			secondary={
				<DisplayFields
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

const sx = {
  image: {
    height: 64,
    width: 64,
  }
}