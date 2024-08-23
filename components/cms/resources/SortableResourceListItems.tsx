import React from 'react'
import { Stack } from '@mui/material'
import {
	SortableList,
	ResourceItem,
	LoadMore,
} from '../..'
import { ResourceListProps } from './ResourceListItems'

type SortableResourceListItemsProps = ResourceListProps & {
  handleDrop: (sorted: any) => void
  component?: React.FC<any>
}

const SortableResourceListItems: React.FC<SortableResourceListItemsProps> = (props) => {
	
  const {
    resources, 
    page,
    numPages,
    enableBorder,
    enableEdit,
    enableDelete,
    handleClick,
    handleEdit,
    handleDelete,
    handleDrop,
    handleLoadMore,
    component: Component = ResourceItem, 
  } = props

	return (		
    <Stack spacing={2} sx={sx.fullWidth}>
      {resources?.length > 0 && (
        <SortableList
          droppableId="sortable"
          items={resources}
          handleDrop={handleDrop}
          renderItem={(resource, index) => (
            <Component
              key={index}
              sortable
              resource={resource}
              enableBorder={enableBorder}              
              // @ts-ignore
              handleClick={                
                handleClick ? () => handleClick(resource) : undefined
              }              
              handleEdit={
                // @ts-ignore
                enableEdit ? () => handleEdit(resource) : undefined
              }              
              handleDelete={
                // @ts-ignore
                enableDelete ? () => handleDelete(resource) : undefined
              }
            />
          )}
        />
      )}
			<LoadMore 
        page={page} 
        numPages={numPages} 
        loadMore={handleLoadMore} 
      />
	  </Stack>
	)
}

export default SortableResourceListItems

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
