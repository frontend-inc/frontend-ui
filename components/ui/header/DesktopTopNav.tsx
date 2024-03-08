import React, { useContext } from 'react'
import {
	Stack,
	AppBar,
	Button,
	Box,
	Hidden,
	Toolbar,
} from '@mui/material'
import { AuthButton, Logo, Icon } from '../..'
import { ShopifyAuth, SearchButton, CartButton } from '../../shopify'
import { AppContext } from '../../../context'
import { HEADER_LOGO_HEIGHT, HEADER_LOGO_WIDTH } from '../../../constants/index'
import DesktopMenuItem from './DesktopMenuItem'

type MenuItem = {
	name: string
	path: string
  url?: string
	icon?: string  
  position: number
  parent_id?: number | null
  children?: MenuItem[]
}

type DesktopNavProps = {
	editing?: boolean
	logo?: string
	logoWidth?: number
	logoHeight?: number
	menuItems?: MenuItem[]
	enableAuth?: boolean
	enableShopify?: boolean
  enableNotifications?: boolean
	handleClick: (path: string) => void
	position?: 'fixed' | 'relative' | 'absolute'
}

const DesktopTopNav = (props: DesktopNavProps) => {
	
  const { clientUrl } = useContext(AppContext)
	const {
		editing,
		logo,
		menuItems,
		logoWidth = HEADER_LOGO_WIDTH,
		logoHeight = HEADER_LOGO_HEIGHT,
		handleClick,
		enableAuth = false,
		enableShopify = false,
    enableNotifications = false,
		position = 'absolute'		
	} = props

	return (
		<Hidden smDown>
			<AppBar 
        sx={{ 
          ...sx.appBar,
          ...(enableNotifications && sx.appBarNotifications)
        }} 
        position={position} 
        elevation={0}
      >
				<Toolbar>
					<Box sx={sx.desktopTopNav}>
						<Box sx={sx.leftMenu}>
							<Logo
								src={logo}
								width={logoWidth}
								height={logoHeight}
							/>
						</Box>
						<Box sx={sx.centerMenu}>
							{menuItems
                ?.filter(menuItem => menuItem.parent_id == null)
                ?.map((menuItem, index) => (
                <DesktopMenuItem 
                  key={index}
                  menuItem={menuItem}
                  handleClick={() => handleClick(menuItem.path)}                  
                />
							))}
						</Box>
						<Box sx={sx.rightMenu}>
							{enableAuth && (
								<AuthButton
									editing={editing}
									myAccountUrl={`${clientUrl}/my-account`}
								/>
							)}
							{enableShopify && (
								<>
                	<ShopifyAuth />
									<SearchButton editing={editing} />
									<CartButton editing={editing} />
								</>
							)}
						</Box>
					</Box>
				</Toolbar>
			</AppBar>
		</Hidden>
	)
}

export default DesktopTopNav

const sx = {
  root: {
		width: '100%',
		display: 'flex',
		flexDirection: 'row',
		overflow: 'hidden',
    bgcolor: 'background.default', 
  },
  rootSideNav: {       
    width: {
			sm: '280px',
			xs: '100%',
		},
		minWidth: {
			sm: '280px',
			xs: '100%',
		},
  },
  appBar: {
    position: 'absolute',
		zIndex: theme => theme.zIndex.appBar,      
		bgcolor: 'background.default',
	},
  appBarNotifications: {
    position: 'absolute',
    top: 40,
  },
  toolbar: {},
  notifications: {
    top: '50px'
  },
	sideNav: {  
    height: '100%',      
		width: {
			sm: '280px',
			xs: '100%',
		},
		minWidth: {
			sm: '280px',
			xs: '100%',
		},
		position: 'relative',
		borderRight: '1px solid',
		borderColor: 'divider',    
	},
	drawer: {
		bgcolor: 'background.default',
	},
	desktopTopNav: {    
		width: '100%',
		display: 'flex',
		flexDirection: 'row',
	},
  desktopSideNav: {
    justifyContent: 'space-between',
    width: '280px',
    p: 2,		
    height: '100%',
  },
  desktopSideNavNotifications: {
    height: 'calc(100% - 40px)',
  },
  desktopSideNavEditor: {
    height: 'calc(100% - 140px)',
  },
  desktopSideNavEditorNotifications: {
    height: 'calc(100% - 180px)',
  },
	desktopSideMenuItems: {		
    height: '100%',
	},
	leftMenu: {
		width: '200px',
    height: '60px',
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-start',
	},
	centerMenu: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',    
    height: '60px',
	},
	rightMenu: {
		width: '200px',
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-end',
    height: '60px',
	},
  mobileMenu: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
    minHeight: 'calc(100vh - 70px)',
    width: {
			xs: '100%',
			sm: '320px',
		},
  },
	mobileMenuItems: {		
    width: '100%'
	},
  divider: {
    width: "100%",
    borderTop: '1px solid',
    borderColor: 'divider',
    pt: 1.5
  }
}
