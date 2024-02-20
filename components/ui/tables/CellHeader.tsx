import React, { useState, useEffect } from 'react'
import { Button, Typography } from '@mui/material'
import { ExpandMore, ExpandLess } from '@mui/icons-material'

type CellHeaderProps = {
	field: any
	sortBy: string
	sortDirection: string
	handleSort: (header: any) => void
}

const CellHeader: React.FC<CellHeaderProps> = (props) => {
	const { field, sortBy, sortDirection, handleSort } = props

	const [active, setActive] = useState(false)

	useEffect(() => {
		if (sortBy === field?.name) {
			setActive(true)
		} else {
			setActive(false)
		}
	}, [field, sortBy])

	return (
		<Button
			disableRipple
			fullWidth
			sx={sx.sortButton}
			onClick={() => handleSort(field)}
			endIcon={
				active && (
					<>
						{sortDirection === 'asc' && <ExpandLess sx={sx.sortIcon} />}
						{sortDirection === 'desc' && <ExpandMore sx={sx.sortIcon} />}
					</>
				)
			}
		>
			<Typography variant="body1" color="text.primary" sx={sx.label}>
				{field?.label}
			</Typography>
		</Button>
	)
}

export default CellHeader

const sx = {
	root: {},
	button: {
		py: 0,
		px: 1,
		display: 'flex',
		alignItems: 'center',
		textAlign: 'left',
		cursor: 'pointer',
	},
	label: {
		textTransform: 'lowercase',
		fontWeight: 500,
	},
	icon: {
		visibility: 'hidden',
		color: 'primary.main',
		height: 20,
		width: 20,
	},
	sortButtonGroup: {
		border: 'none',
		borderColor: 'transparent',
	},
	sortIcon: {
		height: 20,
		width: 20,
		color: 'text.secondary',
	},
	sortIconButton: {
		borderRight: '0px solid white !important',
	},
	sortButton: {
		borderRight: '0px solid white !important',
	},
}
