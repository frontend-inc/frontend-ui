import React from 'react'
import { Article } from 'frontend-ui/components'
import { ShowItemProps } from './Show'

const Document: React.FC<ShowItemProps> = (props) => {
	return (
		<Article 
      disableImage 
      {...props}
    />
	)
}

export default Document
