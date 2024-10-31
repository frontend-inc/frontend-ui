'use client'

import React, { useEffect } from 'react'
import { Cover } from '../..'
import { useProductCollections } from '../../../hooks'

export type ProductCollectionCoverProps = {
	height?: number
	alignItems?: 'flex-start' | 'center' | 'flex-end'
	alt?: string
	handleClick?: () => void
	enableGradient?: boolean
	enableOverlay?: boolean
  productCollectionId: string | number 
}

const ProductCollectionCover: React.FC<ProductCollectionCoverProps> = (
	props
) => {

	const {
		handleClick,
		height = 400,
		alt = 'image',
		enableGradient = false,
		enableOverlay = true,
		alignItems = 'center',
    productCollectionId,
	} = props

  const { 
    productCollection,
    findProductCollection,
  } = useProductCollections()

  useEffect(() => {
    if(productCollectionId){
      findProductCollection(productCollectionId)
    }
  }, [productCollectionId])


	if (!productCollection) return null
	return (
		<Cover
			height={height}
			title={productCollection?.title}
			description={productCollection?.description}
			//@ts-ignore
			image={productCollection?.image?.url}
			alt={alt}
			alignItems={alignItems}
			handleClick={handleClick}
      enableOverlay={enableOverlay}
			enableGradient={enableGradient}
		/>
	)
}

export default ProductCollectionCover
