import React from 'react'
import { Box, Hidden, IconButton } from '@mui/material'
import { Icon } from '../..'
import { CartButton } from '../..'
import { ShopifyCartButton } from '../../shopify'
import { useApp } from '../../../hooks'
import { MenuLinkType } from '../../..'
import Logo from './Logo'

type MobileNavProps = {
	editing?: boolean
	logo: string
	logoWidth?: number
	logoHeight?: number
	links?: MenuLinkType[]
	enableShopify?: boolean
	enableStripe?: boolean
	enableNotifications?: boolean
	handleClick: (path: string) => void
}

const MobileNav = (props: MobileNavProps) => {
	const { setMenuOpen } = useApp()

	const {
		logo,
		logoWidth = 120,
		logoHeight = 50,
		handleClick,
		enableStripe = false,
		enableShopify = false,
	} = props

	return (
		<Hidden mdUp>
			<Box
				sx={{
					...sx.appBar,
				}}
			>
				<Box width="100%">
					<Box sx={sx.desktopTop}>
						<Box sx={sx.leftMenu}>
							<IconButton onClick={() => setMenuOpen(true)}>
								<Icon name="Menu" size={24} />
							</IconButton>
						</Box>
						<Box sx={sx.centerMenu}>
							<Logo
								handleClick={() => handleClick('/')}
								src={logo}
								width={logoWidth}
								height={logoHeight - 20}
							/>
						</Box>
						<Box sx={sx.rightMenu}>
							{enableStripe && <CartButton />}
							{enableShopify && <ShopifyCartButton />}
						</Box>
					</Box>
				</Box>
			</Box>
		</Hidden>
	)
}

export default MobileNav

const sx = {
	appBar: {
		height: 64,
		bgcolor: 'background.default',
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
	desktopTop: {
		width: '100vw',
		display: 'flex',
		flexDirection: 'row',
	},
	desktopSideNav: {
		justifyContent: 'space-between',
		width: '280px',
		p: 2,
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
}
