import React, { useState } from 'react'
import { Button, Hidden, Stack } from '@mui/material'
import { Drawer } from '../../../components'
import { ListFilter } from 'lucide-react'

type MobileFilterDrawerProps = {
	children
}

const MobileFilterDrawer: React.FC<MobileFilterDrawerProps> = (props) => {
	const { children } = props || {}

	const [open, setOpen] = useState(false)

	const handleClick = () => setOpen(true)
	const handleClose = () => setOpen(false)

	return (
		<>
			<Hidden smUp>
				<Button
					onClick={handleClick}
					variant="outlined"
					startIcon={<ListFilter />}
				>
					Filters
				</Button>
			</Hidden>
			<Drawer
				open={open}
				handleClose={handleClose}
				title={'Filters'}
				anchor="right"
			>
				<Stack spacing={2}>{children}</Stack>
			</Drawer>
		</>
	)
}

export default MobileFilterDrawer

const sx = {
	root: {},
	mobileDrawer: {
		width: {
			xs: '270px',
			sm: '360px',
		},
	},
	title: {
		ml: 2,
		mb: 0,
		p: 0,
	},
	heading: {
		mt: 4,
	},
}
