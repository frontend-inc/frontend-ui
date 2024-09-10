import React, { useState, useEffect } from 'react'
import { useAuth } from 'frontend-js'
import { Stack } from '@mui/material'
import { Loading, Placeholder } from '../..'
import SubscriptionTableCard from './SubscriptionTableCard'
import { useSubscriptions, useApp } from '../../../hooks'

const SubscriptionTable: React.FC = () => {
	const {
		delayedLoading: loading,
		subscriptions,
		findSubscriptions,
	} = useSubscriptions()

	const { currentUser, fetchMe } = useAuth()
  const { setAuthOpen } = useApp()


	const handleSubscribeClick = (subscription) => {
		const { id: userId, stripe_customer_id, credit_card_id } = currentUser || {}
		if (!userId) return setAuthOpen(true)
	}

	useEffect(() => {
		if (currentUser?.id) {
			findSubscriptions()
		}
	}, [currentUser?.id])

	return (
		<>
			<Loading loading={loading} />
			<Stack sx={sx.table} direction={{ xs: 'column', sm: 'row' }} spacing={2}>
				{!loading &&
					subscriptions?.map((subscription) => {
						const selected =
							currentUser?.subscription_id === subscription.id
						return (
							<SubscriptionTableCard
								key={subscription.id}
								selected={selected}
								//@ts-ignore
								subscription={subscription}
								handleClick={() => handleSubscribeClick(subscription)}
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
	cancelLink: {
		py: 2,
	},
	footerLinks: {
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
	},
	divider: {
		height: '100%',
		borderRight: '1px solid',
		borderColor: 'divider',
	},
}
