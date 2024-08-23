import React from 'react'
import { CollectionList } from '../..'
import { CollectionListProps } from '../collections/CollectionList'
import KanBanListItems from './KanBanListItems'

export type KanBanListProps = CollectionListProps & {
  fieldName: string
	headers: {
		label: string
		value: string
	}[]
}

const KanBanList: React.FC<KanBanListProps> = (props) => {
	return(
    <CollectionList 
      {...props} 
      enableSorting={false} 
      list={KanBanListItems} 
    />
  )
}

export default KanBanList
