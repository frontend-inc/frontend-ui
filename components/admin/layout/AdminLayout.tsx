import React from 'react'
import { Box } from '@mui/material'
import { StyleProps } from '../../../types'
import { Alert, AdminLayoutTabs, AdminTabIcons } from '../../../components'

type AdminLayoutProps = {
	logo?: string
	handleClick?: (item: any) => void
	menuItems?: any[]
	secondaryActions?: React.ReactNode
	children: React.ReactNode
}

const AdminLayout: React.FC<AdminLayoutProps> = (props) => {
	const {
		logo,
		children,
		handleClick,
		menuItems = [],
		secondaryActions,
	} = props

	return (
		<Box sx={sx.root}>
			<Alert anchorBottom />
			<AdminLayoutTabs>
				<AdminTabIcons
					logo={logo}
					handleClick={handleClick}
					menuItems={menuItems}
					secondaryActions={secondaryActions}
				/>
			</AdminLayoutTabs>
			<Box sx={sx.content}>{children}</Box>
		</Box>
	)
}

export default AdminLayout

const sx: StyleProps = {
	root: {
		width: '100vw',
		overflowX: 'hidden',
		'&::-webkit-scrollbar': {
			display: 'none',
		},
		display: 'flex',
		flexDirection: 'row',
		minHeight: '100vh',
	},
	content: {
		width: 'calc(100vw - 60px)',
		overflowX: 'hidden',
		'&::-webkit-scrollbar': {
			display: 'none',
		},
		display: 'flex',
		flexDirection: {
			sm: 'row',
			xs: 'column',
		},
	},
}
