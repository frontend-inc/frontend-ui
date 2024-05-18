import React from 'react'
import { YouTubeEmbed } from '../../..'
import { CollectionShowItemProps } from '../CollectionShow'
import { flattenDocument } from 'frontend-js'
import ShowContainer from '../ShowContainer'

type YouTubeVideoProps = CollectionShowItemProps & {
	fieldName: string
}

const YouTubeVideo: React.FC<YouTubeVideoProps> = (props) => {
	const { actions, resource, fieldName, ...rest } = props || {}
	const src = flattenDocument(resource)[fieldName]
	return (
		<ShowContainer {...rest} actions={actions} resource={resource}>
			<YouTubeEmbed src={src} />
		</ShowContainer>
	)
}

export default YouTubeVideo
