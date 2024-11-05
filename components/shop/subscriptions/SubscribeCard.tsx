'use client'

import React from 'react'
import { SubscriptionPlan } from '../../../components'
import { useAlerts, useApp, useShop, useSubscription } from '../../../hooks'
import { useAuth } from 'frontend-js'

export default function SubscribeCard() {

  const { 
    logo,
    name,
    description, 
    setAuthOpen
  } = useApp()
	
	const { currentUser } = useAuth()

  const {
    subscriptionPrice,    
  } = useShop()

  const { 
    loading,
    subscribe 
  } = useSubscription()

  const { showAlertError } = useAlerts()

  const handleSubscribe = async () => {
		if (!currentUser?.id) return setAuthOpen(true)
    const currentUrl = window.location.href
    let stripe = await subscribe({
      success_url: currentUrl,
      cancel_url: currentUrl,
    }) as any 
    if(stripe?.errors){      
      showAlertError(stripe.errors)
    }else if(stripe?.data?.url){ 
      if (window.parent === window) {     
        window.open(stripe.data.url, '_blank')
      }else{
        parent.window.open(stripe.data.url, '_blank')
      }
    }    
  }

	return (
    <div className="w-full flex items-center justify-center">
      <SubscriptionPlan 
        loading={ loading }
        label="Subscribe"
        title="Upgrade to premium"
        subtitle="To continue please subscribe to our premium plan"
        price={ subscriptionPrice }
        description={ description }
        handleClick={ handleSubscribe }
      />
    </div>
	)
}
