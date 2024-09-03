import React, { useEffect } from 'react'
import { useCollections } from 'frontend-shopify'
import { useRouter } from 'next/router'
import { useApp } from '../../../hooks'
import { Box } from '@mui/material'
import { CollectionCard } from '../../../components'

export type CollectionsProps = {
	href: string
	enableGradient?: boolean
	enableOverlay?: boolean
}

const Collections: React.FC<CollectionsProps> = (props) => {
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
				<CollectionCard
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

export default Collections

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
