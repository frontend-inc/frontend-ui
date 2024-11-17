'use client'

import React, { useEffect, useContext, useState } from 'react'
import { SearchInput, Alert } from '../../../components'
import { ShopifyProducts } from '../../../components/shopify'
import { Drawer } from '../../../components'
import { ShopifyContext } from 'frontend-shopify'
import { useProducts } from 'frontend-shopify'
import { useSegment } from '../../../hooks/addons'

type ShopifySearchModalProps = {
	href: string
}

const ShopifySearchModal: React.FC<ShopifySearchModalProps> = (props) => {
	const { href } = props
	// Minimum number of characters to track analytics
	const MIN_ANALYTICS_CHARS = 5

	const { trackProductsSearched } = useSegment()
	const { setMenuOpen, searchOpen, setSearchOpen } = useContext(
		ShopifyContext
	) as any

	const [keywords, setKeywords] = useState('')

	const { loading, products, setProducts, searchProducts } = useProducts()

	const handleChange = (ev) => {
		setKeywords(ev.target.value)
	}

	const handleClose = () => {
		handleClear()
		setMenuOpen(false)
		setSearchOpen(false)
		setProducts(null)
	}

	const handleClear = () => setKeywords('')

	const handleSearch = (keywords) => {
		if (keywords?.length >= MIN_ANALYTICS_CHARS) {
			trackProductsSearched(keywords)
		}
		searchProducts({ query: keywords })
	}

	useEffect(() => {
		if (keywords?.length > 0) {
			handleSearch(keywords)
		} else {
			setProducts(null)
		}
	}, [keywords])

	return (
		<Drawer open={searchOpen} handleClose={handleClose}>
			<div className="w-full flex flex-row justify-center">
				<SearchInput
					name="keywords"
					value={keywords}
					handleChange={handleChange}
					handleSearch={handleSearch}
					placeholder={'Search...'}
				/>
			</div>
			<ShopifyProducts loading={loading} products={products} />
			{keywords?.length > 0 && !loading && products?.length == 0 && (
				<Alert
					icon='ri-search-line'
					title="No search results"
					description="Try another search term"
				/>
			)}
		</Drawer>
	)
}

export default ShopifySearchModal
