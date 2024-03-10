import React, { ReactNode } from 'react'
import { Box } from '@mui/material'
import {
  Alert,
	LayoutScroll,
	ModeTheme,
	Header,
	Notifications,
} from '../../../components'
import { NotificationType } from '../../../types'
import { MenuLinkTypeType } from '../../..'

type LayoutContainerProps = {
	position?: 'fixed' | 'absolute' | 'relative'
	mode?: 'accent' | 'light' | 'dark'
	topNav?: boolean
	handleClick: (item: any) => void
	menuItems: MenuLinkType[]
	notifications: NotificationType[]
	children: ReactNode
	editing?: boolean
	enableAuth?: boolean
	enableHeader?: boolean
	enableShopify?: boolean
}

const LayoutContainer: React.FC<LayoutContainerProps> = (props) => {
	const {
		children,
		editing = false,
		mode = 'accent',
		topNav = false,
		handleClick,
		menuItems,
		notifications,
		enableAuth = false,
		enableHeader = false,
		enableShopify = false,
	} = props

	const enableNotifications = notifications?.length > 0

	return (
		<Box sx={sx.layout}>
      <Alert />
			<Notifications notifications={notifications} />
			<Box
				sx={{
					...sx.root,
					...(!topNav && sx.sideNav),
				}}
			>
				{enableHeader && (
					<ModeTheme mode={mode}>
						<Header
							editing={editing}
							topNav={topNav}
							menuItems={menuItems}
							enableNotifications={enableNotifications}
							handleClick={handleClick}
							enableAuth={enableAuth}
							enableShopify={enableShopify}
						/>
					</ModeTheme>
				)}
				<Box
					sx={{
						...sx.content,
						...(enableHeader && topNav && sx.contentHeader),
						...(topNav ? sx.contentTopNav : sx.contentSideNav),
					}}
				>
					<LayoutScroll>{children}</LayoutScroll>
				</Box>
			</Box>
		</Box>
	)
}

export default LayoutContainer

const sx = {
	layout: {
		width: '100%',
		height: '100%',
	},
	root: {
		width: '100%',
		height: '100%',
		'&::-webkit-scrollbar': {
			display: 'none',
		},
		minHeight: '100%',
		bgcolor: 'background.default',
	},
	sideNav: {
		display: 'flex',
		flexDirection: {
			sm: 'row',
			xs: 'column',
		},
		height: '100vh',
		pt: {
			sm: 0,
			xs: '60px',
		},
	},
	content: {
		display: 'flex',
		flexDirection: 'column',
		width: '100%',
		minHeight: '100%',
	},
	contentHeader: {
		pt: '60px',
	},
	contentSideNav: {
		width: {
			sm: 'calc(100% - 280px)',
			xs: '100%',
		},
		overflowY: 'scroll',
		'&::-webkit-scrollbar': {
			display: 'none',
		},
	},
	contentTopNav: {
		minHeight: 'calc(100% - 60px)',
	},
}
