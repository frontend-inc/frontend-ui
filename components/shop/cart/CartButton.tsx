import React, { useEffect } from 'react'
import { 
  Badge, 
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography   
} from '@mui/material'
import { Icon } from '../../../components'
import { useCart } from '../../../hooks'
import { useAuth } from 'frontend-js'


type CartSmallButtonProps = {
  icon?: string
  totalItems: number
  handleClick: () => void
}

const CartSmallButton: React.FC<CartSmallButtonProps> = (props) => {
  
  const { totalItems, handleClick, icon="ShoppingBag"} = props 
  
  return(
    <IconButton 
      onClick={handleClick}
    >
      <Badge color="primary" badgeContent={totalItems}>
        <Icon name={ icon } size={24} /> 
      </Badge>
    </IconButton>
  )
}

type CartLargeButtonProps = {
  label?: string
  icon?: string
  totalItems?: number
  handleClick?: () => void
}

const CartLargeButton: React.FC<CartLargeButtonProps> = (props) => {
	const { label = 'Cart', icon='ShoppingBag', totalItems, handleClick } = props

	return (
		<ListItem
			disablePadding
			disableGutters
			secondaryAction={
				<Badge 
          badgeContent={totalItems} 
          color="primary" 
          sx={sx.badge} 
        />
			}
		>
			<ListItemButton sx={sx.listItemButton} onClick={handleClick}>
				<ListItemIcon>
					<Icon name={icon} />
				</ListItemIcon>
				<ListItemText
					primary={
						<Typography variant="body1" color="text.primary">
							{label}
						</Typography>
					}
				/>
			</ListItemButton>
		</ListItem>
	)
}


type CartButtonProps = {
  label?: string
  size?: 'small' | 'large'
  icon?: string
}

const CartButton: React.FC<CartButtonProps> = (props) => {  
  const { 
    size='small', 
    label, 
    icon="ShoppingBag"
  } = props 

  const { cart, cartOpen, setCartOpen } = useCart()

  return(
    size == "small" ? (
      <CartSmallButton 
        icon={icon}
        handleClick={() => setCartOpen(!cartOpen)}
        totalItems={cart?.total_items}
      />
    ):(
      <CartLargeButton 
        icon={icon}
        label={label}
        handleClick={() => setCartOpen(!cartOpen)}
        totalItems={cart?.total_items}
      />
    )
  )
}


export default CartButton

const sx = {
	root: {
		pr: 1.5, // Space for the badge count
	},
	button: {
		width: '100%',
		color: 'text.primary',
		justifyContent: 'flex-start',
	},
	listItemButton: {
		px: 1,
	},
	badge: {
		mr: 1,
	},
}
