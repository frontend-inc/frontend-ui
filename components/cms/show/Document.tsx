import React from 'react'
import { Article } from 'frontend-ui/components'
import { CollectionShowItemProps } from './CollectionShow'

const Document: React.FC<CollectionShowItemProps> = (props) => {
	return (
		<Article 
      disableImage 
      {...props}
    />
	)
}

export default Document
