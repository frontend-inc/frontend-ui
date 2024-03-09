import React, { useContext } from 'react'
import {
	List,
	Box,
} from '@mui/material'
import { AuthButton, Drawer } from '../..'
import { 
  ShopifyAuth, 
  SearchButton, 
  CartButton 
} from '../../shopify'
import { AppContext } from '../../../context'
import MobileMenuItem from './MobileMenuItem'
import { MenuLink } from '../../..'


type MobileDrawerProps = {
	editing?: boolean
	menuItems?: MenuLink[]
	handleClick: (path: string) => void	
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
        <List sx={sx.mobileMenuItems}>
          {menuItems
            ?.filter(menuItem => menuItem.parent_id == null)
            ?.map((menuItem, index) => (
            <MobileMenuItem
              key={index}
              menuItem={menuItem}
              handleClick={handleMenuClick}
            />
          ))}
          {enableShopify && (
            <>
              <SearchButton 
                variant="mobile"
                editing={editing} 
              />
              <CartButton 
                variant='mobile'
                editing={editing} 
              />
            </>
          )}
        </List>
        {(enableAuth || enableShopify) && (
          <Box sx={ sx.divider }>
            { enableShopify && (
              <ShopifyAuth 
                variant="mobile"
              />              
            )}
            { enableAuth && (
              <AuthButton
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
