'use client'

import React from 'react'
import { DocumentList, DataTableListItems } from '../..'
import { DocumentListProps } from '../documents/DocumentList'
import { TableHeaderType } from '../../../types'

export type DataTableListProps = DocumentListProps & {
	headers: TableHeaderType[]
}

const DataTableList: React.FC<DataTableListProps> = (props) => {
	return (
		<DocumentList {...props} list={DataTableListItems} loadMore={false} />
	)
}

export default DataTableList
