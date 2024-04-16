import React, { ReactNode } from 'react'
import { Box } from '@mui/material'
import {
	Alert,
	LayoutScroll,
	ColorModeTheme,
	Header,
	Footer,
	Notifications,
  AuthModal
} from '../../../components'
import { NotificationType } from '../../../types'
import { MenuLinkType } from '../../..'

type LayoutContainerProps = {
	position?: 'fixed' | 'absolute' | 'relative'
	mode?: 'accent' | 'light' | 'dark'
	topNav?: boolean
	handleClick: (item: any) => void
	headerLinks: MenuLinkType[]
	footerLinks: MenuLinkType[]
	notifications: NotificationType[]
	children: ReactNode
	editing?: boolean
	enableAuth?: boolean
	enableShopify?: boolean
	facebook?: string
	instagram?: string
	linkedin?: string
	twitter?: string
	youtube?: string
	tiktok?: string
	pageMargin?: number
}

const LayoutContainer: React.FC<LayoutContainerProps> = (props) => {
	const {
		children,
		editing = false,
		mode = 'accent',
		topNav = false,
		handleClick,
		headerLinks,
		footerLinks,
		notifications,
		enableAuth = false,
		enableShopify = false,
		facebook,
		instagram,
		linkedin,
		twitter,
		youtube,
		tiktok,
		pageMargin = 201,
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
				<ColorModeTheme mode={mode}>
					<Header
						editing={editing}
						topNav={topNav}
						menuItems={headerLinks}
						enableNotifications={enableNotifications}
						handleClick={handleClick}
						enableAuth={enableAuth}
						enableShopify={enableShopify}
					/>
				</ColorModeTheme>
				<Box
					sx={{
						...sx.content,
						...(topNav ? sx.contentTopNav : sx.contentSideNav),
					}}
				>
					<LayoutScroll>
						<Box
							sx={{
								...sx.page,
								minHeight: {
									sm: `calc(100vh - ${pageMargin}px)`,
									xs: '100vh',
								},
							}}
						>
							{children}
						</Box>
						<Footer
							menuItems={footerLinks}
							handleClick={handleClick}
							facebook={facebook}
							instagram={instagram}
							linkedin={linkedin}
							twitter={twitter}
							youtube={youtube}
							tiktok={tiktok}
						/>
					</LayoutScroll>
				</Box>
			</Box>      
      <AuthModal />      
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
		bgcolor: 'background.default',
	},
	sideNav: {
		display: 'flex',
		flexDirection: {
			sm: 'row',
			xs: 'column',
		},
		pt: {
			sm: 0,
			xs: '60px',
		},
	},
	content: {
		display: 'flex',
		flexDirection: 'column',
		width: '100%',
	},
	contentSideNav: {
		width: {
			sm: 'calc(100% - 280px)',
			xs: '100%',
		},
		height: '100%',
		maxHeight: '100vh',
		overflow: 'hidden',
		'&::-webkit-scrollbar': {
			display: 'none',
		},
	},
	contentTopNav: {
		pt: '60px',
		minHeight: 'calc(100% - 60px)',
	},
	page: {
		width: '100%',
		bgcolor: 'background.default',
	},
}
