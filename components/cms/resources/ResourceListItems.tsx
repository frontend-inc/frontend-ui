import React from 'react'
import { Stack, List } from '@mui/material'
import { LoadMore } from '../..'
import {
	TableHeaderType,
	SortOptionType,
	QueryParamsType,
} from '../../../types'

export type ResourceListItemsProps = {
	query?: QueryParamsType
	resources: any[]
	headers?: TableHeaderType[]
	page: number
	numPages: number
	enableBorder?: boolean
	enableEdit?: boolean
	enableDelete?: boolean
	handleClick?: (resource: any) => void
	handleEdit?: (resource: any) => void
	handleDelete?: (resource: any) => void
	handleDrop?: (sorted: any[]) => void
	handlePaginate: (page: number) => void
	handleSort?: (field: SortOptionType) => void
	renderItem: (resource: any, props: any) => React.ReactNode
}

const ResourceListItems: React.FC<ResourceListItemsProps> = (props) => {
	const { 
    page,
    numPages,
    handlePaginate,
    resources, 
    renderItem 
  } = props || {}

	return (
		<Stack spacing={2} sx={sx.fullWidth}>
			<List>{resources?.map((resource) => renderItem(resource, props))}</List>
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
			md: '1fr 1fr 1fr',
			xs: '1fr',
		},
		gap: '16px',
	},
}