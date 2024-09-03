import React, { useEffect } from 'react';
import { useProducts } from 'frontend-shopify';
import { ProductCard } from '../../../components/shopify';
import { Box } from '@mui/material';
import { useRouter } from 'next/router';
import { useApp } from '../../../hooks';

type ProductArrayProps = {
  href?: string
  handles: string[]
  enableBorder?: boolean
  enableAddToCart?: boolean
  enableQuickShop?: boolean 
  enableQuantity?: boolean
  enableOkendoStarRating?: boolean
  buttonText?: string  
}

const ProductArray: React.FC<ProductArrayProps> = (props) => {
  const { 
    href,
    handles,
    enableBorder = false,
    enableAddToCart = false,
    enableQuickShop = false,
    enableQuantity = false,
    enableOkendoStarRating = false,
    buttonText,     
  } = props;

  const router = useRouter()

  const { clientUrl } = useApp()
	const handleClick = (product) => {
		if (href) {
			const url = `${clientUrl}${href}/${product?.handle}`
			router.push(url)
		}
	}

  return(
    <Box sx={sx.grid}>
      {handles?.map((handle) => {                
        const { product, findProduct } = useProducts()
        useEffect(() => {
          findProduct(handle)
        }, [handle])
        
        if(!product) return null;
        return(
        <Box sx={sx.item} key={product?.id}>
          <ProductCard
            product={product}
            handleClick={() => handleClick(product)}
            enableBorder={enableBorder}
            enableAddToCart={enableAddToCart}
            enableQuickShop={enableQuickShop}
            enableQuantity={enableQuantity}
            enableOkendoStarRating={enableOkendoStarRating}
            buttonText={buttonText}
          />
        </Box>
      )})}
  </Box>
  )
};

export default ProductArray;

const sx = {
	item: {
		p: 1,
		gridColumn: 'span 1',
	},
	grid: {
		maxWidth: '100%',
		display: 'grid',
		gridTemplateColumns: {
			md: 'repeat(3, 1fr)',
			sm: 'repeat(2, 1fr)',
			xs: '1fr',
		},
	},
}
