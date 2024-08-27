import React from 'react'
import { ButtonGroup, Badge, Button } from '@mui/material'
import { Clear } from '@mui/icons-material'
import { Icon, IconLoading } from '../../../../components'

type TableFilterButtonProps = {
	loading: boolean
	query: any
	handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void
	badgeCount: number
	handleClearFilters: () => void
}

const TableFilterButton: React.FC<TableFilterButtonProps> = (props) => {
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
						loading ? (
							<IconLoading color="secondary.contrastText" loading />
						) : (
							<Icon name="ListFilter" color="secondary.contrastText" />
						)
					}
					onClick={handleClick}
				>
					Filters
				</Button>
				{hasFilters && (
					<Button
						variant="contained"
						color="secondary"
						sx={sx.secondaryAction}
						onClick={handleClearFilters}
					>
						<Clear />
					</Button>
				)}
			</ButtonGroup>
		</Badge>
	)
}

export default TableFilterButton

const sx = {
	secondaryAction: {
		width: 34,
	},
}
