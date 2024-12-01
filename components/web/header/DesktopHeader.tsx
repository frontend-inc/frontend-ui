'use client'

import React from 'react'
import { IconButton } from '../../../components'
import { RemixIcon, ButtonActions, AuthButton, Icon } from '../..'
import Logo from './Logo'
import { CartButton } from '../..'
import { ShopifyCartButton } from '../../shopify'
import { useApp } from '../../../hooks'
import { ButtonType, MenuLinkType } from '../../..'
import DesktopLink from './DesktopLink'
import { RiMenuFill } from '@remixicon/react'

type DesktopHeaderProps = {
	logo: string
	links: MenuLinkType[]
	buttons: ButtonType[]
	bgColor?: string
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
		buttons,
		bgColor,
		handleClick,
		enableAuth = false,
		enableStripe = false,
		enableShopify = false,
	} = props

	const { setMenuOpen } = useApp()

	return (
		<div
			className="hidden md:block w-full h-16 bg-background"
			style={{
				backgroundColor: bgColor,
			}}
		>
			<div className="w-full">
				<div className="w-full flex flex-row">
					{links?.length > MAX_LINKS && (
						<div className="pl-1 flex items-center justify-center h-[60px]">
							<IconButton color="ghost" onClick={() => setMenuOpen(true)}>
								<RemixIcon name='ri-menu-fill' />
							</IconButton>
						</div>
					)}
					<div className="w-[200px] h-[60px] mx-4 flex flex-row items-center justify-start">
						<Logo
							src={logo}
							width={120}
							height={40}
							handleClick={() => handleClick('/')}
						/>
					</div>
					<div className="flex flex-row items-center justify-center w-full h-[60px]">
						{links?.length <= MAX_LINKS &&
							links?.map((menuItem, index) => (
								<DesktopLink
									key={index}
									menuItem={menuItem}
									handleClick={handleClick}
								/>
							))}
					</div>
					<div className="w-[200px] flex flex-row items-center justify-end h-[60px] pr-1">
						{buttons?.length > 0 && (
							<div className="pr-1">
								<ButtonActions size="sm" buttons={buttons} />
							</div>
						)}
						{enableAuth && <AuthButton />}
						{enableStripe && <CartButton />}
						{enableShopify && <ShopifyCartButton />}
					</div>
				</div>
			</div>
		</div>
	)
}

export default DesktopHeader
