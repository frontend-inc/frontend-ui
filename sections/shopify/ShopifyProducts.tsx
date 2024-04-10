import React from 'react'
import { Section, Heading } from '../../components'
import { ProductCollection } from '../../components/shopify'
import { ProductCollectionProps } from '../../components/shopify/products/ProductCollection'
import { SectionProps, HeadingProps } from '../../types'

type ShopifyProductsProps = SectionProps & 
  HeadingProps & 
  ProductCollectionProps

const ShopifyProducts: React.FC<ShopifyProductsProps> = (props) => {

  const {
    label,
    title,    
    description,
    textAlign,
    bgcolor,
    py,
    px,
    maxWidth,
    ...rest 
  } = props 

  return(
    <Section 
      bgcolor={bgcolor}
      py={py}
      px={px}
      maxWidth={maxWidth}
    >
      <Heading 
        label={label}
        title={title}
        description={description}
        textAlign={ textAlign }
      />
      <ProductCollection {...rest} />
    </Section>
  )
}

export default ShopifyProducts