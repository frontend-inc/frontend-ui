import React, { useState, useEffect } from 'react'
import { useAuth } from 'frontend-js'
import { Button, List } from '@mui/material'
import { Loading, SelectableListItem, Placeholder, AlertModal } from '../..'
import { SubscriptionType } from '../../../types'
import { useSubscriptions } from '../../../hooks'
import { useRouter } from 'next/router'

const SubscriptionList: React.FC = (props) => {
  
  const router = useRouter()

	const {
		delayedLoading: loading,
    subscribe,
    unsubscribe,
		subscriptions,
		findSubscriptions,
	} = useSubscriptions()

	const { currentUser, fetchMe } = useAuth()

	const [openSubscribeModel, setOpenSubscribeModal] = useState(false)
	const [openUnsubscribeModal, setOpenUnsubscribeModal] = useState(false)
	const [activeSubscription, setActiveSubscription] =
		useState<SubscriptionType | null>(null)

	const handleSubscribe = async () => {
    if(activeSubscription?.id){
      const currentUrl = window.location.href
      let resp: any = await subscribe(activeSubscription.id, {
        success_url: currentUrl,
        cancel_url: currentUrl
      })    
      if(resp?.url){
        router.push(resp.url)
      }
    }
	}

	const handleUnsubscribe = async () => { 
    if(currentUser?.stripe_subscription_id){
      let resp = await unsubscribe()
      fetchMe()
    }
	}

	const handleSubscribeClick = async (subscription) => {
		setActiveSubscription(subscription)
		setOpenSubscribeModal(true)
	}

	const handleUnsubscribeClick = () => {
		setActiveSubscription(null)
		setOpenUnsubscribeModal(true)
	}

	useEffect(() => {
		findSubscriptions()
	}, [])

	return (
		<>
			<List 
        sx={{
          ...(loading && sx.loading )
        }}
      >
				{ subscriptions?.map((subscription) => {
						const selected =
							currentUser?.subscription_id === subscription.id
						return (
							<SelectableListItem
								key={subscription.id}
								selected={selected}
								icon="CreditCard"
								title={subscription.name}
								description={subscription.display_price}
								handleClick={() => handleSubscribeClick(subscription)}
							/>
						)
					})}
			</List>
			{!loading && !subscriptions?.length && (
				<Placeholder
					icon="CreditCard"
					title="No subscription plans"
					description="Subscription plans will appear here."
				/>
			)}
			{!loading && currentUser?.stripe_subscription_id && (
				<Button
					fullWidth
					variant="contained"
					color="secondary"
					onClick={handleUnsubscribeClick}
				>
					Cancel Subscription
				</Button>
			)}
			<AlertModal
				loading={loading}
				open={openSubscribeModel}
				title="Confirm Subscription"
				description="You will be redirected to make payment."
				handleConfirm={handleSubscribe}
				handleClose={() => setOpenSubscribeModal(false)}
			/>
			<AlertModal
				loading={loading}
				open={openUnsubscribeModal}
				title="Cancel Subscription"
				description="Are you sure you want to cancel your plan?"
				handleConfirm={handleUnsubscribe}
				handleClose={() => setOpenUnsubscribeModal(false)}
			/>
		</>
	)
}

export default SubscriptionList

const sx = {
  loading: {
    opacity: 0.5
  }
}
