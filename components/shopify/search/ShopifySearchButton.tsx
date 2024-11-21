'use client'

import React, { useContext } from 'react'
import { IconButton } from '../../../components'
import { ShopifyContext } from 'frontend-shopify'
import { AppContext } from '../../../context'
import { Icon } from '../..'
import { RiSearch2Fill } from '@remixicon/react'

const ShopifySearchButton: React.FC = () => {
	const { toggleSearch } = useContext(ShopifyContext) as any
	const { setMenuOpen } = useContext(AppContext)

	const handleToggleSearch = () => {
		setMenuOpen(false)
		toggleSearch()
	}

	return (
		<IconButton onClick={handleToggleSearch}>
			<RiSearch2Fill />
		</IconButton>
	)
}

export default ShopifySearchButton
