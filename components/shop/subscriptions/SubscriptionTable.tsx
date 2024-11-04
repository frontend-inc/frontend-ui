'use client'

import React from 'react'
import { useAuth } from 'frontend-js'
import { Placeholder } from '../..'
import SubscriptionTableCard from './SubscriptionTableCard'
import { useSubscription, useShop, useApp } from '../../../hooks'
import { useRouter } from 'next/navigation'
import { cn } from 'frontend-shadcn'

export default function SubscriptionTable() {
	const router = useRouter()

  const {
		delayedLoading: loading,
		subscribe,
	} = useSubscription()

	const { currentUser } = useAuth()
	const { 
    name,
    description,
    enableSubscription,
    setAuthOpen 
  } = useApp()

  const {    
    subscriptionPrice,
  } = useShop()

	const handleSubscribe = async () => {
		if (!currentUser?.id) return setAuthOpen(true)
		let currentUrl = window.location.href
		let resp = await subscribe({
			success_url: currentUrl,
			cancel_url: currentUrl,
		})
		if (resp?.url) {
			router.push(resp.url)
		}
	}

	return (
		<>
			<div
				className={cn(
					'w-full flex justify-center items-center',
					'sm:flex-row flex-col space-y-2 sm:space-y-0 sm:space-x-2',
					loading && 'opacity-50'
				)}
			>
        <SubscriptionTableCard
          selected={currentUser?.paid}
          label="Membership"
          title={`${name} Membership`}
          subtitle="Subscribe to our membership plan to get access to exclusive content."
          price={ subscriptionPrice }  
          description={ description }        
          buttonText="Subscribe"
          handleClick={ handleSubscribe }
        />
			</div>
			{!loading && !enableSubscription && (
				<Placeholder
					icon="CreditCard"
					title="No subscription plans"
					description="Subscription plans will appear here."
				/>
			)}
		</>
	)
}
