import React from 'react'
import { Button } from '@mui/material'
import ShopifyLogo from 'assets/icons/shopify-square-white.svg'
import Image from 'next/image'

const InstallShopifyButton: React.FC<InstallShopifyButtonProps> = (props) => {

	const handleClick = async () => {
    const url = 'https://apps.shopify.com/headless'
		window.open(url, '_blank')
	}  


 return(
  <Button
    fullWidth
    variant="contained"
    color="primary"
    sx={ sx.shopifyButton }
    onClick={handleClick}                
    startIcon={
      <Image src={ ShopifyLogo.src } alt="Shopify Logo" width={24} height={24} />
    }
  >
    Install Shopify App
  </Button>
 )
}

export default InstallShopifyButton 

const sx = {
  shopifyButton: {
    bgcolor: '#077F60',
    '&:hover': {
      bgcolor: '#077F60',
    },
  }
}