'use client'

import React, { useEffect } from 'react'
import { Drawer, ProductDetails, ProductReviews } from '../..'
import { useProducts } from '../../../hooks'

export type ProductModalProps = {
	open: boolean
  handleClose: () => void
  productId: string | number 
	enableFavorites?: boolean
	enableLikes?: boolean
	enableSharing?: boolean
	enableRatings?: boolean
	enableGradient?: boolean
	enableOverlay?: boolean
}

const Product: React.FC<ProductModalProps> = (props) => {
	const {  } = props || {}

	const {
    open, 
    handleClose, 
    productId,
		enableRatings,
		enableLikes,
		enableFavorites,
		enableGradient,
		enableOverlay,
	} = props || {}

  const { 
    loading,
    product,
    findProduct
  } = useProducts()

  useEffect(() => {
    if(productId) {
      findProduct(productId)
    }
  }, [productId])
	
	return (
		<Drawer 
      open={open} 
      handleClose={handleClose}
    >
      <div className="w-full flex flex-row justify-center pb-10">
        <div className="md:max-w-screen-sm flex flex-col space-y-[20px]">
          <ProductDetails
            direction="column"
            product={product}              
            enableGradient={enableGradient}
            enableOverlay={enableOverlay}
            enableFavorites={enableFavorites}
            enableLikes={enableLikes}
            enableRatings={enableRatings}
          />
          { enableRatings && (
            <ProductReviews
              productId={productId}
            />
          )}
        </div>
      </div>
		</Drawer>
	)
}

export default Product