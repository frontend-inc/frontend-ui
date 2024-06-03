import React from 'react'
import { Article } from 'frontend-ui/components'
import { ShowItemProps } from './Show'

const Event: React.FC<ShowItemProps> = (props) => {
	return (
		<Article 
      disableImage 
      {...props}
    />
	)
}

export default Event
