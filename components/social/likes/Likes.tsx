import React from 'react'
import { CollectionContainer, CollectionList } from '../..'
import { CollectionListProps } from '../../cms/collections/CollectionList'
import { CollectionContainerProps } from '../../cms/collections/CollectionContainer'

export type LikesProps = CollectionListProps & CollectionContainerProps

const Likes: React.FC<LikesProps> = (props) => {
	const {
		fields,
		enableSearch,
		enableCreate,
		filterOptions,
		sortOptions,
		url,
		query = {},
		filterUser,
		filterTeam,
		perPage,
		...rest
	} = props

	let likesUrl = `${url}/likes`

	return (
		<CollectionContainer
			url={likesUrl}
			query={query}
			filterUser={filterUser}
			filterTeam={filterTeam}
			perPage={perPage}
			enableSearch={enableSearch}
			filterOptions={filterOptions}
			sortOptions={sortOptions}
		>
			<CollectionList {...rest} url={url} />
		</CollectionContainer>
	)
}

export default Likes
