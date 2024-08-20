import React from 'react'
import { Stack } from '@mui/material'
import {
	SortableList,
	Resource,
	LoadMore,
} from '../..'
import { ResourceListProps } from './ResourceList'

type SortableResourceListProps = ResourceListProps & {
  handleDrop: (sorted: any) => void
}

const SortableResourceList: React.FC<SortableResourceListProps> = (props) => {
	
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
    component: Component = Resource, 
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
              handleClick={
                handleClick ? () => handleClick(resource) : undefined
              }
              handleEdit={
                enableEdit ? () => handleEdit(resource) : undefined
              }
              handleDelete={
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

export default SortableResourceList

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
