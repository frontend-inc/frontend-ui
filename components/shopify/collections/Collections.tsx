import React, { useEffect, useContext } from 'react'
import { useCollections } from 'frontend-shopify'
import { CollectionList } from '../../../components'
import { Stack } from '@mui/material'
import { ShopContext } from 'frontend-shopify'
import { useRouter } from 'next/router'

export type CollectionsProps = {
	editing?: boolean
	layout?: 'grid' | 'list' 
	style?: 'card' | 'avatar' | 'cover'
	perPage?: number
	buttonText?: string
	autoPlay?: boolean
	arrows?: boolean
	showDots?: boolean
	enableBorder?: boolean
	enableGradient?: boolean
}

const Collections: React.FC<CollectionsProps> = (props) => {
	const {
		editing = false,
		layout = 'grid',
		style = 'card',
		buttonText,
		enableBorder = false,
		enableGradient = false,
	} = props

	const router = useRouter()

	const { loading, collections, findCollections } = useCollections()

	const { shopUrl } = useContext(ShopContext) as any

	const handleClick = (collection) => {
		if (!editing && shopUrl) {
			window.scrollTo({
				top: 0,
				behavior: 'smooth',
			})
			router.push(`${shopUrl}/collections/${collection?.handle}`)
		}
	}

	useEffect(() => {
		findCollections()
	}, [])

	return (
		<Stack spacing={1} sx={sx.root}>
			<CollectionList 
				layout={layout}
				style={style}
				resources={collections}
				loading={loading}
				items={collections}
				buttonText={buttonText}
				handleClick={handleClick}
				enableBorder={enableBorder}
				enableGradient={enableGradient}
			/>
		</Stack>
	)
}

export default Collections

const sx = {
	root: {
		width: '100%',
	},
}
