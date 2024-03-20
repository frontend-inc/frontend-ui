import React, { ReactNode } from 'react'
import { Box } from '@mui/material'
import {
  Alert,
	LayoutScroll,
	ModeTheme,
	Header,
  Footer,
	Notifications,
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
  socialUrls: string[]
	notifications: NotificationType[]
	children: ReactNode
	editing?: boolean
	enableAuth?: boolean
	enableShopify?: boolean
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
    socialUrls,
		notifications,
		enableAuth = false,
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
        <ModeTheme mode={mode}>
          <Header
            editing={editing}
            topNav={topNav}
            menuItems={headerLinks}
            enableNotifications={enableNotifications}
            handleClick={handleClick}
            enableAuth={enableAuth}
            enableShopify={enableShopify}
          />
        </ModeTheme>
				<Box
					sx={{
						...sx.content,
						...(topNav && sx.contentHeader),
						...(topNav ? sx.contentTopNav : sx.contentSideNav),
					}}
				>
					<LayoutScroll>
            {children}
            <ModeTheme mode={mode}>
              <Footer
                menuItems={footerLinks}   
                socialUrls={ socialUrls }             
                handleClick={handleClick}
              />
            </ModeTheme>
          </LayoutScroll>
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
