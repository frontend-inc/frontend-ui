import React from 'react'
import { Placeholder, PrimaryButton } from '../../../components'
import { useAlerts, useApp } from '../../../hooks'

const StripeCustomerPortal = () => {
  const { app } = useApp()
  const { showAlertError } = useAlerts()

  const handleClick = () => {
    if(app?.stripe_customer_portal_url){
      window.open(app.stripe_customer_portal_url, '_blank')
    }else{
      showAlertError('Stripe Customer Portal not enabled.')
    }
  }

  return(
    <Placeholder       
      icon="CreditCard"
      title="Stripe Customer Portal" 
      description="Manage your subscription and order history."
      buttons={
        <PrimaryButton 
         onClick={ handleClick }
         icon='ExternalLink'
        >
          Open Customer Portal
        </PrimaryButton>
      }
    />
  )
}

export default StripeCustomerPortal