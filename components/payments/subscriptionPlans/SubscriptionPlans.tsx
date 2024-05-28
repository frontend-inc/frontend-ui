import React, { useState, useEffect } from 'react'
import { useAuth } from 'frontend-js'
import { Button, List } from '@mui/material'
import { Loading, SelectableListItem, Placeholder, AlertModal } from '../..'
import { SubscriptionPlanType } from '../../../types'
import { useSubscriptions } from '../../../hooks'

const SubscriptionPlanList: React.FC = (props) => {
	const {
		delayedLoading: loading,
		subscriptionPlans,
		subscribe,
		unsubscribe,
		findSubscriptionPlans,
		reloadSubscriptionPlans,
	} = useSubscriptions()

	const { currentUser, fetchMe } = useAuth()

	const [openSubscribeModel, setOpenSubscribeModal] = useState(false)
	const [openUnsubscribeModal, setOpenUnsubscribeModal] = useState(false)
	const [activeSubscriptionPlan, setActiveSubscriptionPlan] =
		useState<SubscriptionPlanType | null>(null)

	const handleSubscribe = async () => {
		let resp
		if (activeSubscriptionPlan?.id) {
			resp = await subscribe(activeSubscriptionPlan?.id)
		}
		if (resp?.id) {
			setOpenSubscribeModal(false)
			await reloadSubscriptionPlans()
			fetchMe()
		}
	}

	const handleUnsubscribe = async () => {
		const resp = await unsubscribe()
		if (resp?.id) {
			setOpenUnsubscribeModal(false)
			await reloadSubscriptionPlans()
			fetchMe()
		}
	}

	const handleSubscribeClick = (subscriptionPlan) => {
		setActiveSubscriptionPlan(subscriptionPlan)
		setOpenSubscribeModal(true)
	}

	const handleUnsubscribeClick = () => {
		setActiveSubscriptionPlan(null)
		setOpenUnsubscribeModal(true)
	}

	useEffect(() => {
		if (currentUser?.id) {
			findSubscriptionPlans()
		}
	}, [currentUser?.id])

	return (
		<>
			<Loading loading={loading} />
			<List>
				{!loading &&
					subscriptionPlans?.map((subscriptionPlan) => {
						const selected =
							currentUser?.subscription_plan_id === subscriptionPlan.id
						return (
							<SelectableListItem
								key={subscriptionPlan.id}
								selected={selected}
								icon="CreditCard"
								title={subscriptionPlan.title}
								description={subscriptionPlan.description}
								handleClick={() => handleSubscribeClick(subscriptionPlan)}
							/>
						)
					})}
			</List>
			{!loading && !subscriptionPlans?.length && (
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

export default SubscriptionPlanList

const sx = {
	actions: {
		width: '100%',
		display: 'flex',
		justifyContent: 'flex-end',
	},
}
