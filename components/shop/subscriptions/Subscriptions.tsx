import React, { useState, useEffect } from 'react'
import { useAuth } from 'frontend-js'
import { Button, List } from '@mui/material'
import { Loading, SelectableListItem, Placeholder, AlertModal } from '../..'
import { SubscriptionType } from '../../../types'
import { useSubscriptions } from '../../../hooks'

const SubscriptionList: React.FC = (props) => {
	const {
		delayedLoading: loading,
		subscriptions,
		findSubscriptions,
		reloadSubscriptions,
	} = useSubscriptions()

	const { currentUser, fetchMe } = useAuth()

	const [openSubscribeModel, setOpenSubscribeModal] = useState(false)
	const [openUnsubscribeModal, setOpenUnsubscribeModal] = useState(false)
	const [activeSubscription, setActiveSubscription] =
		useState<SubscriptionType | null>(null)

	const handleSubscribe = async () => {
	}

	const handleUnsubscribe = async () => {
	}

	const handleSubscribeClick = (subscription) => {
		setActiveSubscription(subscription)
		setOpenSubscribeModal(true)
	}

	const handleUnsubscribeClick = () => {
		setActiveSubscription(null)
		setOpenUnsubscribeModal(true)
	}

	useEffect(() => {
		if (currentUser?.id) {
			findSubscriptions()
		}
	}, [currentUser?.id])

	return (
		<>
			<Loading loading={loading} />
			<List>
				{!loading &&
					subscriptions?.map((subscription) => {
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
				description="Confirming your subscription will charge your card on file."
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
