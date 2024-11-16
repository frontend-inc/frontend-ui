'use client'

import React from 'react'
import { CartButton, ButtonActions, Icon, AuthButton } from '../..'
import { ShopifyCartButton } from '../../shopify'
import { useApp } from '../../../hooks'
import { ButtonType, MenuLinkType } from '../../..'
import Logo from './Logo'
import { Button } from '../../../components'
import { RiMenuFill } from '@remixicon/react'

type MobileHeaderProps = {
  bgColor?: string
	logo: string
	logoWidth?: number
	logoHeight?: number
	links: MenuLinkType[]
	buttons: ButtonType[]
	enableAuth?: boolean
	enableShopify?: boolean
	enableStripe?: boolean
	enableNotifications?: boolean
	handleClick: (path: string) => void
}

const MobileHeader: React.FC<MobileHeaderProps> = (props) => {

  const {
    bgColor,
    logo,
    logoWidth = 120,
    logoHeight = 50,
    handleClick,
    buttons,
    enableAuth = false,
    enableStripe = false,
    enableShopify = false,
  } = props

	const { setMenuOpen } = useApp()

	return (
		<div 
      className="block md:hidden w-full h-16 bg-background"
      style={{
        backgroundColor: bgColor,
      }}
    >
			<div className="flex justify-between items-center h-full px-4">
				<div className="flex items-center">
					<Button
						variant="ghost"
						size="icon"
						className="mr-2"
						onClick={() => setMenuOpen(true)}
					>
						<RiMenuFill />
					</Button>
					<Logo
						handleClick={() => handleClick('/')}
						src={logo}
						width={logoWidth}
						height={logoHeight - 20}
					/>
				</div>
				<div className="flex items-center">
					{buttons?.length > 0 && (
						<div className="mr-2">
							<ButtonActions size="sm" buttons={buttons} />
						</div>
					)}
					{enableAuth && <AuthButton />}
					{enableStripe && <CartButton />}
					{enableShopify && <ShopifyCartButton />}
				</div>
			</div>
		</div>
	)
}

export default MobileHeader
