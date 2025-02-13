'use client'

import React, { useEffect, useState } from 'react'
import { AuthScreen, AlertModal } from '../..'
import { Button } from '@nextui-org/react'
import { useAddresses } from 'frontend-shopify'
import { ShopifyAddressForm } from '..'
import { useApp } from '../../../hooks'
import { useRouter, useParams } from 'next/navigation'

type AddressProps = {
	title?: string
	subtitle?: string
}

type AddressRouterParams = {
	address_id: string | null
}

const Address: React.FC<AddressProps> = (props) => {
	const router = useRouter()
	let { address_id: addressId } = useParams() as any
	if (addressId == 'new') {
		addressId = null
	}

	const { clientUrl } = useApp()
	const [showDeleteModal, setShowDeleteModal] = useState(false)

	const { title = 'Customer Addresses', subtitle = 'Manage your addresses' } =
		props || {}

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
		<AuthScreen title={title} subtitle={subtitle}>
			<div className="flex flex-col space-y-3">
				<ShopifyAddressForm address={address} handleChange={handleChange} />
				<Button fullWidth onPress={handleSubmit}>
					Save Address
				</Button>
				<Button fullWidth variant="ghost" onPress={handleDeleteClick}>
					Delete Address
				</Button>
			</div>
			<AlertModal
				open={showDeleteModal}
				handleClose={() => setShowDeleteModal(false)}
				handleConfirm={handleDeleteAddress}
			/>
		</AuthScreen>
	)
}

export default Address
