import React, { useContext, useEffect, useState } from 'react'
import { AuthScreen, AlertModal, LayoutLoader } from '../../../components'
import { Plus } from 'lucide-react'
import { Button } from '@mui/material'
import { useAddresses } from 'frontend-shopify'
import { AddressList } from '../../../components/shopify'
import { AppContext } from '../../../context'
import { useRouter } from 'next/router'
import { getShopifyIdFromGid } from 'frontend-shopify'

type AddressesProps = {
	title?: string
	subtitle?: string
}

const Addresses: React.FC<AddressesProps> = (props) => {
	const router = useRouter()

	const [activeAddress, setActiveAddress] = useState(null)
	const [showDeleteModal, setShowDeleteModal] = useState(false)

	const { clientUrl } = useContext(AppContext)

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
		await deleteCustomerAddress(activeAddress?.id)
		setShowDeleteModal(false)
	}

	useEffect(() => {
		if (!addresses) {
			findCustomerAddresses()
		}
	}, [addresses])

	return (
		<LayoutLoader loading={loading}>
			<AuthScreen title={title} subtitle={subtitle}>
				<AddressList
					addresses={addresses}
					handleClick={handleClick}
					handleEdit={handleEdit}
					handleDelete={handleDeleteClick}
				/>
				<Button
					fullWidth
					variant="outlined"
					onClick={handleAddAddress}
					startIcon={<Plus />}
				>
					Add Address
				</Button>
				<AlertModal
					open={showDeleteModal}
					handleClose={() => setShowDeleteModal(false)}
					handleConfirm={handleDelete}
				/>
			</AuthScreen>
		</LayoutLoader>
	)
}

export default Addresses
