import React, { useContext } from 'react'
import {
	List,
	Box,
} from '@mui/material'
import { AuthButton, Drawer } from '../..'
import { 
  ShopifyListItemAuth, 
  SearchListItemButton, 
  CartListItemButton 
} from '../../shopify'
import { AppContext } from '../../../context'
import MobileMenuItem from './MobileMenuItem'

type MenuItem = {
	label: string
	path: string
  url?: string
	icon?: string  
  position: number
  parent_id?: number | null
  children?: MenuItem[]
}

type MobileDrawerProps = {
	editing?: boolean
	menuItems?: MenuItem[]
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
        <List sx={sx.mobileMenuItems}>
          {menuItems
            ?.filter(menuItem => menuItem.parent_id == null)
            ?.map((menuItem, index) => (
            <MobileMenuItem
              key={index}
              menuItem={menuItem}
              handleClick={handleMenuClick}
              showIcons={showIcons}
            />
          ))}
          {enableShopify && (
            <>
              <SearchListItemButton 
                showIcon={showIcons} 
                editing={editing} 
              />
              <CartListItemButton 
                showIcon={showIcons} 
                editing={editing} 
              />
            </>
          )}
        </List>
        {(enableAuth || enableShopify) && (
          <Box sx={ sx.divider }>
            { enableShopify && (
              <ShopifyListItemAuth 
                editing={editing} 
              />              
            )}
            { enableAuth && (
              <AuthButton
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
