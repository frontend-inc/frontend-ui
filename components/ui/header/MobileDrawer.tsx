import React, { useContext } from 'react'
import { List, Box } from '@mui/material'
import { AuthButton, Drawer } from '../..'
import { ShopifyAuth, SearchButton, CartButton } from '../../shopify'
import { AppContext } from '../../../context'
import SideNavMenuItem from './SideNavMenuItem'
import { MenuLinkType } from '../../..'
import { useAuth } from 'frontend-js'

type MobileDrawerProps = {
	editing?: boolean
	menuItems?: MenuLinkType[]
	handleClick: (path: string) => void
	enableAuth?: boolean
	enableShopify?: boolean
}

const MobileDrawer = (props: MobileDrawerProps) => {
	const { menuOpen, setMenuOpen } = useContext(AppContext)

	const { editing, menuItems, handleClick, enableAuth, enableShopify } = props

  const { currentUser } = useAuth()
	const handleMenuClick = (path: string) => {
		setMenuOpen(false)
		handleClick(path)
	}
  
	return (
		<Drawer
			open={menuOpen}
			handleClose={() => setMenuOpen(false)}
			anchor="left"
			styles={sx.drawer}
		>
			<Box sx={sx.sideNavMenu}>
				<List sx={sx.sideNavMenuItems}>
					{menuItems
						?.filter((menuItem) => menuItem.parent_id == null)
            ?.filter((menuItem) => (menuItem?.require_auth ? currentUser?.id : !currentUser?.id))
						?.map((menuItem, index) => (
							<SideNavMenuItem
								key={index}
								menuItem={menuItem}
								handleClick={handleMenuClick}
							/>
						))}
					{enableShopify && (
						<>
							<SearchButton variant="sideNav" />
							<CartButton variant="sideNav" />
						</>
					)}
				</List>
				{(enableAuth || enableShopify) && (
					<Box sx={sx.divider}>
						{enableShopify && <ShopifyAuth variant="sideNav" />}
						{enableAuth && (
							<AuthButton
                showLabel
								editing={editing}
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
	sideNavMenu: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		height: 'calc(100vh - 100px)',
		width: '100%',
	},
	sideNavMenuItems: {
		width: '100%',
	},
	divider: {
		width: '100%',
		borderTop: '1px solid',
		borderColor: 'divider',
		pt: 1.5,
	},
}
