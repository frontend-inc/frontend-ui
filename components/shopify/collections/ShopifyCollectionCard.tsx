'use client'

import React, { useState } from 'react'
import { Typography } from '../../../components'
import { Card, CardFooter } from '@nextui-org/react'
import { ShopifyProductCollectionModal } from '../../../components'
import { Image } from '../../../components'
import { ShopifyCollectionType } from 'frontend-shopify'

export type ShopifyCollectionCardProps = {
	collection: ShopifyCollectionType
	buttonText?: string
	enableGradient?: boolean
	enableOverlay?: boolean
	enableAddToCart?: boolean
	enableQuantity?: boolean
	enableSorting?: boolean
}

export default function ShopifyCollectionCard(
	props: ShopifyCollectionCardProps
) {
	const {
		collection,
		enableGradient = false,
		enableOverlay = false,
		enableAddToCart = false,
		enableQuantity = false,
		enableSorting = false,
	} = props

	const { handle, title, image } = collection || {}

	const [open, setOpen] = useState(false)

	const handleShowClick = () => {
		setOpen(true)
	}

	return (
		  <>
			  <Card isFooterBlurred>				
					<Image
            handleClick={ handleShowClick }
            disableBorderRadius
						// @ts-ignore
						src={image?.url}
						alt={title || 'Collection image'}
						aspectRatio={1.0}
						objectFit="cover"
						enableGradient={enableGradient}
						enableOverlay={enableOverlay}
					/>
				<CardFooter className='dark absolute bottom-0 left-0 w-full p-4 z-20'>									
          <Typography variant="body1" className="text-white text-ellipsis">
            { title }
          </Typography>					
        </CardFooter>
			</Card>
			<ShopifyProductCollectionModal
				open={open}
				handleClose={() => setOpen(false)}
				collection={collection}
				enableAddToCart={enableAddToCart}
				enableQuantity={enableQuantity}
				enableSort={enableSorting}
			/>
		</>
	)
}
