import React, { useContext } from 'react'
import { AppBar, Box, Hidden, Toolbar, IconButton } from '@mui/material'
import { Logo, Icon } from '../..'
import { SearchButton, CartButton } from '../../shopify'
import { AppContext } from '../../../context'
import { MenuLinkType } from '../../..'

type MobileNavProps = {
	editing?: boolean
	logo?: string
	logoWidth?: number
	logoHeight?: number
	menuItems?: MenuLinkType[]
	enableAuth?: boolean
	enableShopify?: boolean
	enableNotifications?: boolean
	handleClick: (path: string) => void
	position?: 'fixed' | 'relative' | 'absolute'
}

const MobileNav = (props: MobileNavProps) => {
	const { setMenuOpen } = useContext(AppContext)

	const {
		editing,
		logo,
		logoWidth = 120,
		logoHeight = 50,
		enableShopify = false,
		enableNotifications = false,
	} = props

	return (
		<Hidden smUp>
			<AppBar
				sx={{
					...sx.appBar,
					...(enableNotifications && sx.appBarNotifications),
				}}
				position={'absolute'}
				elevation={0}
			>
				<Toolbar>
					<Box sx={sx.desktopTopNav}>
						<Box sx={sx.leftMenu}>
							<IconButton onClick={() => setMenuOpen(true)}>
								<Icon name="Menu" size={24} />
							</IconButton>
						</Box>
						<Box sx={sx.centerMenu}>
							<Logo src={logo} width={logoWidth} height={logoHeight - 20} />
						</Box>
						<Box sx={sx.rightMenu}>
							{enableShopify && (
								<>
									<SearchButton />
									<CartButton />
								</>
							)}
						</Box>
					</Box>
				</Toolbar>
			</AppBar>
		</Hidden>
	)
}

export default MobileNav

const sx = {
	appBar: {
		position: 'absolute',
		zIndex: (theme) => theme.zIndex.appBar,
		bgcolor: 'background.default',
	},
	appBarNotifications: {
		position: 'absolute',
		top: 40,
	},
	notifications: {
		top: '50px',
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
	desktopTopNav: {
		width: '100%',
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
