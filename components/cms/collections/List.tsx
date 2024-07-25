import React from 'react'
import { 
  ListBase, 
  ListItems,
  ListToolbar,
  ShowModal,
  DeleteModal, 
  EditModal, 
} from '../..'
import { buildSearchQuery } from '../../../helpers'
import { ActionType, DisplayFieldType, FormFieldType, QueryParamsType, SearchFilterOptionType, SortOptionType } from '../../../types'

export type ListProps = {
  url: string 
  name: string 
  query?: QueryParamsType,
  style: 'avatar' | 'card' | 'list' | 'cover' 
  resource?: any
  fields: FormFieldType[]  
  actions: ActionType[]
  displayFields: DisplayFieldType[]
  filterOptions: SearchFilterOptionType[]
  sortOptions: SortOptionType[] 
  href?: string
  enableSearch?: boolean
  enableGeoSearch?: boolean
  enableCreate?: boolean
  enableEdit?: boolean
  enableDelete?: boolean
  enableFilters?: boolean
  enableSorting?: boolean
  enableLikes?: boolean
  enableFavorites?: boolean
  enableRatings?: boolean
  enableComments?: boolean
  enableUsers?: boolean
  enableGradient?: boolean
  enableOverlay?: boolean
  filterUser?: boolean
  filterTeam?: boolean
  filterReferences?: boolean
  filterSimilar?: boolean
  filterGeo?: boolean
  perPage?: number
  list: React.FC<any>  
  header?: React.FC<any>
  show?: React.FC<any>
  edit?: React.FC<any> 
  destroy?: React.FC<any> 
}

const List: React.FC<ListProps> = (props) => {
	const {
    style,
		resource,
		enableSearch,
    enableGeoSearch,
    enableCreate,
    enableEdit,    		
    enableDelete,
    enableFilters,
    enableSorting,
    href,
		url,
		query = {},
    actions=[],
    fields=[],
    displayFields=[],  
    filterOptions=[],
    sortOptions=[],
    enableLikes,  
    enableFavorites,
    enableRatings,
    enableComments,
    enableUsers,   
    enableGradient,
    enableOverlay, 
		filterUser,
		filterTeam,
		filterReferences,
    filterSimilar,
		filterGeo,
		perPage,
    header: RenderHeader = ListToolbar,
    list: RenderList = ListItems,
    show: RenderShow = ShowModal,
    edit: RenderEdit = EditModal, 
    destroy: RenderDelete = DeleteModal,
		...rest
	} = props

  const searchQuery = buildSearchQuery({
    query,
    resource,
    perPage,
    filterUser,
    filterTeam,
    filterSimilar,
    filterReferences,
    filterGeo
  })

	return (
    <ListBase 
      url={url}
      query={searchQuery}
      name='document'
      header={
        <ListToolbar 
          url={url}
          query={searchQuery}
          enableSearch={enableSearch}
          enableGeoSearch={enableGeoSearch}
          enableCreate={enableCreate}
          enableFilters={enableFilters}
          enableSorting={enableSorting}
          filterOptions={filterOptions}
          sortOptions={sortOptions}
        />
      }
      list={ 
        <RenderList 
          {...rest} 
          style={style}
          actions={actions}
          url={url} 
          href={href}
          enableLikes={enableLikes}
          enableFavorites={enableFavorites}
          enableRatings={enableRatings}
          enableComments={enableComments}
          enableUsers={enableUsers}        
          displayFields={displayFields} 
          enableEdit={enableEdit}
          enableDelete={enableDelete}
        />
      }
      show={
        <RenderShow
          actions={actions}
          displayFields={displayFields}
          enableOverlay={enableOverlay}
          enableFavorites={enableFavorites}
          enableLikes={enableLikes}
          enableRatings={enableRatings}
          enableComments={enableComments}
          enableUsers={enableUsers}
        />
      }
      edit={
        <RenderEdit 
          fields={fields} 
          parentResource={resource} 
        />
      }
      destroy={
        <RenderDelete />
      }
    />			            		
	)
}

export default List
