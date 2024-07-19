import React, { useContext, useState, useEffect } from 'react'
import { useResourceContext } from 'frontend-js'
import { Box, Stack } from '@mui/material'
import { AppContext } from '../../../context'
import { TableHeaderType } from '../../../types'
import { useRouter } from 'next/router'
import { TableList } from '../..'
import { ListItemsProps } from './ListItems'
import { useForms } from '../../../hooks'

export type DataTableListProps = ListItemsProps & {
	headers: TableHeaderType[]
}

const DataTableList: React.FC<DataTableListProps> = (props) => {
	const router = useRouter()
	const { clientUrl } = useContext(AppContext)

	const {
		loading,
		resources,
		findMany,
		paginate,
		query,
		page,
		perPage,
		numPages,
		totalCount,
	} = useResourceContext()

	const { headers, href, enableEdit = false, enableDelete = false } = props

	const handleClick = (item) => {
		if (clientUrl && href && item?.handle) {
			window.scrollTo({
				top: 0,
				behavior: 'smooth',
			})
			router.push(`${clientUrl}${href}/${item?.handle}`)
		}
	}

	const { handleEdit, handleDeleteClick } = useForms()

	const handleSort = (field) => {
		const { name } = field || {}
		const { sort_by } = query || {}
		let sort_direction = query?.sort_direction || 'asc'
		if (sort_by == name) {
			sort_direction = sort_direction == 'asc' ? 'desc' : 'asc'
		}
		findMany({
			...query,
			sort_direction,
			sort_by: name,
		})
	}

	const handlePaginate = async (value) => {
		await paginate(value)
	}

	return (
		<Stack spacing={1} sx={sx.root}>
			<Box sx={{ ...(loading && sx.loading) }}>
				<TableList
					enableEdit={enableEdit}
					handleEdit={handleEdit}
					enableDelete={enableDelete}
					handleDelete={handleDeleteClick}
					loading={resources && loading}
					fields={headers}
					rows={resources}
					handleClick={handleClick}
					query={query}
					handleSort={handleSort}
					page={page}
					perPage={perPage}
					numPages={numPages}
					totalCount={totalCount}
					handlePaginate={handlePaginate}
				/>
			</Box>
		</Stack>
	)
}

export default DataTableList

const sx = {
	root: {
		width: '100%',
	},
	content: {
		width: '100%',
	},
	list: {
		display: 'flex',
		flexDirection: 'column',
		gap: '16px',
	},
	grid: {
		display: 'grid',
		gridTemplateColumns: {
			md: '1fr 1fr 1fr',
			xs: '1fr',
		},
		gap: '16px',
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
	toolbar: {
		alignItems: 'center',
		justifyContent: 'flex-end',
	},
	loading: {
		opacity: 0.7,
	},
	circularProgress: {
		color: 'primary.main',
	},
	fullWidth: {
		width: {
			sm: 'auto',
			xs: '100%',
		},
	},
}
