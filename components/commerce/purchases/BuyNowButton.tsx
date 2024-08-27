import React, { useContext, useState, useEffect } from 'react'
import { useAuth } from 'frontend-js'
import { AppContext } from '../../../context'
import { Box, Stack, Typography, Button } from '@mui/material'
import { Icon, IconLoading, AlertModal } from '../../../components'
import { usePayments } from '../../../hooks'
import { isPurchased } from '../../../helpers'

type BuyNowButtonProps = {
	size?: 'small' | 'medium' | 'large'
	resource: any
	buttonText?: string
	justifyContent?: 'center' | 'flex-start' | 'flex-end'
}

const BuyNowButton: React.FC<BuyNowButtonProps> = (props) => {
	const {
		size = 'large',
		resource,
		buttonText = 'Buy Now',
		justifyContent = 'flex-start',
	} = props || {}
	const {
		available_for_sale: availableForSale,
		display_amount: displayAmount,
		stripe_amount: amount,
	} = resource || {}

	const [purchased, setPurchased] = useState(false)
	const { fetchMe, currentUser } = useAuth()
	const { setCreditCardOpen, setAuthOpen } = useContext(AppContext)

	const { loading, purchase } = usePayments({
		url: '/api/v1/payments',
	})

	const [purchaseModal, setPurchaseModal] = useState(false)

	const handleClick = () => {
		if (!currentUser?.id) return setAuthOpen(true)
		if (!currentUser?.credit_card_id) return setCreditCardOpen(true)
		setPurchaseModal(true)
	}

	const handlePurchase = async () => {
		if (!currentUser?.id) return setAuthOpen(true)
		if (!currentUser?.credit_card_id) return setCreditCardOpen(true)
		let resp = await purchase(resource?.id)
		if (resp?.data?.id) {
			setPurchased(true)
			setPurchaseModal(false)
			fetchMe()
		}
	}

	return (
		<Box>
			<Stack direction="column" spacing={1} alignItems={justifyContent}>
				<Button
					sx={sx.button}
					size={size}
					variant="contained"
					color="primary"
					onClick={handleClick}
					disabled={!availableForSale}
					startIcon={
						<>
							{purchased && (
								<Icon name="CheckCircle" color="primary.contrastText" />
							)}
							{!purchased && availableForSale == true && (
								<Icon name="CreditCard" color={'primary.contrastText'} />
							)}
						</>
					}
					endIcon={<IconLoading loading={loading} />}
				>
					{purchased
						? 'Purchased'
						: `${buttonText} ${displayAmount ? displayAmount : ''}`}
				</Button>
			</Stack>
			<AlertModal
				loading={loading}
				open={purchaseModal}
				title="Confirm Purchase"
				description={`Are you sure you want to purchase for ${displayAmount}?`}
				handleConfirm={handlePurchase}
				handleClose={() => setPurchaseModal(false)}
			/>
		</Box>
	)
}

export default BuyNowButton

const sx = {
	button: {
		width: {
			sm: 240,
			xs: '100%',
		},
	},
}
