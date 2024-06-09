import React from 'react'
import { CollectionContainer } from '../../../components'
import { CollectionListProps } from './CollectionList'
import { KanBan } from '../../../components'
import { TableHeaderType } from '../../../types'

export type CollectionKanBanProps = CollectionListProps & {	
	headers?: TableHeaderType[]
}

const CollectionKanBan: React.FC<CollectionKanBanProps> = (props) => {
	
	const {
		url,
    ...rest
	} = props  

  const handleClick = (resource) => {
    console.log('handleClick', resource)
  }

	return (
    <CollectionContainer 
      url={url}
      searchUrl={url}  
      component={ KanBan }  
      handleClick={handleClick}  
      {...rest}
    />
	)
}

export default CollectionKanBan
