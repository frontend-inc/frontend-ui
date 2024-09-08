import React from 'react'
import { PublishLabel, DisplayFields, ResourceListItem } from '../../../../components'
import { ResourceItemProps } from '../../../../components/cms/resources/ResourceItem'
import { Stack, Box } from '@mui/material'

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
			selectable={selectable}
			selected={selected}      
      image={product?.image?.url}				      
      primary={ product?.title }
      secondary={ 
        <Stack spacing={1}>
        <DisplayFields 
          resource={ product }
          fields={[            
            { label: 'Price', name: 'price', variant: 'price' },
          ]}
        />
        <Box><PublishLabel published={product?.published} /></Box>
        </Stack>
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
