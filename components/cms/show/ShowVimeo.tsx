import React from 'react'
import { VimeoEmbed } from '../..'
import { ShowProps } from './ShowItem'
import { flattenDocument } from 'frontend-js'
import ShowLayout from './ShowLayout'

export type ShowVimeoProps = ShowProps & {
	fieldName: string
}

const VimeoVideo: React.FC<ShowVimeoProps> = (props) => {
	const {
		resource,
		actions,
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
			<VimeoEmbed src={src} />
		</ShowLayout>
	)
}

export default VimeoVideo
