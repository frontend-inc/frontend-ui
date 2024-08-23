import React from 'react'
import { DataList } from '../../../components'
import { buildSearchQuery } from '../../../helpers'
import {
	ButtonType,
	DisplayFieldType,
  FormFieldType,
  SearchFilterOptionType,
  SortOptionType,
} from '../../../types'
import { 
  CollectionListItems,
  CollectionToolbar,
  CollectionShow,
  CollectionForm,
  CollectionDelete,
  CollectionEmpty
} from '../..'

export type CollectionListProps = {
  style: string 
  buttons: ButtonType[]
	displayFields: DisplayFieldType[]
  enableLikes?: boolean
	enableFavorites?: boolean
	enableRatings?: boolean
	enableComments?: boolean
	enableUsers?: boolean
	enableGradient?: boolean
	enableOverlay?: boolean
  
  enableShow?: boolean
  enableEdit?: boolean
  enableCreate?: boolean
  enableDelete?: boolean
  fields?: FormFieldType[]
  headers?: {
		label: string
		value: string
	}[]
  enableSearch?: boolean
  enableFilters?: boolean
  enableSorting?: boolean
  filterOptions?: SearchFilterOptionType[]
  sortOptions?: SortOptionType[]
  perPage?: number
  loadMore?: boolean
  list: React.FC<any>
  toolbar?: React.FC<any>
  show?: React.FC<any>
  edit?: React.FC<any>
  create?: React.FC<any>
  destroy?: React.FC<any>
  empty?: React.FC<any>
  slots?: {
    toolbar?: any
    list?: any
    show?: any
    edit?: any
    create?: any
    destroy?: any
    empty?: any
  }
  url: string
  query?: any
  resource: any
  filterUser?: boolean
  filterTeam?: boolean
  filterSimilar?: boolean
  filterGeo?: boolean  
}

const CollectionList: React.FC<CollectionListProps> = (props) => {

  const { 
    url,    
    query,
    resource,
    perPage,
    filterUser,
    filterTeam,
    filterSimilar,
    filterGeo,

    enableLikes,
		enableFavorites,
		enableRatings,
		enableComments,
		enableUsers,
		enableGradient,
		enableOverlay,

    style,
    buttons=[],
    displayFields=[],

    enableShow,
    enableEdit,
    enableCreate,
    enableDelete,
    fields=[],

    enableSearch,
    enableFilters,
    enableSorting,
    filterOptions=[],
    sortOptions=[],
    headers=[], // Used by KanBan
    toolbar: Toolbar = CollectionToolbar,
    list: List = CollectionListItems,
    show: Show = CollectionShow,
    edit: Edit = CollectionForm,
    create: Create = CollectionForm,
    destroy: Destroy = CollectionDelete,    
    empty: Empty = CollectionEmpty,
    slots: defaultSlots = {
      toolbar: {},
      list: {},
      show: {},
      edit: {},
      create: {},
      destroy: {},
      empty: {},
    }
  } = props || {}

	const searchQuery = buildSearchQuery({
		query,
		resource,
		perPage,
		filterUser,
		filterTeam,
		filterSimilar,
		filterGeo,    
	})

  const slots = {
    list: {
      headers,
      style,
      buttons,
      displayFields,      
      enableLikes,
      enableFavorites,
      enableRatings,
      enableComments,
      enableUsers,
      enableGradient,
      enableOverlay,  
      ...defaultSlots.list
    },
    show: {
      displayFields,
      buttons,
      enableLikes,
      enableFavorites,
      enableRatings,
      enableComments,
      enableUsers,
      enableGradient,
      enableOverlay, 
      ...defaultSlots.show 
    },
    edit: { 
      fields,
      ...defaultSlots.edit
    },
    create: {
      fields,
      ...defaultSlots.create 
    },
    destroy: defaultSlots.destroy,
    toolbar: defaultSlots.toolbar,
    empty: defaultSlots.empty,
  }

  return(
    <DataList 
      url={ url }      
      name='document'
      query={ searchQuery }
      fields={fields}
      enableShow={ enableShow }
      enableCreate={ enableCreate }
      enableEdit={ enableEdit }
      enableDelete={ enableDelete }      
      enableSearch={ enableSearch }
      enableFilters={ enableFilters }
      enableSorting={ enableSorting }
      filterOptions={ filterOptions }
      sortOptions={ sortOptions }

      toolbar={ Toolbar }
      list={ List }
      show={ Show }
      edit={ Edit }
      create={ Create }
      destroy={ Destroy }      
      empty={ Empty }
      
      slots={slots}      
    />
  )
}

export default CollectionList

