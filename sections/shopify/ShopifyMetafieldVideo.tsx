import React from 'react'
import { Section } from '../../components'
import { MetafieldVideo } from '../../components'
import { MetafieldVideoProps } from '../../components/shopify/products/metafields/MetafieldVideo'
import { SectionProps } from '../../types'

type ShopifyMetafieldVideoProps = SectionProps & 
  MetafieldVideoProps

const ShopifyMetafieldVideo: React.FC<ShopifyMetafieldVideoProps> = (props) => {

  const {
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
      <MetafieldVideo {...rest} />
    </Section>
  )
}

export default ShopifyMetafieldVideo