import React from 'react'
import { ProductCollectionList } from '../..'
import { ProductCollectionListProps } from './ProductCollectionList'
import ProductCollectionCoverListItems from './ProductCollectionCoverCarouselListItems'

export type ProductCollectionCoverCarouselListProps = ProductCollectionListProps & {
  enableArrows?: boolean
  enableAutoPlay?: boolean
  buttonText?: string
}

const ProductCollectionCoverCarouselList: React.FC<ProductCollectionCoverCarouselListProps> = (props) => {

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

export default ProductCollectionCoverCarouselList
