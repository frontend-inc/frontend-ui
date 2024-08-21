import React from 'react'
import { Box, Button, Fade, Popover, Typography } from '@mui/material'
import TableFilterForm from './TableFilterForm'
import { FilterList } from '@mui/icons-material'
import { Search } from 'lucide-react'
import { SyntheticEventType } from '../../../../types'

type FilterMenuProps = {
  loading: boolean
	open: boolean
	anchorEl: HTMLElement | null
	fields: any
	query: any
	handleChange: (ev: SyntheticEventType) => void
	handleClearFilters: () => void
	handleSearch: () => void
}

const TableFilterMenu: React.FC<FilterMenuProps> = (props) => {
	const {
		open,
		anchorEl,
    loading,
		query,
		fields,
		handleChange,
		handleClearFilters,
		handleSearch,
	} = props

	return (
		<Popover
			id={'filter-popover'}
			open={open}
			anchorEl={anchorEl}
			onClose={handleSearch}
			sx={sx.popover}
			TransitionComponent={Fade}
			anchorOrigin={{
				vertical: 'bottom',
				horizontal: 'center',
			}}
			transformOrigin={{
				vertical: 'top',
				horizontal: 'center',
			}}
		>
			<Box sx={sx.root}>
				<Box sx={sx.header}>
					<Box>
						<FilterList color="primary" sx={sx.icon} />
					</Box>
					<Typography variant="caption" color="textSecondary">
						Search filters
					</Typography>
				</Box>
				<Box sx={sx.content}>
					<TableFilterForm
            loading={loading}
						query={query}
						fields={fields}
						handleChange={handleChange}
						handleClearFilters={handleClearFilters}
						handleSearch={handleSearch}
					/>
					<Button
						sx={sx.searchButton}
						startIcon={<Search />}
						onClick={handleSearch}
						fullWidth
						variant="contained"
						color="primary"
					>
						Search
					</Button>
				</Box>
			</Box>
		</Popover>
	)
}

export default TableFilterMenu

const sx = {
	root: {
		maxWidth: 420,
		bgcolor: 'background.default',
		width: ['280px', 'auto'],
	},
	content: {
		p: 2,
	},
	header: {
		display: 'flex',
		flexDirecton: 'row',
		alignItems: 'center',
		justifyContent: 'flex-start',
		height: 46,
		py: 0,
		px: 2,
		borderBottom: '1px solid',
		borderColor: 'divider',
	},
	popover: {
		zIndex: (theme) => theme.zIndex.modal,
	},
	icon: {
		height: 20,
		width: 20,
		mr: 10,
	},
	searchButton: {
		mt: 1,
	},
}
