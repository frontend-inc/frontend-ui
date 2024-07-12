import React from 'react'
import { CollectionContainer, CollectionList } from '../..'
import { CollectionListProps } from '../../cms/collections/CollectionList'
import { CollectionContainerProps } from '../../cms/collections/CollectionContainer'

export type FavoritesProps = CollectionListProps & CollectionContainerProps

const Favorites: React.FC<FavoritesProps> = (props) => {
	const {
		fields,
		enableSearch,
		enableCreate,
		filterOptions,
		sortOptions,
		url,
		filterUser,
		filterTeam,
		perPage,
		...rest
	} = props

  let { query={} } = props

  query = {
    ...query,
    method: 'favorites'
  }

	return (
		<CollectionContainer
			url={url}
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

export default Favorites
