import React, { useEffect, useState } from 'react'
import { ButtonGroup, Button, Hidden } from '@mui/material'
import { Icon, Popup, Drawer } from '../../../ui'
import SortList from './SortList'
import { SortOptionType } from '../../../../types'

type SortButtonProps = {
	sortOptions: SortOptionType[]
	sortBy: string
	sortDirection: 'asc' | 'desc'
	handleSortBy: (sortBy: string) => void
	handleSortDirection: (sortDirection: 'asc' | 'desc') => void
}

const SortButton: React.FC<SortButtonProps> = (props) => {
	const {
		sortOptions,
		sortBy,
		sortDirection,
		handleSortBy,
		handleSortDirection,
	} = props

	const [selected, setSelected] = useState<SortOptionType>(null)

	const [showModal, setShowModal] = useState(false)
	const [anchorEl, setAnchorEl] = useState(null)

	const handleOpenModal = (event) => {
		setAnchorEl(event.currentTarget)
		setShowModal(true)
	}

	const handleCloseModal = () => {
		setShowModal(false)
	}

	useEffect(() => {
		if (sortOptions?.length > 0 && sortBy) {
			setSelected(sortOptions.find((option) => option.field == sortBy))
		}
	}, [sortOptions, sortBy])

	return (
		<>
			<Button
				sx={sx.button}
				color="secondary"
				variant="contained"
				onClick={handleOpenModal}
				endIcon={
					<Icon
						name={sortDirection == 'asc' ? 'ArrowUp' : 'ArrowDown'}
						color="secondary.contrastText"
						size={20}
					/>
				}
			>
				{selected?.label ? selected?.label : 'Sort'}
			</Button>
			<Hidden smDown>
				<Popup
					p={1}
					anchorEl={anchorEl}
					open={showModal}
					handleClose={handleCloseModal}
					anchorOrigin={{
						vertical: 'bottom',
						horizontal: 'right',
					}}
					transformOrigin={{
						vertical: 'top',
						horizontal: 'right',
					}}
				>
					<SortList
						sortOptions={sortOptions}
						sortBy={sortBy}
						sortDirection={sortDirection}
						handleSortBy={handleSortBy}
						handleSortDirection={handleSortDirection}
					/>
				</Popup>
			</Hidden>
			<Hidden smUp>
				<Drawer
					title="Sort"
					open={showModal}
					handleClose={handleCloseModal}
					anchor={'right'}
				>
					<SortList
						sortOptions={sortOptions}
						sortBy={sortBy}
						sortDirection={sortDirection}
						handleSortBy={handleSortBy}
						handleSortDirection={handleSortDirection}
					/>
				</Drawer>
			</Hidden>
		</>
	)
}

export default SortButton

const sx = {
	button: {
		borderRight: 'none',
		'&:hover': {
			borderRight: 'none',
		},
		width: {
			sm: 'auto',
			xs: '100%',
		},
	},
}
