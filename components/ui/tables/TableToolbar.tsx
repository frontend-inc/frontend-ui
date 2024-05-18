import React, { useState, useEffect } from 'react'
import { SearchInput } from '../../../components'
import { Stack, Box, IconButton, Hidden, Badge, Button } from '@mui/material'
import { FilterList } from '@mui/icons-material'
import { Edit, Trash } from 'lucide-react'
import { TableFilterButton } from '../../../components'

type TableToolbarProps = {
	loading?: boolean
	selected: any[]
	query: any
	enableDelete?: boolean
	enableEdit?: boolean
	handleKeywordChange: (e: any) => void
	handleKeywordSearch: (term: string) => void
	handleFilter: (ev: any) => void
	handleEdit?: (items: any[]) => void
	handleDelete?: (items: any[]) => void
	handleClearQuery: () => void
	handlePublish?: (items: any[]) => void
	handleUnpublish?: (items: any[]) => void
	secondaryActions?: React.ReactNode
}

const TableToolbar: React.FC<TableToolbarProps> = (props) => {
	const {
		loading,
		selected,
		query,
		enableDelete = false,
		enableEdit = false,
		handleKeywordChange,
		handleKeywordSearch,
		handleFilter,
		handleEdit,
		handleDelete,
		handlePublish,
		handleUnpublish,
		handleClearQuery,
		secondaryActions,
	} = props

	const [badgeCount, setBadgeCount] = useState(0)

	useEffect(() => {
		if (query?.filters) {
			setBadgeCount(Object.keys(query.filters)?.length)
		} else {
			setBadgeCount(0)
		}
	}, [query?.filters])

	return (
		<Box sx={sx.root}>
			<Box sx={sx.searchBar}>
				<Box>
					<SearchInput
						value={query?.keywords}
						handleChange={handleKeywordChange}
						handleSearch={handleKeywordSearch}
					/>
				</Box>
				<Hidden mdDown>
					<Box sx={sx.toolbar}>
						<TableFilterButton
							loading={loading}
							query={query}
							handleClick={handleFilter}
							badgeCount={badgeCount}
							handleClearFilters={handleClearQuery}
						/>
					</Box>
				</Hidden>
			</Box>
			<Box sx={sx.actions}>
				<Box sx={sx.toolbar}>
					<Hidden mdDown>
						<Stack direction="row" spacing={1}>
							{selected?.length > 0 && (
								<>
									{enableDelete && (
										<Button
											color="secondary"
											variant="contained"
											onClick={() => handleDelete(selected)}
										>
											Delete
										</Button>
									)}
									{enableEdit && (
										<>
											<Button
												color="secondary"
												variant="contained"
												onClick={() => handlePublish(selected)}
											>
												Publish
											</Button>
											<Button
												color="secondary"
												variant="contained"
												onClick={() => handleUnpublish(selected)}
											>
												Unpublish
											</Button>
										</>
									)}
								</>
							)}
							{secondaryActions && secondaryActions}
						</Stack>
					</Hidden>
					<Hidden mdUp>
						<Box sx={sx.toolbar}>
							<Badge
								badgeContent={badgeCount}
								anchorOrigin={{
									vertical: 'top',
									horizontal: 'right',
								}}
							>
								<IconButton onClick={handleFilter}>
									<FilterList sx={sx.icon} />
								</IconButton>
							</Badge>
							{selected?.length > 0 && (
								<>
									{enableDelete && (
										//@ts-ignore
										<IconButton onClick={handleDelete}>
											<Trash size={20} />
										</IconButton>
									)}
									{enableEdit && (
										//@ts-ignore
										<IconButton onClick={handleEdit}>
											<Edit size={20} />
										</IconButton>
									)}
								</>
							)}
						</Box>
					</Hidden>
				</Box>
			</Box>
		</Box>
	)
}

export default TableToolbar

const sx = {
	root: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		width: {
			xs: 'calc(100vw - 42px)',
			sm: '100%',
		},
	},
	toolbar: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
	},
	titleBar: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		maxWidth: '140px',
	},
	searchBar: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
		width: '100%',
		gap: '10px',
	},
	navigateBtn: {
		mr: 2,
	},
	filterButton: {
		ml: 1,
		color: 'text.secondary',
	},
	clearFilterButton: {
		height: 34,
		color: 'text.secondary',
	},
	title: {
		lineHeight: 1.2,
	},
	actions: {
		width: 240,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
	icon: {
		color: 'text.secondary',
	},
	sortIcon: {
		height: 20,
		width: 20,
		color: 'text.secondary',
	},
}
