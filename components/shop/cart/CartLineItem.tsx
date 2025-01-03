'use client'

import React, { useState } from 'react'
import { useCart } from '../../../hooks'
import { Icon } from '../../../components'
import { Card, Badge, Image } from '@nextui-org/react'
import { Typography } from '../../../components'
import { LineItemType } from '../../../types'
import { ProductModal } from '../../../components'
import { Button, ButtonGroup } from '@nextui-org/react'
import { cn } from '@nextui-org/react'
import { Plus, Minus } from 'lucide-react'

type CartQuantityInputProps = {
	quantity: number
	handleAddQuantity: (event: any) => void
	handleRemoveQuantity: (event: any) => void
	buttonClasses?: string
}

const CartQuantityInput: React.FC<CartQuantityInputProps> = (props) => {
	const { quantity, handleAddQuantity, handleRemoveQuantity } = props

	return (
		<ButtonGroup
			variant="light"
			className="border-2 border-divider rounded-xl w-[100px]"
			size="sm"
		>
			<Button
				isIconOnly
				size="sm"
				className="min-w-8"
				onPress={handleRemoveQuantity}
			>
				<Minus size={20} />
			</Button>
			<Button isIconOnly size="sm" className="min-w-8 w-full">
				{quantity}
			</Button>
			<Button
				isIconOnly
				size="sm"
				className="min-w-8"
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
					<Badge color="primary" content={quantity}>						
            <Card 
              isPressable 
              onPress={ () => handleClick() }
              className="w-[72px] h-[72px] rounded-lg"
            >
							<Image
                removeWrapper 
								alt={product?.title || ''}
								src={product?.image?.url}
								height={72}
								width={72}
								className="w-full object-cover"
							/>
						</Card>
					</Badge>
					<div className="flex flex-col space-y-1">
						<Typography variant="body1">{product?.title}</Typography>
						<Typography className="text-foreground/70" variant="body2">
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
						className="h-4 w-4 text-foreground/70 hover:text-foreground"
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
