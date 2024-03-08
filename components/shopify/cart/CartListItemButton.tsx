import React, { useContext } from 'react'
import { 
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Badge, 
 } from '@mui/material'
import { ShopContext } from 'frontend-shopify'
import { AppContext } from '../../../context'

type CartListItemButtonProps = {
	icon?: string
	editing?: boolean
	label?: string
}

const CartListItemButton: React.FC<CartListItemButtonProps> = (props) => {
	const {
		label = 'Cart',
		editing = false,
		icon = 'ShoppingCart',
	} = props
	
  const { cart, toggleCart } = useContext(ShopContext) as any;
  const { setMenuOpen  } = useContext(AppContext)

	const handleCartClick = () => {
		setMenuOpen(false)
		if (!editing) {
			toggleCart()
		}
	}

	return (
		<ListItem 
      disablePadding
      disableGutters
      secondaryAction={        
        <Badge 
          badgeContent={cart?.totalQuantity} 
          color="primary"
          sx={ sx.badge }
        >
        </Badge>
      }
    >
      <ListItemButton 
        onClick={ handleCartClick }
      >
				<ListItemText
          primary={
            <Typography variant="button" color="text.primary">
              { label }
            </Typography>            
          }
        />
      </ListItemButton>
		</ListItem>
	)
}

export default CartListItemButton

const sx = {
  badge: {
    mr: 1
  }
}

