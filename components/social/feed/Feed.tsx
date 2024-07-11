import React from 'react'
import { CollectionContainer, CollectionList } from '../..'
import { CollectionListProps } from '../../cms/collections/CollectionList'
import { CollectionContainerProps } from '../../cms/collections/CollectionContainer'

export type FeedProps = CollectionListProps & CollectionContainerProps

const Feed: React.FC<FeedProps> = (props) => {
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

	let socialUrl = `${url}/social_feed`

	return (
		<CollectionContainer
			url={socialUrl}
			query={query}
			filterUser={filterUser}
			filterTeam={filterTeam}
			perPage={perPage}
			fields={fields}
			enableSearch={enableSearch}
			enableCreate={enableCreate}
			filterOptions={filterOptions}
			sortOptions={sortOptions}
		>
			<CollectionList {...rest} url={url} />
		</CollectionContainer>
	)
}

export default Feed
