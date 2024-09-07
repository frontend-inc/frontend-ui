import React, { useEffect } from 'react'
import { useCollections } from 'frontend-shopify'
import { useRouter } from 'next/router'
import { useApp } from '../../../hooks'
import { Box } from '@mui/material'
import { ShopifyCollectionCard } from '../../../components'

export type ShopifyCollectionsProps = {
	href: string
	enableGradient?: boolean
	enableOverlay?: boolean
}

const ShopifyCollections: React.FC<ShopifyCollectionsProps> = (props) => {
	const { href, enableGradient = false, enableOverlay = false } = props

	const router = useRouter()

	const { loading, collections, findCollections } = useCollections()

	const { clientUrl } = useApp()

	const handleClick = (collection) => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
		if (href) {
			router.push(`${clientUrl}${href}/${collection?.handle}`)
		}
	}

	useEffect(() => {
		findCollections()
	}, [])

	return (
		<Box sx={sx.grid}>
			{collections?.map((collection, index) => (
				<ShopifyCollectionCard
					key={index}
					collection={collection}
					handleClick={() => handleClick(collection)}
					enableGradient={enableGradient}
					enableOverlay={enableOverlay}
				/>
			))}
		</Box>
	)
}

export default ShopifyCollections

const sx = {
	grid: {
		width: '100%',
		display: 'grid',
		gridTemplateColumns: {
			md: '1fr 1fr 1fr',
			xs: '1fr',
		},
		gap: '16px',
		pb: 1,
	},
}
