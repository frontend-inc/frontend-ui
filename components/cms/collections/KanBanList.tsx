import React from 'react'
import { List } from '../..'
import { ListProps } from './List'
import KanBanListItems from './KanBanListItems'

export type KanBanListProps = ListProps & {
		headers: {
			label: string
			value: string
		}[]
	}

const KanBanList: React.FC<KanBanListProps> = (props) => {
	
	return (
    <List 
      { ...props }
      enableSorting={false}
      list={ KanBanListItems }
    />
	)
}

export default KanBanList
