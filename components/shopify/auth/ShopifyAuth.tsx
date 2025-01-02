'use client'

import React, { useContext } from 'react'
import { ShopifyContext } from 'frontend-shopify'
import { Button } from '@nextui-org/react'
import { Typography } from '../../../components'
import { useShop } from 'frontend-shopify'
import { RemixIcon } from '../../../components'
import { useRouter } from 'next/navigation'

type DesktopAuthButtonProps = {
	handleClick: () => void
	icon: string
}

const DesktopAuthButton: React.FC<DesktopAuthButtonProps> = (props) => {
	const { handleClick, icon } = props

	return (
		<Button 
      isIconOnly 
      variant="ghost"       
      onPress={handleClick} 
      className="max-w-8"
    >
			<RemixIcon name={icon} />
		</Button>
	)
}

type MobileShopifyAuthButtonProps = {
	handleClick: () => void
	icon: string
}

const MobileShopifyAuthButton: React.FC<MobileShopifyAuthButtonProps> = (
	props
) => {
	const { handleClick, icon } = props

	return (
		<Button
			variant="ghost"
			onPress={handleClick}
      startContent={ 
        <RemixIcon name={icon} />
      }
		>
      Orders
 		</Button>
	)
}

type ShopifyAuthProps = {
	icon?: string
	variant?: 'topNav' | 'sideNav'
}

const ShopifyAuth: React.FC<ShopifyAuthProps> = (props) => {
	const router = useRouter()
	const { icon = 'ReceiptText', variant = 'topNav' } = props || {}

	const { customerPortalUrl } = useContext(ShopifyContext) as any

	const { findShop } = useShop()

	const getLastPathOfUrl = (urlString: string) => {
		const url = new URL(urlString)
		const pathname = url.pathname
		const pathSegments = pathname
			.split('/')
			.filter((segment) => segment.length > 0)
		return pathSegments.length > 0 ? pathSegments[pathSegments.length - 1] : ''
	}

	const handleClick = async () => {
		if (customerPortalUrl) {
			router.push(customerPortalUrl)
		}
	}

	const fetchCustomerPortalUrl = async () => {
		let shop = await findShop()
		let shopId = getLastPathOfUrl(shop?.id)
		return `https://shopify.com/${shopId}/account`
	}

	if (!customerPortalUrl) return null
	return variant === 'topNav' ? (
		<DesktopAuthButton icon={icon} handleClick={handleClick} />
	) : (
		<MobileShopifyAuthButton icon={icon} handleClick={handleClick} />
	)
}

export default ShopifyAuth
