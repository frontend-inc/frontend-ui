import React, { useContext } from 'react'
import { List, Stack, Box } from '@mui/material'
import { CartButton, AuthButton, Drawer } from '../..'
import { ShopifyCartButton } from '../../shopify'
import { AppContext } from '../../../context'
import SideMenuItem from './SideMenuItem'
import { MenuLinkType } from '../../..'
import { useAuth } from 'frontend-js'

type MobileDrawerProps = {
	links: MenuLinkType[]
	handleClick: (path: string) => void
	enableAuth?: boolean
	enableStripe?: boolean
	enableShopify?: boolean
}

const MobileDrawer = (props: MobileDrawerProps) => {
	const { menuOpen, setMenuOpen } = useContext(AppContext)

	const { links, handleClick, enableAuth, enableStripe, enableShopify } = props

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
					{links?.map((menuItem, index) => (
						<SideMenuItem
							key={index}
							menuItem={menuItem}
							handleClick={handleMenuClick}
						/>
					))}
				</List>
				{(enableAuth || enableShopify) && (
					<Stack direction="column" spacing={1}>
						{enableStripe && <CartButton variant="button" />}
						{enableShopify && <ShopifyCartButton variant="button" />}
						{enableAuth && (
							<Box sx={sx.divider}>
								<AuthButton showLabel />
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
