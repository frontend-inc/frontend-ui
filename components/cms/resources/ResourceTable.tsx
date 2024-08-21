import React from 'react'
import {
	TableHeaderType,
} from '../../../types'
import { Resources, TableList } from '../../../components'
import { ResourcesProps } from './Resources'

export type ResourceTableProps = ResourcesProps & {
	headers: TableHeaderType[]
}

const ResourceTable: React.FC<ResourceTableProps> = (props) => {	
  return(
    <Resources
      { ...props }    
      list={ TableList }
    />
	)
}

export default ResourceTable

