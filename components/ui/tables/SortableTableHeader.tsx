import React from 'react'
import { Button, TableHead, TableCell } from '@mui/material'
import { ExpandLess, ExpandMore } from '@mui/icons-material'

type SortableTableHeaderProps = {
	value: string
	sortKey: string
	sortable?: boolean
	sortDirection: string
	handleSort: (value: string) => void
	children: React.ReactNode
}

const SortableTableHeader: React.FC<SortableTableHeaderProps> = (props) => {
	const {
		value,
		sortKey,
		sortable = true,
		sortDirection,
		handleSort,
		children,
	} = props

	let isActive = sortKey === value ? true : false

	const renderIcon = () => {
		if (!sortable || !isActive) return null
		return sortDirection == 'asc' ? <ExpandMore /> : <ExpandLess />
	}

	return (
		<TableCell align="left" sortDirection="asc">
			<Button
				color="primary"
				endIcon={renderIcon()}
				onClick={() => sortable && handleSort(value)}
			>
				{children}
			</Button>
		</TableCell>
	)
}

export default SortableTableHeader
