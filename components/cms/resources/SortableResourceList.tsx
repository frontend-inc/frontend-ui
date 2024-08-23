import React from 'react'
import SortableResourceListItems from './SortableResourceListItems'
import { ResourceList } from '../..'
import { ResourceListProps } from './ResourceList'

const SortableResourceList: React.FC<ResourceListProps> = (props) => {

  const { 
    list: List = SortableResourceListItems,
  } = props || {}
	
	return (
		<ResourceList 
      { ...props }
      list={ List }
    />
	)
}

export default SortableResourceList
