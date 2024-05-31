import React, { useState, useEffect } from 'react'
import { useAuth } from 'frontend-js'
import { Button, Stack } from '@mui/material'
import { Loading, Placeholder, AlertModal } from '../..'
import { PriceType } from '../../../types'
import SubscriptionTableCard from './SubscriptionTableCard'
import { useSubscriptions } from '../../../hooks'

const SubscriptionTable: React.FC = (props) => {
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
	const [activeSubscriptionTable, setActiveSubscriptionTable] =
		useState<PriceType | null>(null)

	const handleSubscribe = async () => {
		let resp
		if (activeSubscriptionTable?.id) {
			resp = await subscribe(activeSubscriptionTable?.id)
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
		setActiveSubscriptionTable(subscriptionPlan)
		setOpenSubscribeModal(true)
	}

	const handleUnsubscribeClick = () => {
		setActiveSubscriptionTable(null)
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
			<Stack direction={{ xs: 'column', sm: 'row'}}>
				{!loading &&
					subscriptionPlans?.map((subscriptionPlan) => {
						const selected =
							currentUser?.subscription_plan_id === subscriptionPlan.id
						return (
							<SubscriptionTableCard
								key={subscriptionPlan.id}
								selected={selected}                
                //@ts-ignore 
								subscriptionPlan={
                  subscriptionPlan
                }
								handleClick={() => handleSubscribeClick(subscriptionPlan)}
							/>
						)
					})}
			</Stack>
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

export default SubscriptionTable
