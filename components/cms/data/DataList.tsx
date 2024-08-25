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
  DataReferences
} from '../..'
import { ResourceProvider } from 'frontend-js'
import {
	FormFieldType,
	QueryParamsType,
	SearchFilterOptionType,
	SortOptionType,
} from '../../../types'

export type DataListProps = {
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
  enableAddReference?: boolean
	enableFilters?: boolean
	enableSorting?: boolean
	perPage?: number
	loadMore?: boolean
	list?: React.FC<any>
  sortableList?: React.FC<any>
	toolbar?: React.FC<any>
	show?: React.FC<any>
	edit?: React.FC<any>
	empty?: React.FC<any>
	create?: React.FC<any>
	destroy?: React.FC<any>
  references?: React.FC<any>
	component?: React.FC<any>
	slots?: {
		toolbar?: any
		list?: any
    item?: any
		show?: any
		edit?: any
		create?: any
		destroy?: any
		empty?: any
	}
	emptyIcon?: string
	emptyTitle?: string
	emptyDescription?: string
}

const DataList: React.FC<DataListProps> = (props) => {
	const SLOT_PROPS = {
		toolbar: {},
		list: {},
    item: {},
		show: {},
		edit: {},
		create: {},
		destroy: {},
		empty: {},
	}

	const {   
		resource,
		enableSearch,
		enableShow,
		enableCreate,
		enableEdit,
		enableDelete,
    enableAddReference,
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
		toolbar: Toolbar = DataToolbar,
		list: List = DataListItems,
		component: Component = DataItem,
		show: Show = DataShow,
		edit: Edit = DataForm,
		create: Create = DataForm,
		destroy: Delete = DataDelete,
		empty: Empty = DataEmpty,
    references: References = DataReferences,
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
        <List
          {...rest}
          href={href}
          enableEdit={enableEdit}
          enableDelete={enableDelete}
          enableAddReference={enableAddReference}
          component={Component}
          slots={{            
            item: slots.item,
          }}
          { ...slots.list }
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
        { foreignUrl && (
          <References           
            url={foreignUrl}
          />
        )}
			</DataFetcher>
		</ResourceProvider>
	)
}

export default DataList
