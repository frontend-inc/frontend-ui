import React, { useContext, useState, useEffect } from 'react'
import { StripeContext } from '../../../context'
import { Box, Button, List } from '@mui/material'
import { useAuth } from 'frontend-js'
import {
	Loading,
	SelectableListItem,
	StripeCreditCard,
	Placeholder,
	AlertModal,
} from '../../../components'
import { useCreditCards } from '../../../hooks'

const CreditCards: React.FC = () => {
	const { stripePublishableKey } = useContext(StripeContext)

	const {
		delayedLoading: loading,
		errors,
		creditCard,
		setCreditCard,
		createCreditCard,
		deleteCreditCard,
		selectCreditCard,
		creditCards,
		findCreditCards,
		reloadCreditCards,
	} = useCreditCards()

	const [isEditing, setIsEditing] = useState(false)
	const [openDeleteModal, setOpenDeleteModal] = useState(false)

	const { currentUser, fetchMe } = useAuth()

	const handleAddCreditCardClick = () => {
		setCreditCard({})
		setIsEditing(true)
	}

	const handleDelete = async () => {
		if (creditCard?.id) {
			setOpenDeleteModal(false)
			await deleteCreditCard(creditCard?.id)
			reloadCreditCards()
		}
	}

	const handleSubmit = async (token) => {
		let resp = await createCreditCard({ token })
		if (resp?.id) {
			setIsEditing(false)
			reloadCreditCards()
		}
	}

	const handleDeleteClick = (creditCard) => {
		setCreditCard(creditCard)
		setOpenDeleteModal(true)
	}

	const handleClick = async (creditCard) => {
		let resp = await selectCreditCard(creditCard.id)
		if (resp?.id) {
			findCreditCards()
			fetchMe()
		}
	}

	useEffect(() => {
		findCreditCards()
	}, [])

	useEffect(() => {
		if (!currentUser?.id) {
			fetchMe()
		}
	}, [currentUser])

	return (
		<>
			{!isEditing ? (
				<>
					<Loading loading={loading} />
					<List>
						{!loading &&
							creditCards?.map((creditCard) => {
                const selected = creditCard.id == currentUser?.credit_card_id
                return(
								<SelectableListItem
									key={creditCard.id}
									selected={selected}
									icon={'CreditCard'}
									title={creditCard.last4}
									description={creditCard.brand}
									handleClick={() => handleClick(creditCard)}
									handleDelete={
                    selected ? 
                      undefined : 
                      () => handleDeleteClick(creditCard)}
								/>
							)})}
					</List>
					{!loading && !creditCards?.length && (
						<Placeholder
							icon="CreditCard"
							title="No Credit Cards"
							description="Add a credit card to get started"
						/>
					)}
					<Box sx={sx.actions}>
						<Button variant="contained" onClick={handleAddCreditCardClick}>
							Add Credit Card
						</Button>
					</Box>
				</>
			) : (
        <Box py={2}>
          <StripeCreditCard
            publishableKey={stripePublishableKey}
            handleSubmit={handleSubmit}
            handleCancel={() => setIsEditing(false)}
          />
        </Box>
			)}
			<AlertModal
				open={openDeleteModal}
				title="Delete Credit Card"
				description="Are you sure you want to delete this credit card?"
				handleConfirm={handleDelete}
				handleClose={() => setOpenDeleteModal(false)}
			/>
		</>
	)
}

export default CreditCards

const sx = {
	actions: {
		width: '100%',
		display: 'flex',
		justifyContent: 'flex-end',
	},
}
