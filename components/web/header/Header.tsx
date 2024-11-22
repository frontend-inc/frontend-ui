'use client'

import React from 'react'
import MobileDrawer from './MobileDrawer'
import MobileHeader from './MobileHeader'
import DesktopHeader from './DesktopHeader'
import { ButtonType, MenuLinkType } from '../../../types'
import { useApp } from '../../../hooks'

export type HeaderProps = {
	logo?: string
	bgColor?: string
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
		bgColor,
		links = [],
		buttons = [],
		handleClick,
		enableStripe = false,
		enableShopify = false,
		enableAuth = false,
	} = props

	return (
		<header className="h-[64px] w-full">
			<DesktopHeader
				bgColor={bgColor}
				logo={logo || appLogo}
				enableAuth={enableAuth}
				enableStripe={enableStripe}
				enableShopify={enableShopify}
				links={links}
				buttons={buttons}
				handleClick={handleClick}
			/>
			<MobileHeader
				bgColor={bgColor}
				logo={logo || appLogo}
				enableAuth={enableAuth}
				enableStripe={enableStripe}
				enableShopify={enableShopify}
				enableNotifications
				links={links}
				buttons={buttons}
				handleClick={handleClick}
			/>
			<MobileDrawer links={links} handleClick={handleClick} />
		</header>
	)
}

export default Header
