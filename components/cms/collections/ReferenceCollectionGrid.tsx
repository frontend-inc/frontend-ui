import React from 'react'
import { CollectionListProps } from './CollectionList'
import { CollectionGrid, ReferenceCollectionListItems } from '../..'

const ReferenceCollectionGrid: React.FC<CollectionListProps> = (props) => {
	let { url, resource } = props
	url = `${url}/${resource?.id}/references`
	return (
		<CollectionGrid
			{...props}
			url={url}
			resource={resource}
			list={ReferenceCollectionListItems}
		/>
	)
}

export default ReferenceCollectionGrid
