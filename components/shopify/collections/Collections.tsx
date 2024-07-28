import React, { useEffect, useContext } from 'react'
import { useCollections } from 'frontend-shopify'
import { Stack } from '@mui/material'
import { useRouter } from 'next/router'
import { AppContext } from '../../../context'
import { CollectionCard } from '../../../components'

export type CollectionsProps = {
	href: string
	enableGradient?: boolean
	enableOverlay?: boolean
}

const Collections: React.FC<CollectionsProps> = (props) => {
	const {
		href,
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
      { collections?.map((collection, index) =>(        
        <CollectionCard 
          key={index}
          collection={collection}
          handleClick={() => handleClick(collection)}
          enableGradient={enableGradient}
          enableOverlay={enableOverlay}
        />
      ))}
		</Stack>
	)
}

export default Collections

const sx = {
	root: {
		width: '100%',
	},
}
