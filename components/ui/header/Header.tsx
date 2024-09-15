import React from 'react'
import { Box } from '@mui/material'
import MobileDrawer from './MobileDrawer'
import MobileHeader from './MobileHeader'
import DesktopHeader from './DesktopHeader'
import { MenuLinkType } from '../../../types'
import { useApp } from '../../../hooks'

export type HeaderProps = {
	mode?: 'accent' | 'light' | 'dark'
	logo?: string
	enableAuth?: boolean
	enableStripe?: boolean
	enableShopify?: boolean
	enableNotifications?: boolean
	links?: MenuLinkType[]
	handleClick: (path: string) => void
}

const Header: React.FC<HeaderProps> = (props) => {
	const { logo: appLogo, enableStripe, enableShopify } = useApp()

	const {
		logo,
		links=[],
		handleClick,
		enableAuth = false,
	} = props

	return (
		<Box sx={sx.root}>
			<DesktopHeader
				logo={logo || appLogo}
				enableAuth={enableAuth}
				enableStripe={enableStripe}
				enableShopify={enableShopify}
				links={links}
				handleClick={handleClick}
			/>
			<MobileHeader
				logo={logo || appLogo}
				enableStripe={enableStripe}
				enableShopify={enableShopify}
				enableNotifications
				links={links}
				handleClick={handleClick}
			/>
			<MobileDrawer        
				enableAuth={enableAuth}
				enableStripe={enableStripe}
				enableShopify={enableShopify}
				links={links}
				handleClick={handleClick}
			/>
		</Box>
	)
}

export default Header

const sx = {
	root: {
		height: 64,
		width: '100%',
		display: 'flex',
		flexDirection: 'row',
		bgcolor: 'background.default',
	},
}
