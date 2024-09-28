import React from 'react'
import { Stack, Box, Hidden, IconButton } from '@mui/material'
import { Icon } from '../..'
import { CartButton } from '../..'
import { ShopifyCartButton } from '../../shopify'
import { useApp } from '../../../hooks'
import { MenuLinkType } from '../../..'
import Logo from './Logo'

type MobileNavProps = {
	logo: string
	logoWidth?: number
	logoHeight?: number
	links: MenuLinkType[]
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
			<Box sx={sx.appBar}>
				<Stack direction="row" spacing={1} sx={{ width: '100%' }}>
					<IconButton onClick={() => setMenuOpen(true)}>
						<Icon name="Menu" size={24} />
					</IconButton>
					<Logo
						handleClick={() => handleClick('/')}
						src={logo}
						width={logoWidth}
						height={logoHeight - 20}
					/>
					<Box sx={sx.rightMenu}>
						{enableStripe && <CartButton />}
						{enableShopify && <ShopifyCartButton />}
					</Box>
				</Stack>
			</Box>
		</Hidden>
	)
}

export default MobileNav

const sx = {
	appBar: {
		width: '100%',
		height: 64,
		bgcolor: 'background.default',
	},
	drawer: {
		bgcolor: 'background.default',
	},
	header: {
		width: '100%',
	},
	rightMenu: {
		width: '100px',
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-end',
		height: '60px',
	},
}
