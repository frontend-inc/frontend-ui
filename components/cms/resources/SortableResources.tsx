import React from 'react'
import SortableResourceList from './SortableResourceList'
import { ResourceList } from '../../../components'

import { ResourcesProps } from './ResourceList'

const SortableResources: React.FC<ResourceListProps> = (props) => {

  const { 
    list: ResourceList = SortableResourceList,
  } = props || {}
	
	return (
		<ResourceList 
      { ...props }
      list={ ResourceList }
    />
	)
}

export default SortableResources
