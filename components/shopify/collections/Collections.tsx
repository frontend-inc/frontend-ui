import React, { useEffect, useContext } from 'react'
import { useCollections } from 'frontend-shopify'
import { CollectionList } from '../../../components'
import { Stack } from '@mui/material'
import { useRouter } from 'next/router'
import { AppContext } from '../../../context'

export type CollectionsProps = {
	editing?: boolean
	href: string
	variant?: 'grid' | 'list'
	style?: 'card' | 'avatar' | 'cover'
	perPage?: number
	buttonText?: string
	autoPlay?: boolean
	arrows?: boolean
	showDots?: boolean
	enableBorder?: boolean
	enableGradient?: boolean
	enableOverlay?: boolean
}

const Collections: React.FC<CollectionsProps> = (props) => {
	const {
		href,
		variant = 'grid',
		style = 'card',
		buttonText,
		enableBorder = false,
		enableGradient = false,
		enableOverlay = false,
	} = props

	const router = useRouter()

	const { loading, collections, findCollections } = useCollections()

	const { clientUrl } = useContext(AppContext) as any

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
		<Stack spacing={1} sx={sx.root}>
			<CollectionList
				actions={[]}
				variant={variant}
				style={style}
				resources={collections}
				buttonText={buttonText}
				handleClick={handleClick}
				enableBorder={enableBorder}
				enableGradient={enableGradient}
				enableOverlay={enableOverlay}
				enableEdit={false}
				enableDelete={false}
				handleEdit={() => null}
				handleDelete={() => null}
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
