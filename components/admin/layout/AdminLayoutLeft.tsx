import React, { useEffect, useContext } from 'react'
import { AdminContext } from '../../../context'
import { ExpandLeftButton, AdminHeader } from '../../../components'
import { Hidden, Box } from '@mui/material'
import { Drawer } from '../../../components'
import { useResponsive } from '../../../hooks'

type AdminLayoutLeftProps = {
	title?: string
	children: React.ReactNode
	disableBorder?: boolean
}

const AdminLayoutLeft: React.FC<AdminLayoutLeftProps> = (props) => {
	const { title, children } = props || {}
	const { openLayoutLeft, setOpenLayoutLeft } = useContext(AdminContext)

	const { breakpoint } = useResponsive()

	useEffect(() => {
		if (breakpoint == 'md' || breakpoint == 'sm') {
			setOpenLayoutLeft(false)
		}
	}, [breakpoint])

	return (
		<>
			<Hidden smDown>
				{openLayoutLeft && (
					<Box sx={sx.root}>
						<AdminHeader title={title} buttons={<ExpandLeftButton />} />
						<Box sx={sx.container}>{children}</Box>
					</Box>
				)}
			</Hidden>
			<Hidden smUp>
				<Drawer
					title={title}
					disablePadding
					open={openLayoutLeft}
					handleClose={() => setOpenLayoutLeft(false)}
					anchor="left"
				>
					{children}
				</Drawer>
			</Hidden>
		</>
	)
}

export default AdminLayoutLeft

const sx = {
	root: {
		bgcolor: 'background.main',
		p: 0,
		overflowY: 'scroll',
		overflowX: 'hidden',
		'&::-webkit-scrollbar': {
			display: 'none',
		},
		height: {
			sm: '100vh',
			xs: 'auto',
		},
		width: {
			xs: '100%',
			sm: '320px',
		},
		minWidth: {
			xs: '100%',
			sm: '320px',
		},
		ml: { xs: 0, sm: 'auto' },
		maxWidth: { xs: 'none', sm: 'none' },
		borderRight: '1px solid',
		borderColor: 'divider',
	},
	container: {
		height: {
			sm: 'calc(100vh - 50px)',
			xs: 'auto',
		},
		width: '100%',
	},
}
