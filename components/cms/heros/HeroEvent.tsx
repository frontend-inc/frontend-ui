import React from 'react'
import { HeroArticle } from 'frontend-ui/components'
import { HeroProps } from './Hero'

const HeroEvent: React.FC<HeroProps> = (props) => {
	return (
		<HeroArticle 
      disableImage 
      {...props}
    />
	)
}

export default HeroEvent
