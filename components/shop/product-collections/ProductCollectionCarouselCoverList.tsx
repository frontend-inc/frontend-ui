import React from 'react'
import { ProductCollectionList } from '../..'
import { ProductCollectionListProps } from './ProductCollectionList'
import ProductCollectionCoverListItems from './ProductCollectionCarouselCoverListItems'

export type ProductCollectionCarouselCoverListProps = ProductCollectionListProps & {
  enableArrows?: boolean
  enableAutoPlay?: boolean
  buttonText?: string
}

const ProductCollectionCarouselCoverList: React.FC<ProductCollectionCarouselCoverListProps> = (props) => {

  const { enableArrows, enableAutoPlay, buttonText } = props || {}

  const slots = {
    list: {
      enableArrows,
      enableAutoPlay,
      buttonText 
    }
  }

	return(
    <ProductCollectionList 
      {...props} 
      list={ProductCollectionCoverListItems} 
      slots={slots}
    />
  )
}

export default ProductCollectionCarouselCoverList
