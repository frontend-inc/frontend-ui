import React from 'react'
import { PrimaryButton } from '../../../components'
import { useCart } from '../../../hooks'

type AddToCartButtonProps = {
  productId: string,
  availableForSale?: boolean,
}

const AddToCartButton = (props: AddToCartButtonProps) => {
  const { productId, availableForSale } = props
  const { 
    loading,     
    setCartOpen,
    addToCart 
  } = useCart()

  const handleClick = async () => {
    await addToCart(productId)
    setCartOpen(true)
  }

  return (
    <PrimaryButton 
      loading={loading}      
      onClick={handleClick} 
      disabled={!availableForSale}
      size="large"
    >
      Add to Cart
    </PrimaryButton>
  )
}

export default AddToCartButton
