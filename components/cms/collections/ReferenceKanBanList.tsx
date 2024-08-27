import React from 'react'
import { CollectionList } from '../..'
import { CollectionListProps } from './CollectionList'
import KanBanListItems from './KanBanListItems'
import ReferenceKanBanListItems from './ReferenceKanBanListItems'

export type ReferenceKanBanListProps = CollectionListProps & {
	fieldName: string
	headers: {
		label: string
		value: string
	}[]
}

const ReferenceKanBanList: React.FC<ReferenceKanBanListProps> = (props) => {
	let { resource, url } = props || {}
	url = `${url}/${resource?.id}/references`
	return (
		<CollectionList
			{...props}
			url={url}
			resource={resource}
			enableSorting={false}
			list={ReferenceKanBanListItems}
		/>
	)
}

export default ReferenceKanBanList
