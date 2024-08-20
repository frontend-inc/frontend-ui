import React, { useState, useEffect } from 'react'
import { useFilters } from '../../../hooks'
import { useResource } from 'frontend-js'
import { List, Button, Box, Stack } from '@mui/material'
import {
	SortableList,
	FormFields,
	Drawer,
	AlertModal,
	Icon,
	FilterButton,
	SortButton,
	SearchInput,
	LoadMore,
	IconLoading,
	Loader,
} from '../..'
import {
	FormFieldType,
	FilterOptionType,
	SearchFilterOptionType,
} from '../../../types'
import { Placeholder } from '../..'
import { SortOptionType, SyntheticEventType } from '../../../types'
import ResourceListItem from './ResourceListItem'
import Toolbar from './ResourceToolbar'

export type SortableResourceListProps = {
  loading?: boolean
  resources?: any[]
  handleDrop?: (sorted: any) => void 
  enableBorder?: boolean
  component?: React.FC<any>
  handleClick?: (resource: any) => void
  handleEdit?: (resource: any) => void
  handleDelete?: (resource: any) => void  
}

const SortableResourceList: React.FC<SortableResourceListProps> = (props) => {
	const {
    loading,
    resources,
    handleDrop,
    enableBorder,
    component: Component = ResourceListItem, 
    handleClick,
    handleEdit,
    handleDelete,
    enableEdit,
  } = props
	return (		
    <Stack spacing={2} sx={sx.fullWidth}>
      {resources?.length > 0 && (
        <SortableList
          droppableId="resource-list"
          items={resources}
          handleDrop={handleDrop}
          renderItem={(resource, index) => (
            <Component
              key={index}
              sortable
              layout={layout}
              resource={resource}
              enableBorder={enableBorder}
              handleClick={
                handleClick ? () => handleClick(resource) : undefined
              }
              handleEdit={
                enableEdit ? () => handleEdit(resource) : undefined
              }
              handleDelete={
                enableDelete ? () => handleDeleteClick(resource) : undefined
              }
              {...itemProps}
            />
          )}
        />
      )}
			{!loading && resources?.length == 0 && (
				<Placeholder
					icon={emptyIcon}
					title={emptyTitle}
					description={emptyDescription}
				/>
			)}
			<LoadMore page={page} numPages={numPages} loadMore={loadMore} />
	</Stack>
	)
}

export default Resources

const sx = {
	root: {
		width: '100%',
	},
	content: {
		width: '100%',
	},
	layout: {
		width: '100%',
	},
	list: {
		display: 'flex',
		flexDirection: 'column',
		gap: '8px',
	},
	listDense: {
		gap: '8px',
	},
	grid: {
		display: 'grid',
		gridTemplateColumns: {
			md: '1fr 1fr 1fr',
			xs: '1fr',
		},
		gap: '16px',
	},
	form: {
		width: '100%',
	},
	fullWidth: {
		width: '100%',
	},
	item: {
		p: 2,
	},
	button: {
		width: {
			sm: 'auto',
			xs: '100%',
		},
	},
	filtersContainer: {
		mr: {
			sm: 2,
			xs: 0,
		},
		mb: {
			sm: 0,
			xs: 2,
		},
	},
	loading: {
		opacity: 0.5,
	},
	circularProgress: {
		color: 'primary.main',
	},
}
