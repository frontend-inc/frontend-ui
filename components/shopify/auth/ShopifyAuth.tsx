import React from 'react'
import { Button, IconButton } from '@mui/material'
import { useShop } from 'frontend-shopify'
import { Icon } from '../../../components'
import { useRouter } from 'next/router'

type ShopifyAuthProps = {
  editing?: boolean
  showLabel?: boolean
  customerUrl?: string
}

const ShopifyAuth: React.FC<ShopifyAuthProps> = (props) => {

  const router = useRouter()
  const { editing=false, showLabel, customerUrl } = props || {}

  const { findShop } = useShop()

  const getLastPathOfUrl = (urlString) => {
    const url = new URL(urlString);
    const pathname = url.pathname;
    const pathSegments = pathname.split('/').filter(segment => segment.length > 0);
    return pathSegments.length > 0 ? pathSegments[pathSegments.length - 1] : '';
  }

  const handleClick = async () => {    
    if(customerUrl){
      router.push(customerUrl)
    }else{
      let shop = await findShop()
      let shopId = getLastPathOfUrl(shop?.id)
      router.push(`https://shopify.com/${shopId}/account`)
    }
  }

  return(
   showLabel ? (
    <Button
      fullWidth
      sx={ sx.button }      
      onClick={handleClick}
      startIcon={          
        <Icon name="User" size={24} />         
      }
    >
      My Account 
    </Button>
  ):(
    <IconButton onClick={handleClick}>
      <Icon name="User" size={24} />
    </IconButton>
  )      
  )
}

export default ShopifyAuth

const sx = {
  button: {
    width: '100%',
		color: 'text.primary',
		justifyContent: 'flex-start',
  }
}