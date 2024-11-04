'use client'

import React, { useState } from 'react'
import { Typography } from '../../core'
import { Card } from 'frontend-shadcn'
import { Button } from '../../../components'
import { ShopifyProductCollectionModal } from '../../../components'
import { truncate } from '../../../helpers'
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

export default function ShopifyCollectionCard({
	collection,
	buttonText,
	enableGradient = false,
	enableOverlay = false,
  enableAddToCart = false,
  enableQuantity = false,
  enableSorting = false,
}: ShopifyCollectionCardProps) {

	const { handle, title, image } = collection || {}

  const [open, setOpen] = useState(false)

	const handleShowClick = () => {
		setOpen(true)
	}

	return (
    <>
      <Card className="relative w-full rounded-lg">
        <div className="relative w-full h-full">
          <Image
            // @ts-ignore
            src={image?.url}
            alt={title || 'Collection image'}
            aspectRatio={1.0}
            objectFit="cover"
            enableGradient={enableGradient}
            enableOverlay={enableOverlay}
            handleClick={ handleShowClick }
          />
        </div>
        <div className="dark absolute bottom-0 left-0 w-full p-4 z-10">
          <div className="flex items-center justify-between w-full">
            <div className="flex flex-col items-start justify-center">
              <Typography variant="body1" className="font-bold">
                {truncate(title || '', 60)}
              </Typography>
            </div>
            {buttonText && (
              <Button
                variant="secondary"
                size="sm"
                onClick={handleShowClick}
                className="bg-white text-black hover:bg-white/90"
              >
                Browse
              </Button>
            )}
          </div>
        </div>
      </Card>
      <ShopifyProductCollectionModal 
        open={open}
        handleClose={() => setOpen(false)}
        collection={ collection }  
        enableAddToCart={enableAddToCart}  
        enableQuantity={enableQuantity}
        enableSort={enableSorting}
      />
    </>
	)
}
