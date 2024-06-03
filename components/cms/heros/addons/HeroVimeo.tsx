import React from 'react'
import { VimeoEmbed } from '../../..'
import { HeroProps } from '../Hero'
import { flattenDocument } from 'frontend-js'
import HeroContainer from '../HeroContainer'

export type HeroVimeoProps = HeroProps & {
	fieldName: string
}

const VimeoVideo: React.FC<HeroVimeoProps> = (props) => {
	const { resource, actions, fieldName, ...rest } = props || {}
	const src = flattenDocument(resource)[fieldName]
	return (
		<HeroContainer {...rest} actions={actions} resource={resource}>
			<VimeoEmbed src={src} />
		</HeroContainer>
	)
}

export default VimeoVideo
