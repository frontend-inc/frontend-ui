import React from 'react'
import { ListContainer, ListItems } from '../..'
import { ListItemsProps } from './ListItems'
import { ListContainerProps } from './ListContainer'
import { buildSearchQuery } from '../../../helpers'

export type ListProps = ListItemsProps & ListContainerProps & {
  list: React.FC<any>
}

const List: React.FC<ListProps> = (props) => {
	const {
		resource,
		enableSearch,
		enableCreate,
    enableFilters,
    enableSorting,
		url,
		query = {},
		filterUser,
		filterTeam,
		filterRelated,
		filterGeo,
		perPage,
    list: RenderList = ListItems,
		...rest
	} = props

  const searchQuery = buildSearchQuery({
    query,
    resource,
    perPage,
    filterUser,
    filterTeam,
    filterRelated,
    filterGeo
  })

	return (
		<ListContainer
			resource={resource}
			url={url}
			query={searchQuery}
			enableSearch={enableSearch}
			enableCreate={enableCreate}
			enableFilters={enableFilters}
      enableSorting={enableSorting}
		>
			<RenderList 
        {...rest} 
        url={url} 
      />
		</ListContainer>
	)
}

export default List
