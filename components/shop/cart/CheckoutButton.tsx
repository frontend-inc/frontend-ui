import React from 'react'
import { PrimaryButton } from '../..'
import { useCart } from '../../../hooks'


const CheckoutButton = () => {
  const { 
    loading,     
    checkout 
  } = useCart()

  const handleClick = async () => {
    let currentUrl = window.location.href
    let resp = await checkout({
      success_url: currentUrl,
      cancel_url: currentUrl
    })
    let url = resp?.data?.url 
    window.open(url)
  }

  return (
    <PrimaryButton 
      fullWidth 
      loading={loading}      
      onClick={handleClick}       
      size="large"
    >
      Checkout 
    </PrimaryButton>
  )
}

export default CheckoutButton
