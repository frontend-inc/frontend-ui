import React from 'react'
import { List } from '../..'
import { ListItemsProps } from './ListItems'
import { ListContainerProps } from './ListContainer'
import KanBanListItems from './KanBanListItems'

export type KanBanListProps = ListItemsProps &
	ListContainerProps & {
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
