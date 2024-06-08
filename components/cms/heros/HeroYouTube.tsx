import React from 'react'
import { YouTubeEmbed } from '../..'
import { HeroProps } from './Hero'
import { flattenDocument } from 'frontend-js'
import HeroContainer from './HeroContainer'

export type HeroYouTubeProps = HeroProps & {
	fieldName: string
}

const HeroYouTube: React.FC<HeroYouTubeProps> = (props) => {
	const { actions, resource, fieldName, displayFields=[], ...rest } = props || {}
	const src = flattenDocument(resource)[fieldName]
	return (
		<HeroContainer  
      actions={actions} 
      resource={resource}
      displayFields={[]}
      {...rest}
    >
			<YouTubeEmbed src={src} />
		</HeroContainer>
	)
}

export default HeroYouTube
