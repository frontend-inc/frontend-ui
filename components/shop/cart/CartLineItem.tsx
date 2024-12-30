'use client'

import React, { useState } from 'react'
import { useCart } from '../../../hooks'
import { Icon } from '../../../components'
import { Badge, Image } from '@nextui-org/react'
import { Typography } from '../../../components'
import { LineItemType } from '../../../types'
import { ProductModal } from '../../../components'
import { Button, ButtonGroup } from '@nextui-org/react'
import { cn } from 'frontend-shadcn'
import { Plus, Minus } from 'lucide-react'

type CartQuantityInputProps = {
	quantity: number
	handleAddQuantity: (event: any) => void
	handleRemoveQuantity: (event: any) => void
	buttonClasses?: string
}

const CartQuantityInput: React.FC<CartQuantityInputProps> = (props) => {
	const {
		quantity,
		handleAddQuantity,
		handleRemoveQuantity,
	} = props

	return (
		<ButtonGroup size='sm'>
			<Button
				isIconOnly								
        size='sm'
				onPress={handleRemoveQuantity}
			>
				<Minus size={20} />
			</Button>
			<Button
        size='sm'
				isIconOnly				
			>
				{quantity}
			</Button>
			<Button
        size='sm'
				isIconOnly				
				onPress={handleAddQuantity}
			>
				<Plus size={20} />
			</Button>
		</ButtonGroup>
	)
}

type CartLineItemProps = {
	lineItem: LineItemType
}

const CartLineItem: React.FC<CartLineItemProps> = (props) => {
	const { lineItem } = props

	const [open, setOpen] = useState(false)
	const { loading, addQuantity, removeQuantity, removeFromCart } = useCart()

	const { setCartOpen } = useCart()

	const { id, quantity, product } = lineItem || {}

	const handleAddQuantity = async () => {
		await addQuantity(product?.id)
	}

	const handleRemoveQuantity = async () => {
		await removeQuantity(product?.id)
	}

	const handleRemoveFromCart = async () => {
		await removeFromCart(product?.id)
	}

	const handleClick = () => {
		setOpen(true)
		//setCartOpen(false)
	}

	return (
		<>
			<div
				className={cn(
					'flex items-center justify-between py-2',
					loading && 'opacity-30'
				)}
			>
				<div className="flex space-x-4 items-center pt-1">					
          <Badge content={ quantity}>
            <button className="p-0" onClick={handleClick}>
              <Image
                alt={product?.title || ''}
                // @ts-ignore
                src={product?.image?.url}
                height={72}
                width={72}									
                className="w-full cursor-pointer object-cover"
              />
            </button>
            </Badge>
					<div className="flex flex-col space-y-1">
						<Typography variant="body1">{product?.title}</Typography>
						<Typography className="text-muted-foreground" variant="body2">
							{product?.display_price}
						</Typography>
						<CartQuantityInput
							quantity={quantity}
							handleAddQuantity={handleAddQuantity}
							handleRemoveQuantity={handleRemoveQuantity}
						/>
					</div>
				</div>
        <Button 
          isIconOnly
          size="sm"
          variant="light"
          radius="full"
          onPress={handleRemoveFromCart}
        >
					<Icon
						name="X"
						className="h-4 w-4 text-muted-foreground hover:text-foreground"
					/>
        </Button>				
			</div>
			<ProductModal
				open={open}
				handleClose={() => setOpen(false)}
				productId={product?.handle}
			/>
		</>
	)
}

export default CartLineItem
