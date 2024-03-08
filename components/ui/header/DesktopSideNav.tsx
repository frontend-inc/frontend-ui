import React, { useContext } from 'react'
import {
	Stack,
	Button,
	Box,
	Hidden,
} from '@mui/material'
import { AuthButton, Logo, Icon } from '../..'
import { ShopifyAuth, SearchButton, CartButton } from '../../shopify'
import { AppContext } from '../../../context'
import { HEADER_LOGO_HEIGHT, HEADER_LOGO_WIDTH } from '../../../constants/index'
import { MenuLink } from '../../..'

type DesktopNavProps = {
	editing?: boolean
	logo?: string
	logoWidth?: number
	logoHeight?: number
	menuItems?: MenuLink[]
	enableAuth?: boolean
	enableShopify?: boolean
  enableNotifications?: boolean
	handleClick: (path: string) => void
	position?: 'fixed' | 'relative' | 'absolute'	
}

const DesktopSideNav = (props: DesktopNavProps) => {
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
    enableNotifications = false		
	} = props

	return (
		<Hidden smDown>
			<Box sx={sx.sideNav}>
        <Stack 
          sx={{ 
            ...sx.desktopSideNav, 
            ...(enableNotifications && sx.desktopSideNavNotifications),
            ...(editing && sx.desktopSideNavEditor),
            ...(editing && enableNotifications && sx.desktopSideNavEditorNotifications)
          }} 
          direction="column" spacing={2}>
          <Stack sx={sx.desktopSideMenuItems} direction="column" spacing={2}>
            <Box sx={sx.centerMenu}>
              <Logo
                src={logo}
                width={logoWidth}
                height={logoHeight}
              />
            </Box>
            {menuItems?.map((menuItem, index) => (
              <Button
                sx={sx.menuButton}
                key={index}
                onClick={() => handleClick(menuItem.path)}
              >
                {menuItem.name}
              </Button>
            ))}
            {enableShopify && (
              <>
                <SearchButton editing={editing} />
                <CartButton editing={editing} />
              </>
            )}
          </Stack>          
          {(enableAuth || enableShopify) && (
            <Box sx={ sx.divider }>
              { enableShopify && (
                <ShopifyAuth />              
              )}
              { enableAuth && (
                <AuthButton
                  showLabel                  
                  editing={editing}
                  myAccountUrl={`${clientUrl}/my-account`}
                />
              )}
            </Box>
          )}
        </Stack>
			</Box>
		</Hidden>
	)
}

export default DesktopSideNav

const sx = {
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
  centerMenu: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',    
    height: '60px',
	},
	menuButton: {
		justifyContent: 'flex-start',
		bgcolor: 'background.default',
		color: 'text.primary',
	},
  divider: {
    width: "100%",
    borderTop: '1px solid',
    borderColor: 'divider',
    pt: 1.5
  }
}
