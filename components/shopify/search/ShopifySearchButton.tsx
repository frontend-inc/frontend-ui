'use client'

import React, { useContext } from 'react'
import { Button } from '@nextui-org/react'
import { ShopifyContext } from 'frontend-shopify'
import { AppContext } from '../../../context'
import { RiSearch2Fill } from '@remixicon/react'

const ShopifySearchButton: React.FC = () => {
	const { toggleSearch } = useContext(ShopifyContext) as any
	const { setMenuOpen } = useContext(AppContext)

	const handleToggleSearch = () => {
		setMenuOpen(false)
		toggleSearch()
	}

	return (
		<Button isIconOnly onPress={handleToggleSearch}>
			<RiSearch2Fill />
		</Button>
	)
}

export default ShopifySearchButton
