import React from 'react'
import { ListContainer, DataTableListItems } from '../..'
import { ListItemsProps } from './ListItems'
import { ListContainerProps } from './ListContainer'
import { TableHeaderType } from '../../../types'

export type DataTableListProps = ListItemsProps &
	ListContainerProps & {
		headers: TableHeaderType[]
	}

const DataTableList: React.FC<DataTableListProps> = (props) => {
	const {
		resource,
		fields,
		enableSearch,
		enableCreate,
		url,
		query = {},
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
			enableCreate={enableCreate}
		>
			<DataTableListItems {...rest} url={url} />
		</ListContainer>
	)
}

export default DataTableList
