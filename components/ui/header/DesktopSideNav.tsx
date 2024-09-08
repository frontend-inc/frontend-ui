import React from 'react'
import { Stack, List, Box, Hidden } from '@mui/material'
import { AuthButton, StripeCustomerPortalButton } from '../../../components'
import Logo from './Logo'
import { ShopifyAuth, ShopifyCartButton } from '../../shopify'
import { HEADER_LOGO_HEIGHT, HEADER_LOGO_WIDTH } from '../../../constants/index'
import { MenuLinkType } from '../../..'
import SideNavMenuItem from './SideNavMenuItem'
import { useAuth } from 'frontend-js'
import { filterLinkVisibility } from '../../../helpers'

type DesktopNavProps = {
	editing?: boolean
	logo: string
	logoWidth?: number
	logoHeight?: number
	menuItems?: MenuLinkType[]
	enableAuth?: boolean
	enableStripe?: boolean
	enableShopify?: boolean
	enableNotifications?: boolean
	handleClick: (path: string) => void
	position?: 'fixed' | 'relative' | 'absolute'
}

const DesktopSideNav = (props: DesktopNavProps) => {
	const {
		editing,
		logo,
		menuItems,
		logoWidth = HEADER_LOGO_WIDTH,
		logoHeight = HEADER_LOGO_HEIGHT,
		handleClick,
		enableAuth = false,
		enableStripe = false,
		enableShopify = false,
		enableNotifications = false,
	} = props

	const { currentUser } = useAuth()

	return (
		<Hidden mdDown>
			<Box sx={sx.sideNav}>
				<Stack
					sx={{
						...sx.desktopSideNav,
						...(enableNotifications && sx.desktopSideNavNotifications),
						...(editing && sx.desktopSideNavEditor),
						...(editing &&
							enableNotifications &&
							sx.desktopSideNavEditorNotifications),
					}}
					direction="column"
					spacing={2}
				>
					<Stack sx={sx.desktopSideMenuItems} direction="column" spacing={2}>
						<Box sx={sx.centerMenu}>
							<Logo
								handleClick={() => handleClick('/')}
								src={logo}
								width={logoWidth}
								height={logoHeight}
							/>
						</Box>
						<List>
							{menuItems
								?.filter((menuItem) => menuItem.parent_id == null)
								?.filter((menuItem) =>
									filterLinkVisibility(menuItem, currentUser)
								)
								?.map((menuItem, index) => (
									<SideNavMenuItem
										key={index}
										menuItem={menuItem}
										handleClick={handleClick}
									/>
								))}
						</List>
					</Stack>
					{(enableAuth || enableShopify) && (
						<Stack direction="column" spacing={1}>
							{enableShopify && (
								<>
									<ShopifyCartButton variant="sideNav" editing={editing} />
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
		borderRight: '1px dotted',
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
		width: '100%',
		borderTop: '1px solid',
		borderColor: 'divider',
		pt: 1.5,
	},
}
