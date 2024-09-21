import React from 'react'
import { useStripe } from '../../../hooks'
import { Button } from '@mui/material'

const StripeCustomerPortalButton: React.FC = () => {
  
  const { 
    loading, 
    stripeCustomerPortal 
  } = useStripe()

  const handleClick = async () => {    
    let url = window.location.href
    let resp = await stripeCustomerPortal(url)    
    if(resp?.data?.url){
      window.open(resp?.data?.url, '_blank')
    }
  }

  return (
    <Button
      variant="contained"
      color="primary"
      onClick={handleClick}
    >
      {loading ? 'Connecting...' : 'Manage Payments with Stripe'}
    </Button>
  )
}

export default StripeCustomerPortalButton

