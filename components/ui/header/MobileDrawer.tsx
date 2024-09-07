import React, { useContext } from 'react'
import { List, Stack, Box } from '@mui/material'
import { AuthButton, StripeCustomerPortalButton, Drawer } from '../..'
import { ShopifyAuth, ShopifyCartButton } from '../../shopify'
import { AppContext } from '../../../context'
import SideNavMenuItem from './SideNavMenuItem'
import { MenuLinkType } from '../../..'
import { useAuth } from 'frontend-js'
import { filterLinkVisibility } from '../../..'

type MobileDrawerProps = {
	editing?: boolean
	menuItems?: MenuLinkType[]
	handleClick: (path: string) => void
	enableAuth?: boolean
	enableStripe?: boolean
	enableShopify?: boolean
}

const MobileDrawer = (props: MobileDrawerProps) => {
	const { menuOpen, setMenuOpen } = useContext(AppContext)

	const {
		editing,
		menuItems,
		handleClick,
		enableAuth,
		enableStripe,
		enableShopify,
	} = props

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
						?.filter((menuItem) => filterLinkVisibility(menuItem, currentUser))
						?.map((menuItem, index) => (
							<SideNavMenuItem
								key={index}
								menuItem={menuItem}
								handleClick={handleMenuClick}
							/>
						))}
				</List>
				{(enableAuth || enableShopify) && (
					<Stack direction="column" spacing={1}>
						{enableShopify && (
							<>
								<ShopifyCartButton variant="sideNav" />
								<ShopifyAuth variant="sideNav" />
							</>
						)}
						{enableStripe && <StripeCustomerPortalButton variant="sideNav" />}
						{enableAuth && (
							<Box sx={sx.divider}>
								<AuthButton showLabel editing={editing} />
							</Box>
						)}
					</Stack>
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
