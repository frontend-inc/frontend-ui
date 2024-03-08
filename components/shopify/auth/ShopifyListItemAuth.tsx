import React from 'react'
import { 
  ListItem, 
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography
} from '@mui/material'
import { useShop } from 'frontend-shopify'
import { Icon } from '../..'
import { useRouter } from 'next/router'

type ShopifyAuthProps = {
  editing?: boolean
  customerUrl?: string
}

const ShopifyListItemAuth: React.FC<ShopifyAuthProps> = (props) => {

  const router = useRouter()
  const { editing=false, customerUrl } = props || {}

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
    <ListItem 
      disablePadding
      disableGutters
    >
      <ListItemButton 
        onClick={ handleClick }
      >
        <ListItemIcon>
          <Icon name="User" size={24} />
        </ListItemIcon>
        <ListItemText primary={
          <Typography variant="button" color="text.primary">
            My Account
          </Typography>
        }
        />
      </ListItemButton>
    </ListItem>    
  )      
}

export default ShopifyListItemAuth
