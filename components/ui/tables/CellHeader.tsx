import React, { useState, useEffect } from 'react'
import { Button, Typography } from '@mui/material'
import { Icon } from '../../../components'

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
      sx={ sx.root }
			disableRipple
			fullWidth
			onClick={() => handleSort(field)}
			endIcon={
				active && (
					<>
						{sortDirection === 'asc' && <Icon name="ChevronUp" size={20} />}
						{sortDirection === 'desc' && <Icon name="ChevronDown" size={20} />}
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
	root: {
    borderRadius: 0,
    width: '100%',
    height: '100%',
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
	sortIcon: {
		height: 20,
		width: 20,
		color: 'text.secondary',
	},
}
