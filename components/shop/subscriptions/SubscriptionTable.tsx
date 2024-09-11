import React, { useState, useEffect } from 'react'
import { useAuth } from 'frontend-js'
import { Stack } from '@mui/material'
import { Loading, Placeholder } from '../..'
import SubscriptionTableCard from './SubscriptionTableCard'
import { useSubscriptions, useApp } from '../../../hooks'
import { useRouter } from 'next/router'

const SubscriptionTable: React.FC = () => {

  const router = useRouter()
	const {
		delayedLoading: loading,
    subscribe,
		subscriptions,
		findSubscriptions,
	} = useSubscriptions()

	const { currentUser, fetchMe } = useAuth()
  const { setAuthOpen } = useApp()

	const handleSubscribe = async (subscription) => {		
		if (!currentUser?.id) return setAuthOpen(true)
    let currentUrl = window.location.href
    let resp = await subscribe(subscription?.id, {
      success_url: currentUrl,
      cancel_url: currentUrl
    })     
    //@ts-ignore   
    if(resp?.url){
      //@ts-ignore
      router.push(resp.url)
    }    
	}

	useEffect(() => {
		findSubscriptions()		
	}, [])

	return (
		<>
			<Stack 
        sx={{
          ...sx.table,
          ...(loading && sx.loading)
        }} 
        direction={{ xs: 'column', sm: 'row' }} spacing={2}>
				{ subscriptions?.map((subscription) => {
						const selected = currentUser?.subscription_id === subscription.id
						return (
							<SubscriptionTableCard
								key={subscription.id}
								selected={selected}
								//@ts-ignore
								subscription={subscription}
								handleClick={() => handleSubscribe(subscription)}
							/>
						)
					})}
			</Stack>
			{!loading && !subscriptions?.length && (
				<Placeholder
					icon="CreditCard"
					title="No subscription plans"
					description="Subscription plans will appear here."
				/>
			)}
		</>
	)
}

export default SubscriptionTable

const sx = {
	table: {
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
	},
  loading: {
    opacity: 0.5
  },
	divider: {
		height: '100%',
		borderRight: '1px solid',
		borderColor: 'divider',
	},
}
