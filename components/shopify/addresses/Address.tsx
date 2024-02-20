import React, { useContext, useEffect, useState } from 'react'
import { AuthScreen, AlertModal, LayoutLoader } from '../../../components'
import { Button, Stack } from '@mui/material'
import { useAddresses } from 'frontend-shopify'
import { AddressForm } from '../../../components/shopify'
import { AppContext } from '../../../context'
import { useRouter } from 'next/router'

type AddressProps = {
	title?: string
	subtitle?: string
}

const Address: React.FC<AddressProps> = (props) => {
	const router = useRouter()
	let { address_id: addressId } = router?.query
	if (addressId == 'new') {
		addressId = null
	}

	const { clientUrl } = useContext(AppContext)
	const [showDeleteModal, setShowDeleteModal] = useState(false)

	const {		
		title = 'Customer Addresses',
		subtitle = 'Manage your addresses',
	} = props || {}

	const {
		loading,
		address,
		handleChange,
		updateCustomerAddress,
		createCustomerAddress,
		deleteCustomerAddress,
		findCustomerAddress,
	} = useAddresses()

	const handleSubmit = async () => {
		if (address?.id) {
			await updateCustomerAddress(address)
		} else {
			await createCustomerAddress(address)
		}
	}

	const handleDeleteClick = () => {
		setShowDeleteModal(true)
	}

	const handleDeleteAddress = async () => {
		await deleteCustomerAddress(address?.id)
		router.push(`${clientUrl}/shopify/addresses`)
	}

	useEffect(() => {
		if (addressId) {
			findCustomerAddress(addressId)
		}
	}, [addressId])

	return (
		<LayoutLoader loading={loading}>
			<AuthScreen title={title} subtitle={subtitle}>
				<Stack spacing={1}>
					<AddressForm address={address} handleChange={handleChange} />
					<Button
						fullWidth
						variant="contained"
						color="primary"
						onClick={handleSubmit}
					>
						Save Address
					</Button>
					<Button
						fullWidth
						variant="outlined"
						color="primary"
						onClick={handleDeleteClick}
					>
						Delete Address
					</Button>
				</Stack>
				<AlertModal
					open={showDeleteModal}
					handleClose={() => setShowDeleteModal(false)}
					handleConfirm={handleDeleteAddress}
				/>
			</AuthScreen>
		</LayoutLoader>
	)
}

export default Address
