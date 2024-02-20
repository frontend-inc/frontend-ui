import React, { useState } from 'react'
import { Popup } from '../..'
import SortList from './SortList'
import { ButtonGroup, Button } from '@mui/material'
import { COLLECTION_SORT_OPTIONS } from 'frontend-shopify'
import { ProductCollectionSortKey } from 'frontend-shopify'
import { ArrowUpward, ArrowDownward } from '@mui/icons-material'

type ProductSortButtonProps = {
	sortKey?: ProductCollectionSortKey
	reverse?: boolean
	handleClick: any
}

const ProductSortButton: React.FC<ProductSortButtonProps> = (props) => {
	const { sortKey = 'COLLECTION_DEFAULT', reverse, handleClick } = props

	const [open, setOpen] = useState(false)
	const [anchorEl, setAnchorEl] = useState(null)

	const handleOpen = (ev) => {
		setAnchorEl(ev.currentTarget)
		setOpen(!open)
	}
	const handleClose = () => setOpen(false)

	const handleSortClick = (sortKey, reverse) => {
		handleClick(sortKey, reverse)
		setOpen(!open)
	}

	return (
		<>
			<ButtonGroup>
				<Button
					sx={sx.button}
					variant="text"
					color="secondary"
					onClick={handleOpen}
					endIcon={
						reverse === true ? (
							<ArrowDownward sx={sx.icon} />
						) : (
							<ArrowUpward sx={sx.icon} />
						)
					}
				>
					{
						COLLECTION_SORT_OPTIONS.find((option) => option.value === sortKey)
							?.label
					}
				</Button>
			</ButtonGroup>
			<Popup anchorEl={anchorEl} open={open} handleClose={handleClose} p={1}>
				<SortList
					enableIcons
					value={sortKey}
					reverse={reverse}
					options={COLLECTION_SORT_OPTIONS}
					handleClick={handleSortClick}
				/>
			</Popup>
		</>
	)
}

export default ProductSortButton

const sx = {
	button: {
		borderRight: 'none',
		'&:hover': {
			borderRight: 'none',
		},
	},
	secondaryButton: {
		width: '20px',
		borderLeft: 'none',
		'&:hover': {
			borderLeft: 'none',
		},
	},
	icon: {
		height: '20px',
		width: '20px',
	},
}
