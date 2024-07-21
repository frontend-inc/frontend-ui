import React from 'react'
import { ListContainer } from '../..'
import { ListItemsProps } from './ListItems'
import { ListContainerProps } from './ListContainer'
import CarouselListItems from './CarouselListItems'

export type CarouselListProps = ListItemsProps &
	ListContainerProps 

const CarouselList: React.FC<CarouselListProps> = (props) => {
	const {
		fields,
		enableSearch,
		enableCreate,
		enableFilters,
    enableSorting,
		url,
		query = {},
		filterUser,
		filterTeam,
		perPage,
		...rest
	} = props

	return (
		<ListContainer
			url={url}
			query={query}
			filterUser={filterUser}
			filterTeam={filterTeam}
			perPage={perPage}
			fields={fields}
			enableSearch={enableSearch}
			enableCreate={enableCreate}
      enableFilters={enableFilters}
      enableSorting={enableSorting}
		>
			<CarouselListItems {...rest} url={url} />
		</ListContainer>
	)
}

export default CarouselList
