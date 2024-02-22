import React, { useState, useEffect } from 'react'
import { 
  MetafieldIdentifier, 
  getMetafieldImage 
} from 'frontend-shopify'
import { Box } from '@mui/material'
import { useProducts } from 'frontend-shopify'
import Image from 'next/image'

type MetafieldImageProps = {
  handle: string
  metafield: MetafieldIdentifier  
  height: number
	objectFit?: 'cover' | 'contain'
	bgcolor?: string
	opacity?: number
	enableBorder?: boolean
	enableGradient?: boolean
	enableOverlay?: boolean
}

const MetafieldImage: React.FC<MetafieldImageProps> = (props) => {

  const { 
    handle,
    metafield,
    enableBorder = false,
    enableGradient = false,
    enableOverlay = false,
    opacity,    
    height=250,
    bgcolor
  } = props

  const { loading, product, findProduct } = useProducts()
  const [src, setSrc] = useState<string|null>(null)

  useEffect(() => {
    if(handle && metafield){
      findProduct(handle, [metafield])
    }
  }, [handle, metafield])

  useEffect(() => {
    if(product){
      setSrc(getMetafieldImage(product, metafield.key))
    }
  }, [product])

  if(!src) return null;
  return(
      <img 
        src={src}
        alt={product?.title}
        height={`${height}px`}
        width={'100%'}
        style={{
          objectFit: 'contain'
        }}        
      />
  )
}

export default MetafieldImage

