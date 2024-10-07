import React from 'react'
import { useApp, useCart } from '../../../hooks'
import { Image, Icon } from '../../../components'
import { Typography } from '../../../tailwind'
import { useRouter } from 'next/router'
import { LineItemType } from '../../../types'
import { cn } from '../../../shadcn/lib/utils'

type CartQuantityInputProps = {
  quantity: number
  handleAddQuantity: (event: any) => void
  handleRemoveQuantity: (event: any) => void
}

const CartQuantityInput: React.FC<CartQuantityInputProps> = (props) => {
  const { quantity, handleAddQuantity, handleRemoveQuantity } = props

  return (
    <div className="inline-flex rounded-md shadow-sm" role="group">
      <button
        onClick={handleRemoveQuantity}
        className="px-2 py-1 text-sm font-medium text-foreground bg-background border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700"
      >
        <Icon name="Minus" size={16} />
      </button>
      <button
        className="px-2 py-1 text-sm font-medium text-foreground bg-background border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700"
      >
        {quantity}
      </button>
      <button
        onClick={handleAddQuantity}
        className="px-2 py-1 text-sm font-medium text-foreground bg-background border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700"
      >
        <Icon name="Plus" size={16} />
      </button>
    </div>
  )
}

type CartLineItemProps = {
  lineItem: LineItemType
}

const CartLineItem: React.FC<CartLineItemProps> = (props) => {
  const { lineItem } = props

  const router = useRouter()
  const { clientUrl } = useApp()

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
    router.push(`${clientUrl}/products/${product?.handle}`)
    setCartOpen(false)
  }

  return (
    <div className={cn(
      "flex items-center justify-between py-2",
      loading && "opacity-30"
    )}>
      <div className="flex items-center pt-1">
        <div className="relative mr-4 w-24 h-24">
          <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none z-50 transform translate-x-1/2 -translate-y-1/2 bg-primary rounded-full">
            {quantity}
          </span>
          <Image
            alt={product?.title || ''}
            src={product?.image?.url}
            height={96}
            width={96}
            aspectRatio={1.0}
            onClick={handleClick}
            className="cursor-pointer"
          />
        </div>
        <div className='flex flex-col space-y-2'>
          <Typography variant='body1'>{product?.title}</Typography>          
          <Typography color='text.secondary' variant='body2'>{product?.display_price}</Typography>            
          <CartQuantityInput
            quantity={quantity}
            handleAddQuantity={handleAddQuantity}
            handleRemoveQuantity={handleRemoveQuantity}
          />          
        </div>
      </div>
      <button
        onClick={handleRemoveFromCart}
        className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
      >
        <Icon name="X" />
      </button>
    </div>
  )
}

export default CartLineItem