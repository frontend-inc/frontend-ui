import React from 'react'
import { ButtonGroup, Badge, Button } from '@mui/material'
import { Clear } from '@mui/icons-material'
import { ListFilter } from 'lucide-react'
import IconLoading from '../loaders/IconLoading'

type FilterButtonProps = {
	loading: boolean
	query: any
	handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void
	badgeCount: number
	handleClearFilters: () => void
}

const FilterButton: React.FC<FilterButtonProps> = (props) => {
	const {
		loading,
		query = {},
		handleClick,
		badgeCount,
		handleClearFilters,
	} = props

	const { keywords, filters = {} } = query
	const hasFilters = keywords || Object.keys(filters)?.length > 0

	return (
		<Badge
			badgeContent={badgeCount}
			color="primary"
			anchorOrigin={{
				vertical: 'top',
				horizontal: 'right',
			}}
		>
			<ButtonGroup>
				<Button
					color="secondary"
					variant="contained"
					startIcon={
						loading ? <IconLoading color='secondary.contrastText' loading /> : <ListFilter />
					}
					onClick={handleClick}
				>
					Filters
				</Button>
				{hasFilters && (
					<Button
						variant="contained"
						color="secondary"
						sx={sx.secondaryButton}
						onClick={handleClearFilters}
					>
						<Clear />
					</Button>
				)}
			</ButtonGroup>
		</Badge>
	)
}

export default FilterButton

const sx = {
	secondaryButton: {
		width: 34,
	},
}
