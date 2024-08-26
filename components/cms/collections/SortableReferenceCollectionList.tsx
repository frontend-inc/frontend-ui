import React from 'react'
import { CollectionListProps } from './CollectionList'
import { 
  CollectionList, 
  CollectionListItem, 
  SortableReferenceListItems 
} from "../.."

const SortableReferenceCollectionList: React.FC<CollectionListProps> = (props) => {
  const { query, slots={ item: {} } } = props
  let { url, resource } = props
  url = `${url}/${resource?.id}/references`

  return(
    <CollectionList 
      {...props}   
      url={url}
      resource={resource}   
      list={ SortableReferenceListItems }
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

export default SortableReferenceCollectionList
