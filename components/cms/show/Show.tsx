import React from 'react'
import { ShowContainer, ShowItem } from '../..'
import { ShowContainerProps } from './ShowContainer'
import { ShowItemProps } from './ShowItem'

export type ShowProps = ShowContainerProps & ShowItemProps

const Show: React.FC<ShowProps> = (props) => {
	const { url, foreignUrl, fields, resource } = props || {}

	return (
		<ShowContainer url={url} foreignUrl={foreignUrl} fields={fields} resource={resource}>
			<ShowItem {...props} url={url} />
		</ShowContainer>
	)
}

export default Show
