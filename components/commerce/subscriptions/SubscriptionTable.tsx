import React, { useContext, useState, useEffect } from 'react'
import { useAuth } from 'frontend-js'
import { AppContext } from '../../../context'
import { Link, Box, Stack } from '@mui/material'
import { Loading, Placeholder, AlertModal } from '../..'
import { PriceType } from '../../../types'
import SubscriptionTableCard from './SubscriptionTableCard'
import { useSubscriptions } from '../../../hooks'

const SubscriptionTable: React.FC = () => {
	const {
		delayedLoading: loading,
		subscriptionPlans,
		subscribe,
		unsubscribe,
		findSubscriptionPlans,
		reloadSubscriptionPlans,
	} = useSubscriptions()

	const { currentUser, fetchMe } = useAuth()

  const { setCreditCardOpen, setAuthOpen } = useContext(AppContext)

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
    const { id: userId, stripe_customer_id, credit_card_id } = currentUser || {}
    if(!userId) return setAuthOpen(true);
    if(!stripe_customer_id || !credit_card_id){
      return setCreditCardOpen(true)
    }
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
			<Stack sx={ sx.table } direction={{ xs: 'column', sm: 'row'}} spacing={2}>
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
      <Stack 
        sx={ sx.footerLinks }
        direction={'row'} 
        my={2} 
        spacing={1}
        divider={ 
          <Box sx={ sx.divider } />
        }
      >        
        { currentUser?.id && (
          <Link
            sx={ sx.cancelLink }
            color="text.secondary"
            onClick={() => setCreditCardOpen(true)}
          >
            Payment Methods
          </Link>
			  )}
        {!loading && currentUser?.stripe_subscription_id && (
          <Link
            sx={ sx.cancelLink }
            color="text.secondary"
            onClick={handleUnsubscribeClick}
          >
            Cancel Subscription
          </Link>
        )}
      </Stack>
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

const sx = {
  table: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  cancelLink: {
    py: 2
  },
  footerLinks: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  divider: {
    height: '100%',
    borderRight: '1px solid',
    borderColor: 'divider'
  }
}
