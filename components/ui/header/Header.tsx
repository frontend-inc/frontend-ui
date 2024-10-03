import React from 'react'
import { Box } from '@mui/material'
import MobileDrawer from './MobileDrawer'
import MobileHeader from './MobileHeader'
import DesktopHeader from './DesktopHeader'
import { ButtonType, MenuLinkType } from '../../../types'
import { useApp } from '../../../hooks'

export type HeaderProps = {
	logo?: string
  buttons?: ButtonType[]
	enableAuth?: boolean
	enableStripe?: boolean
	enableShopify?: boolean
	enableNotifications?: boolean
	links?: MenuLinkType[]
	handleClick: (path: string) => void
}

const Header: React.FC<HeaderProps> = (props) => {
	const { logo: appLogo } = useApp()

	const {
		logo,
		links = [],
    buttons = [],
		handleClick,
		enableStripe = false,
		enableShopify = false,
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
        buttons={buttons}
				handleClick={handleClick}
			/>
			<MobileHeader
				logo={logo || appLogo}
        enableAuth={enableAuth}
				enableStripe={enableStripe}
				enableShopify={enableShopify}
				enableNotifications
				links={links}
        buttons={buttons}
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
