import React from 'react'
import { Typography } from '@mui/material'
import { DisplayFields, ResourceGridItem } from '../../../components'
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
		<ResourceGridItem
			selectable={selectable}
			selected={selected}
      label={ product.display_price }
      image={product?.image?.url}
			primary={ product?.title }			
      secondary={ 
        <DisplayFields 
          resource={ product }
          fields={[
            { label: 'Price', name: 'price', variant: 'price' },
            { label: 'Description', name: 'description', variant: 'text' },            
          ]}
        />
      }
			handleEdit={handleEdit}
			handleDelete={handleDelete}
			handleClick={handleClick}
			handleSelect={handleSelect}
			{...rest}
		/>
	)
}

export default AdminProductItem
