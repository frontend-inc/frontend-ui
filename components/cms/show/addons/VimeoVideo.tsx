import React from 'react'
import { VimeoEmbed } from '../../..'
import { ShowItemProps } from '../Show'
import { flattenDocument } from 'frontend-js'
import ShowContainer from '../ShowContainer'

type VimeoVideoProps = ShowItemProps & {
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
