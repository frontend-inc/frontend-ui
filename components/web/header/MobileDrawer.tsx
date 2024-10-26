'use client'

import React, { useContext } from 'react'
import { List } from '../../core'
import { Sheet } from '../..'
import { CartButton, AuthButton } from '../..'
import { ShopifyCartButton } from '../../shopify'
import { AppContext } from '../../../context'
import MobileDrawerLink from './MobileDrawerLink'
import { MenuLinkType } from '../../..'

type MobileDrawerProps = {
	links: MenuLinkType[]
	handleClick: (path: string) => void
	enableAuth?: boolean
	enableStripe?: boolean
	enableShopify?: boolean
}

const MobileDrawer = (props: MobileDrawerProps) => {
	const { menuOpen, setMenuOpen } = useContext(AppContext)

	const { links, handleClick, enableAuth, enableStripe, enableShopify } = props

	const handleMenuClick = (path: string) => {
		setMenuOpen(false)
		handleClick(path)
	}

	return (
		<Sheet 
      open={menuOpen} 
      handleClose={() => setMenuOpen(false)} 
      side="left"
    >
			<div>
				<List className={'space-y-2'}>
					{links?.map((menuItem, index) => (
						<MobileDrawerLink
							key={index}
							menuItem={menuItem}
							handleClick={handleMenuClick}
						/>
					))}
				</List>
				{(enableAuth || enableShopify) && (
					<div className="flex flex-col space-y-3">
						{enableStripe && <CartButton />}
						{enableShopify && <ShopifyCartButton />}
						{enableAuth && (
							<div className="w-full border-t border-divider pt-1.5">
								<AuthButton showLabel />
							</div>
						)}
					</div>
				)}
			</div>
		</Sheet>
	)
}

export default MobileDrawer
