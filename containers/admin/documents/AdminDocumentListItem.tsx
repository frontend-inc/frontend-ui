'use client'

import React from 'react'
import {
  Image,
	PublishLabel,
	ListFields,
	ResourceListItem,
} from '../../../components'
import { Badge } from 'frontend-shadcn'
import { ResourceItemProps } from '../../../components/cms/resources/ResourceItem'

const AdminDocumentListItem: React.FC<ResourceItemProps> = (props) => {
	const {
		resource,
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
      avatar={
        <div className="h-[72px] w-[72px]">
          <Image 
            src={resource?.image?.url} 
            aspectRatio={1.0} 
            alt={resource?.title} 
          />
        </div>
      }			
			primary={resource?.title}
			secondary={
				<ListFields
					resource={resource}
					fields={[{ label: 'Handle', name: 'handle', variant: 'string' }]}
				/>
			}
			secondaryAction={
        <PublishLabel published={resource?.published} />          
      }
			handleEdit={handleEdit}
			handleDelete={handleDelete}
			handleClick={handleClick}
			handleSelect={handleSelect}
			{...rest}
		/>
	)
}

export default AdminDocumentListItem
