import React from 'react'
import { VimeoEmbed } from '../../..'
import { CollectionShowItemProps } from '../CollectionShow'
import { flattenDocument } from 'frontend-js'
import ShowContainer from '../ShowContainer'

type VimeoVideoProps = CollectionShowItemProps & {
	fieldName: string
}

const VimeoVideo: React.FC<VimeoVideoProps> = (props) => {
	const { resource, actions, fieldName, ...rest } = props || {}
	const src = flattenDocument(resource)[fieldName]
	return (
		<ShowContainer {...rest} actions={actions} resource={resource}>
			<VimeoEmbed src={src} />
		</ShowContainer>
	)
}

export default VimeoVideo
