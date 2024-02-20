import React from 'react'
import { ShopProvider, ProductProvider, CollectionProvider } from 'frontend-shopify'
import { Cart, SearchModal } from '../../../components/shopify'

type ShopifyStoreProps = {
	domain: string
	storefrontAccessToken: string
	logo?: string
	shopUrl: string
	children: any
}

const ShopifyStore: React.FC<ShopifyStoreProps> = (props) => {
	const {
		children,
		logo,
		domain,
		shopUrl,
		storefrontAccessToken,
	} = props

	return (
		<ShopProvider
			logo={logo}
			domain={domain}
			shopUrl={shopUrl}
			storefrontAccessToken={storefrontAccessToken}
		>
      <Cart />
      <SearchModal />
      <ProductProvider>
        <CollectionProvider>{children}</CollectionProvider>
      </ProductProvider>
		</ShopProvider>
	)
}

export default ShopifyStore
