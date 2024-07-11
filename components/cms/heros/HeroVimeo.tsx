import React from 'react'
import { VimeoEmbed } from '../..'
import { HeroProps } from './HeroItem'
import { flattenDocument } from 'frontend-js'
import HeroLayout from './HeroLayout'

export type HeroVimeoProps = HeroProps & {
	fieldName: string
}

const VimeoVideo: React.FC<HeroVimeoProps> = (props) => {
	const {
		resource,
		actions,
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
			<VimeoEmbed src={src} />
		</HeroLayout>
	)
}

export default VimeoVideo
