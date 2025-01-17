'use client'

import React, { useEffect, useState } from 'react'
import { AuthScreen, AlertModal } from '../../../components'
import { Button } from '@nextui-org/react'
import { useAddresses } from 'frontend-shopify'
import { ShopifyAddressList } from '../../../components/shopify'
import { useApp } from '../../../hooks'
import { useRouter } from 'next/navigation'
import { getShopifyIdFromGid } from 'frontend-shopify'
import { RiAddFill } from '@remixicon/react'

type AddressesProps = {
	title?: string
	subtitle?: string
}

const Addresses: React.FC<AddressesProps> = (props) => {
	const router = useRouter()

	const [activeAddress, setActiveAddress] = useState(null)
	const [showDeleteModal, setShowDeleteModal] = useState(false)

	const { clientUrl } = useApp()

	const { title = 'Customer Addresses', subtitle = 'Manage your addresses' } =
		props || {}

	const { loading, addresses, deleteCustomerAddress, findCustomerAddresses } =
		useAddresses()

	const handleClick = (addressGid) => {
		let addressId = getShopifyIdFromGid(addressGid)
		router.push(`${clientUrl}/shopify/addresses/${addressId}`)
	}

	const handleAddAddress = () => {
		router.push(`${clientUrl}/shopify/addresses/new`)
	}

	const handleEdit = (addressGid) => {
		let addressId = getShopifyIdFromGid(addressGid)
		router.push(`${clientUrl}/shopify/addresses/${addressId}`)
	}

	const handleDeleteClick = (address) => {
		setActiveAddress(address)
		setShowDeleteModal(true)
	}

	const handleDelete = async () => {
		//@ts-ignore
		if (activeAddress?.id) {
			//@ts-ignore
			await deleteCustomerAddress(activeAddress?.id)
			setShowDeleteModal(false)
		}
	}

	useEffect(() => {
		if (!addresses) {
			findCustomerAddresses()
		}
	}, [addresses])

	return (
		<AuthScreen title={title} subtitle={subtitle}>
			<ShopifyAddressList
				addresses={addresses}
				handleClick={handleClick}
				handleEdit={handleEdit}
				handleDelete={handleDeleteClick}
			/>
			<Button fullWidth onPress={handleAddAddress} startContent={<RiAddFill />}>
				Add Address
			</Button>
			<AlertModal
				open={showDeleteModal}
				handleClose={() => setShowDeleteModal(false)}
				handleConfirm={handleDelete}
			/>
		</AuthScreen>
	)
}

export default Addresses
