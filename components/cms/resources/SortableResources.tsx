import React from 'react'
import SortableResourceList from './SortableResourceList'
import { Resources } from '../../../components'
import { ResourcesProps } from './Resources'

const SortableResources: React.FC<ResourcesProps> = (props) => {

  const { 
    list: ResourceList = SortableResourceList,
  } = props || {}
	
	return (
		<Resources 
      { ...props }
      list={ ResourceList }
    />
	)
}

export default SortableResources
