import React from 'react'
import { DataList } from '../..'
import { DataListProps } from './DataList'
import KanBanListItems from './KanBanListItems'

export type KanBanListProps = DataListProps & {
	headers: {
		label: string
		value: string
	}[]
}

const KanBanList: React.FC<KanBanListProps> = (props) => {
	return <DataList {...props} enableSorting={false} list={KanBanListItems} />
}

export default KanBanList
