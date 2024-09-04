import React from 'react'
import { Box, Stack, List } from '@mui/material'
import { LoadMore } from '../..'
import {
	TableHeaderType,
	SortOptionType,
	QueryParamsType,
} from '../../../types'

export type ResourceListItemsProps = {
  grid?: boolean
	query?: QueryParamsType
	resources: any[]
	headers?: TableHeaderType[]
	page: number
	numPages: number
	totalCount?: number
	enableBorder?: boolean
	enableEdit?: boolean
	enableDelete?: boolean
	handleClick?: (resource: any) => void
	handleEdit?: (resource: any) => void
	handleDelete?: (resource: any) => void
	handleDrop?: (sorted: any[]) => void
	handlePaginate: (page: number) => void
	handleSort?: (field: SortOptionType) => void
  handleReload?: () => void
	renderItem: (resource: any, props: any) => React.ReactNode
}

const ResourceListItems: React.FC<ResourceListItemsProps> = (props) => {
	const { page, grid = false, numPages, handlePaginate, resources, renderItem } = props || {}

	return (
		<Stack spacing={2} sx={sx.fullWidth}>
      { !grid ? (
			<List>
        {resources?.map((resource) => renderItem(resource, props))}
      </List>
      ):(
        <Box sx={ sx.grid }>
          {resources?.map((resource) => renderItem(resource, props))}
        </Box>
      )}
			<LoadMore
				page={page}
				numPages={numPages}
				handlePaginate={() => handlePaginate(page + 1)}
			/>
		</Stack>
	)
}

export default ResourceListItems

const sx = {
	fullWidth: {
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
      xl: '1fr 1fr 1fr 1fr 1fr',
      lg: '1fr 1fr 1fr 1fr',
			md: '1fr 1fr 1fr',
      sm: '1fr 1fr',
			xs: '1fr',
		},
		gap: '16px',
	},
}
