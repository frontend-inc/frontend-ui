import React from 'react'
import { List, DataTableListItems } from '../..'
import { ListProps } from './List'
import { TableHeaderType } from '../../../types'

export type DataTableListProps = ListProps & {
	headers: TableHeaderType[]
}

const DataTableList: React.FC<DataTableListProps> = (props) => {
	return <List {...props} list={DataTableListItems} loadMore={false} />
}

export default DataTableList
