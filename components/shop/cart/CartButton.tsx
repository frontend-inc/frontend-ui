import React, { useState, useEffect } from 'react'
import {
	Badge,
	IconButton,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Typography,
} from '@mui/material'
import { useCart } from '../../../hooks'
import { Icon } from '../../../components'
import { getCookie, setCookie } from 'cookies-next'
import { useDebounce } from 'use-debounce'

type CartIconButtonProps = {
	icon?: string
	totalItems: number
	handleClick: () => void
}

const CartIconButton: React.FC<CartIconButtonProps> = (props) => {
	const { totalItems, handleClick, icon = 'ShoppingBag' } = props

	return (
		<IconButton onClick={handleClick}>
			<Badge color="primary" badgeContent={totalItems}>
				<Icon name={icon} size={24} />
			</Badge>
		</IconButton>
	)
}

type CartBtnProps = {
	label?: string
	icon?: string
	totalItems?: number
	handleClick?: () => void
}

const CartBtn: React.FC<CartBtnProps> = (props) => {
	const {
		label = 'Cart',
		icon = 'ShoppingBag',
		totalItems,
		handleClick,
	} = props

	return (
		<ListItem
			disablePadding
			disableGutters
			secondaryAction={
				<Badge badgeContent={totalItems} color="primary" sx={sx.badge} />
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
	variant?: 'icon' | 'button'
	icon?: string
}

const CartButton: React.FC<CartButtonProps> = (props) => {
	const { variant = 'icon', label, icon = 'ShoppingBag' } = props
  
  const [loaded, setLoaded] = useState(false)
  const [debouncedLoaded] = useDebounce(loaded, 1000)

  const { cart, fetchCart, createCart, cartCookie, cartOpen, setCartOpen } = useCart()


  const handleFindOrCreateCart = async () => {
    if(cartCookie?.length > 0 && !cart?.uid){
      let createResp;
      let cartUID = await getCookie(cartCookie)
      if(cartUID && cartUID !== undefined){        
        let fetchResp = await fetchCart(cartUID)        
        if(!fetchResp?.uid){
          createResp = await createCart()
          if(createResp?.uid){
            setCookie(cartCookie, createResp?.uid)
          }
        }
      }else{        
        createResp = await createCart()              
        if(createResp?.uid){
          setCookie(cartCookie, createResp?.uid)
        }
      }
    }
  }

  // Fix: We create an artificial useEffect 
  // since handleFindOrCreateCart event was firing twice 
  // for unknown reasons
  useEffect(() => {
    setLoaded(true)    
  }, [])

  useEffect(() => {
    if(debouncedLoaded == true){
      handleFindOrCreateCart()
    }
  }, [debouncedLoaded])

	return variant == 'icon' ? (
		<CartIconButton
			icon={icon}
			handleClick={() => setCartOpen(!cartOpen)}
			totalItems={cart?.total_items}
		/>
	) : (
		<CartBtn
			icon={icon}
			label={label}
			handleClick={() => setCartOpen(!cartOpen)}
			totalItems={cart?.total_items}
		/>
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
