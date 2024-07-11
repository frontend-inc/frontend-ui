import React from 'react'
import { YouTubeEmbed } from '../..'
import { HeroProps } from './HeroItem'
import { flattenDocument } from 'frontend-js'
import HeroLayout from './HeroLayout'

export type HeroYouTubeProps = HeroProps & {
	fieldName: string
}

const HeroYouTube: React.FC<HeroYouTubeProps> = (props) => {
	const {
		actions,
		resource,
		fieldName,
		displayFields = [],
		...rest
	} = props || {}
	const src = flattenDocument(resource)[fieldName]
	return (
		<HeroLayout
			actions={actions}
			resource={resource}
			displayFields={[]}
			{...rest}
		>
			<YouTubeEmbed src={src} />
		</HeroLayout>
	)
}

export default HeroYouTube
