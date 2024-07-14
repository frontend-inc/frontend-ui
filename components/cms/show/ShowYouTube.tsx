import React from 'react'
import { YouTubeEmbed } from '../..'
import { ShowProps } from './ShowItem'
import { flattenDocument } from 'frontend-js'
import ShowLayout from './ShowLayout'

export type ShowYouTubeProps = ShowProps & {
	fieldName: string
}

const ShowYouTube: React.FC<ShowYouTubeProps> = (props) => {
	const {
		actions,
		resource,
		fieldName,
		displayFields = [],
		...rest
	} = props || {}
	const src = flattenDocument(resource)[fieldName]
	return (
		<ShowLayout
			actions={actions}
			resource={resource}
			displayFields={[]}
			{...rest}
		>
			<YouTubeEmbed src={src} />
		</ShowLayout>
	)
}

export default ShowYouTube
