import React from 'react'
import { List } from '@mui/material'
import { ShopifyAddressType } from 'frontend-shopify'
import ShopifyAddressItem from './ShopifyAddressItem'

type AddressListProps = {
	addresses: ShopifyAddressType[]
	handleClick: (id: string) => void
	handleEdit: (id: string) => void
	handleDelete: (address: ShopifyAddressType) => void
}

const AddressList: React.FC<AddressListProps> = (props) => {
	const { addresses, handleClick, handleEdit, handleDelete } = props || {}

	return (
		<List disablePadding>
			{addresses?.map((address) => (
				<ShopifyAddressItem
					key={address?.id}
					address={address}
					handleClick={handleClick}
					handleEdit={handleEdit}
					handleDelete={handleDelete}
				/>
			))}
		</List>
	)
}

export default AddressList
