import React from 'react'
import { ListContainer } from '../..'
import { ListItemsProps } from './ListItems'
import { ListContainerProps } from './ListContainer'
import KanBanListList from './KanBanListItems'

export type KanBanListProps = ListItemsProps &
	ListContainerProps & {
		headers: {
			label: string
			value: string
		}[]
	}

const KanBanList: React.FC<KanBanListProps> = (props) => {
	const {
		resource,
		fields,
		enableSearch,
		url,
		headers = [],
		query = {},
    enableFilters,
    enableSorting,
		filterUser,
		filterTeam,
		filterRelated,
		perPage,
		...rest
	} = props

	return (
		<ListContainer
			resource={resource}
			url={url}
			query={query}
			filterUser={filterUser}
			filterTeam={filterTeam}
			filterRelated={filterRelated}
			perPage={perPage}
			fields={fields}
			enableSearch={enableSearch}
      enableFilters={enableFilters}
			enableSorting={false}
		>
			<KanBanListList {...rest} url={url} headers={headers} />
		</ListContainer>
	)
}

export default KanBanList
