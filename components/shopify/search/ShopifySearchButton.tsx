'use client'

import React, { useContext } from 'react'
import { IconButton } from '../../core'
import { ShopifyContext } from 'frontend-shopify'
import { AppContext } from '../../../context'
import { Icon } from '../..'

const ShopifySearchButton: React.FC = () => {
	const { toggleSearch } = useContext(ShopifyContext) as any
	const { setMenuOpen } = useContext(AppContext)

	const handleToggleSearch = () => {
		setMenuOpen(false)
		toggleSearch()
	}

	return (
		<IconButton onClick={handleToggleSearch}>
			<Icon name="Search"  />
		</IconButton>
	)
}

export default ShopifySearchButton
