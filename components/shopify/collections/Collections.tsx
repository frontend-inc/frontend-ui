import React, { useEffect, useContext } from 'react'
import { useCollections } from 'frontend-shopify'
import { useRouter } from 'next/router'
import { AppContext } from '../../../context'
import { Stack, Box } from '@mui/material'
import { ListLayout, CollectionCard } from '../../../components'

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
		<Box sx={ sx.grid }>
      { collections?.map((collection, index) =>(        
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
