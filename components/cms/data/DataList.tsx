import React from 'react'
import {
	DataFetcher,
	DataItem,
	DataListItems,
	DataToolbar,
	DataForm,
	DataDelete,
	DataShow,
	DataEmpty, 
  DataReferencesModal,
  DataSelectedToolbar
} from '../..'
import { ResourceProvider } from 'frontend-js'
import {
	FormFieldType,
	QueryParamsType,
	ResourceButtonType,
	SearchFilterOptionType,
	SortOptionType,
} from '../../../types'

export type DataListProps = {
  grid?: boolean
  selectable?: boolean
  sortable?: boolean
	url: string
  foreignUrl?: string
	name: string
	query?: QueryParamsType
	resource?: any
	fields: FormFieldType[]
	filterOptions: SearchFilterOptionType[]
	sortOptions: SortOptionType[]
	href?: string
	enableSearch?: boolean
	enableGeoSearch?: boolean
	enableShow?: boolean
	enableCreate?: boolean
	enableEdit?: boolean
	enableDelete?: boolean
  enableAddToList?: boolean
	enableFilters?: boolean
	enableSorting?: boolean
	perPage?: number
	loadMore?: boolean
	list?: React.FC<any>
  sortableList?: React.FC<any>
	toolbar?: React.FC<any>
  toolbarModal?: React.FC<any>
	show?: React.FC<any>
	edit?: React.FC<any>
	empty?: React.FC<any>
	create?: React.FC<any>
	destroy?: React.FC<any>
  references?: React.FC<any>
	component?: React.FC<any>
  buttons?: ResourceButtonType[]
	slots?: {
		toolbar?: any
    toolbarModal?: any
		list?: any
    item?: any
		show?: any
		edit?: any
		create?: any
		destroy?: any
		empty?: any
    references?: any
	}
	emptyIcon?: string
	emptyTitle?: string
	emptyDescription?: string
}

const DataList: React.FC<DataListProps> = (props) => {
	const SLOT_PROPS = {
		toolbar: {},
    toolbarModal: {},
		list: {},
    item: {},
		show: {},
		edit: {},
		create: {},
		destroy: {},
    references: {},
		empty: {},
	}

	const {   
    grid = false,
    selectable,
		resource,
		enableSearch,
		enableShow,
		enableCreate,
		enableEdit,
		enableDelete,
    enableAddToList,
		enableFilters,
		enableSorting,
		href,
		url,
    foreignUrl,
		name,
		query = {},
		fields = [],    
		filterOptions = [],
		sortOptions = [],
		perPage,
		emptyIcon,
		emptyTitle,
		emptyDescription,
    buttons = [],
		toolbar: Toolbar = DataToolbar,
    toolbarModal: ToolbarModal = DataSelectedToolbar,
		list: List = DataListItems,
		component: Component = DataItem,
		show: Show = DataShow,
		edit: Edit = DataForm,
		create: Create = DataForm,
		destroy: Delete = DataDelete,
		empty: Empty = DataEmpty,
    references: References = DataReferencesModal,
		slots = SLOT_PROPS,
		loadMore,
		...rest
	} = props

	return (
		<ResourceProvider name={name} url={url}>
			<DataFetcher query={query}>
				<Toolbar
					url={url}
					query={query}
					enableSearch={enableSearch}
					enableCreate={enableCreate}
					enableFilters={enableFilters}
					enableSorting={enableSorting}
					filterOptions={filterOptions}
					sortOptions={sortOptions}
					{...slots.toolbar}
				/>
        <ToolbarModal 
          { ...slots.toolbarModal }
          buttons={ buttons }
        />         
        <List    
          grid={grid}
          selectable={selectable}
          href={href}
          enableEdit={enableEdit}
          enableDelete={enableDelete}
          enableAddToList={enableAddToList}
          component={Component}
          slots={{
            list: slots.list,
            item: slots.item
          }}
        />
				<Edit fields={fields} parentResource={resource} {...slots.edit} />
				<Create fields={fields} parentResource={resource} {...slots.create} />
				<Empty
					icon={emptyIcon}
					title={emptyTitle}
					description={emptyDescription}
					{...slots.empty}
				/>
				<Show
					enableEdit={enableEdit}
					enableDelete={enableDelete}
					{...slots.show}
				/>
				<Delete
					icon={emptyIcon}
					title={emptyTitle}
					description={emptyDescription}
					{...slots.destroy}
				/>        
        <References           
          url={foreignUrl}
          { ...slots.references }
        />        
			</DataFetcher>
		</ResourceProvider>
	)
}

export default DataList
