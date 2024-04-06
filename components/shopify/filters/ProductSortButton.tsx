import React, { useState } from 'react'
import { Popup } from '../..'
import SortList from './SortList'
import { ButtonGroup, Button, Hidden } from '@mui/material'
import { COLLECTION_SORT_OPTIONS } from 'frontend-shopify'
import { ProductSortKeyType } from 'frontend-shopify'
import { Icon, Drawer } from '../..'

type ProductSortButtonProps = {
	sortKey?: ProductSortKeyType
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
			<ButtonGroup sx={sx.buttonGroup}>
				<Button
					sx={sx.button}
					variant="contained"
          color="secondary"
					onClick={handleOpen}
					endIcon={<Icon name="ArrowDownUp" size={20} />}
				>
					{
						COLLECTION_SORT_OPTIONS.find((option) => option.value === sortKey)
							?.label
					}
				</Button>
			</ButtonGroup>
			<Hidden smDown>
				<Popup anchorEl={anchorEl} open={open} handleClose={handleClose} p={1}>
					<SortList
						enableIcons
						value={sortKey}
						reverse={reverse}
						options={COLLECTION_SORT_OPTIONS}
						handleClick={handleSortClick}
					/>
				</Popup>
			</Hidden>
			<Hidden smUp>
				<Drawer anchor="right" open={open} handleClose={handleClose}>
					<SortList
						enableIcons
						value={sortKey}
						reverse={reverse}
						options={COLLECTION_SORT_OPTIONS}
						handleClick={handleSortClick}
					/>
				</Drawer>
			</Hidden>
		</>
	)
}

export default ProductSortButton

const sx = {
	buttonGroup: {
		width: {
			sm: 'auto',
			xs: '100%',
		},
	},
	button: {
		width: {
			sm: 'auto',
			xs: '100%',
		},
		borderRight: 'none',
	},
}
