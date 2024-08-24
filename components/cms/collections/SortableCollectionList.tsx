import React from 'react'
import { CollectionListProps } from './CollectionList'
import { 
  CollectionList, 
  CollectionListItem, 
  SortableDataListItems 
} from "../../../components"

const SortableCollectionList: React.FC<CollectionListProps> = (props) => {
  const { query, slots={ item: {} } } = props
  return(
    <CollectionList 
      {...props}      
      style="list" 
      list={ SortableDataListItems }
      component={ CollectionListItem }
      query={{
        ...query,
        sort_by: 'position',
        sort_direction: 'asc'
      }}
      slots={{
        ...slots,
        item: {
          ...slots.item,
          sortable: true,
        }
      }}
    />
  )
}

export default SortableCollectionList
