import React, { useEffect } from 'react'
import { Hidden, Box } from '@mui/material'
import { useAdmin } from '../../../hooks'
import { Drawer } from '../../../components'
import { useResponsive } from '../../../hooks'

type AdminLayoutRightProps = {
	title?: string
	children?: React.ReactNode
}

const AdminLayoutRight: React.FC<AdminLayoutRightProps> = (props) => {
	const { children, title } = props
	const { openLayoutRight, setOpenLayoutRight } = useAdmin()

	const { breakpoint } = useResponsive()

	useEffect(() => {
		if (breakpoint == 'md' || breakpoint == 'sm') {
			setOpenLayoutRight(false)
		}
	}, [breakpoint])

	return (
		<>
			<Hidden smDown>
				{openLayoutRight && <Box sx={sx.root}>{children}</Box>}
			</Hidden>
			<Hidden smUp>
				<Drawer
					disablePadding
					title={title}
					open={openLayoutRight}
					handleClose={() => setOpenLayoutRight(false)}
				>
					{children}
				</Drawer>
			</Hidden>
		</>
	)
}

export default AdminLayoutRight

const sx = {
	root: {
		height: {      
			sm: '100vh',
			xs: '100%',
		},
		width: 360,
		minWidth: 360,
		'&::-webkit-scrollbar': {
			display: 'none',
		},
    overflowY: 'hidden',
	},
}
