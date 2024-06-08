import React from 'react'
import {
	ShopifyProvider,
	ProductProvider,
	CollectionProvider,
} from 'frontend-shopify'
import { Cart, SearchModal } from '../../../components/shopify'

type ShopifyStoreProps = {
	enableShopify?: boolean
	domain?: string
	storefrontAccessToken?: string
	customerPortalUrl?: string
	logo?: string
	shopUrl?: string
	children: any
}

const ShopifyStore: React.FC<ShopifyStoreProps> = (props) => {
	const {
		children,
		enableShopify,
		logo,
		domain,
		customerPortalUrl,
		shopUrl,
		storefrontAccessToken,
	} = props

	if (enableShopify && (!domain || !storefrontAccessToken)) return null
	return enableShopify ? (
		<ShopifyProvider
			logo={logo}
			domain={domain}
			shopUrl={shopUrl}
			customerPortalUrl={customerPortalUrl}
			storefrontAccessToken={storefrontAccessToken}
		>
			<Cart />
			<ProductProvider>
				<CollectionProvider>{children}</CollectionProvider>
			</ProductProvider>
		</ShopifyProvider>
	) : (
		children
	)
}

export default ShopifyStore
