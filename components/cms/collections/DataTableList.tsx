import React from 'react'
import { DataList, DataTableListItems } from '../..'
import { DataListProps } from '../data/DataList'
import { TableHeaderType } from '../../../types'

export type DataTableListProps = DataListProps & {
	headers: TableHeaderType[]
}

const DataTableList: React.FC<DataTableListProps> = (props) => {
	return <DataList {...props} list={DataTableListItems} loadMore={false} />
}

export default DataTableList
