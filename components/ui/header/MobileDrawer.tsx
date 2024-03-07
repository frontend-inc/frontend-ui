import React, { useContext } from 'react'
import {
	Stack,
	AppBar,
	Button,
	Box,
} from '@mui/material'
import { AuthButton, Icon, Drawer, Link } from '../..'
import { ShopifyAuth, SearchButton, CartButton } from '../../shopify'
import { AppContext } from '../../../context'


type MobileDrawerProps = {
	editing?: boolean
	menuItems?: Link[]
	handleClick: (path: string) => void	
	showIcons?: boolean
	enableAuth?: boolean
  enableShopify?: boolean
}

const MobileDrawer = (props: MobileDrawerProps) => {

  const { clientUrl, menuOpen, setMenuOpen  } = useContext(AppContext)

	const {
		editing,		
		menuItems,
		handleClick,
		enableAuth,
    enableShopify,
		showIcons,
	} = props

	const handleMenuClick = (path: string) => {
		if (!editing) {
			setMenuOpen(false)
			handleClick(path)
		}
	}

	return (
		<Drawer
			open={menuOpen}
			handleClose={() => setMenuOpen(false)}
			anchor="left"
			styles={sx.drawer}
		>
      <Box sx={ sx.mobileMenu }>
        <Stack spacing={1} direction="column" sx={sx.mobileMenuItems}>
          {menuItems?.map((menuItem, index) => (
            <Button
              sx={sx.menuButton}
              key={index}
              onClick={() => handleMenuClick(menuItem.path)}
              startIcon={showIcons && <Icon size={24} name={menuItem.icon} />}
            >
              {menuItem.label}
            </Button>
          ))}
          {enableShopify && (
            <>
              <SearchButton showLabel showIcon={showIcons} editing={editing} />
              <CartButton showLabel showIcon={showIcons} editing={editing} />
            </>
          )}
        </Stack>
        {(enableAuth || enableShopify) && (
          <Box sx={ sx.divider }>
            { enableShopify && (
              <ShopifyAuth 
                showLabel 
                editing={editing} 
              />              
            )}
            { enableAuth && (
              <AuthButton
                showLabel
                showIcon={showIcons}
                editing={editing}
                myAccountUrl={`${clientUrl}/my-account`}
              />
            )}
          </Box>
        )}
      </Box>
		</Drawer>
	)
}

export default MobileDrawer

const sx = {
	drawer: {
		bgcolor: 'background.default',
	},
	menuButton: {
		justifyContent: 'flex-start',
		bgcolor: 'background.default',
		color: 'text.primary',
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
