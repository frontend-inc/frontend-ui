import React from 'react'
import { PublishLabel, DisplayFields, ResourceGridItem } from '../../../components'
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
      primary={ 
        <PublishLabel published={product.published} />
       }		
      secondary={ 
        <DisplayFields 
          resource={ product }
          fields={[
            { label: 'Title', name: 'title', variant: 'string' },
            { label: 'Price', name: 'price', variant: 'price' },
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
