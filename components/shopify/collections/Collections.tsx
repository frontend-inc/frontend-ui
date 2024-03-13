import React, { useEffect, useContext } from 'react'
import { useCollections } from 'frontend-shopify'
import { StyledList } from '../../../components'
import { Stack, Typography } from '@mui/material'
import { ShopContext } from 'frontend-shopify'
import { useRouter } from 'next/router'

type CollectionProps = {
	title?: string
	editing?: boolean
	layout?: 'grid' | 'list' | 'carousel'
	style?: 'card' | 'list' | 'avatar' | 'cover'
	perPage?: number
	buttonText?: string
	autoPlay?: boolean
	arrows?: boolean
	showDots?: boolean
	enableBorder?: boolean
	enableGradient?: boolean
}

const Collections: React.FC<CollectionProps> = (props) => {
	const {
		title,
		editing = false,
		perPage = 20,
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
			<Typography variant="h5" color="textPrimary">
				{title}
			</Typography>
			<StyledList
				layout={layout}
				//@ts-ignore
				style={style}
				resources={collections}
				editing={editing}
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
