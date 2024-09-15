import React from 'react'
import { IconButton, Box, Hidden } from '@mui/material'
import { AuthButton, Icon } from '../..'
import Logo from './Logo'
import { CartButton } from '../..'
import { ShopifyCartButton } from '../../shopify'
import { useApp } from '../../../hooks'
import { MenuLinkType } from '../../..'
import TopMenuItem from './TopMenuItem'

type DesktopHeaderProps = {
	logo: string
	links: MenuLinkType[]
	enableAuth?: boolean
	enableShopify?: boolean
	enableStripe?: boolean
	handleClick: (path: string) => void
}

const MAX_LINKS = 5

const DesktopHeader: React.FC<DesktopHeaderProps> = (props) => {
	const {
		logo,
		links,
		handleClick,
		enableAuth = false,
		enableStripe = false,
		enableShopify = false,
	} = props

	const { setMenuOpen } = useApp()

	return (
		<Hidden mdDown>
			<Box sx={sx.appBar}>
				<Box width={'100%'}>
					<Box sx={sx.desktop}>
						{links?.length > MAX_LINKS && (
							<Box sx={sx.menuButton}>
								<IconButton onClick={() => setMenuOpen(true)}>
									<Icon name="Menu" size={24} />
								</IconButton>
							</Box>
						)}
						<Box sx={sx.leftMenu}>
							<Logo
								src={logo}
								width={120}
								height={40}
								handleClick={() => handleClick('/')}
							/>
						</Box>
						<Box sx={sx.centerMenu}>
							{links?.length <= MAX_LINKS &&
								links?.map((menuItem, index) => (
									<TopMenuItem
										key={index}
										menuItem={menuItem}
										handleClick={handleClick}
									/>
								))}
						</Box>
						<Box sx={sx.rightMenu}>
							{enableAuth && <AuthButton />}
							{enableStripe && <CartButton />}
							{enableShopify && <ShopifyCartButton />}
						</Box>
					</Box>
				</Box>
			</Box>
		</Hidden>
	)
}

export default DesktopHeader

const sx = {
	appBar: {
		width: '100%',
		height: 64,
		bgcolor: 'background.default',
	},
	desktop: {
		width: '100%',
		display: 'flex',
		flexDirection: 'row',
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
	menuButton: {
		pl: 1,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		height: '60px',
	},
}
