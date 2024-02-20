import React from 'react'
import { Button, Stack } from '@mui/material'
import { Customer } from 'frontend-shopify'
import { TextInput, IconLoader } from '../../../components'

type CustomerFormProps = {
	loading: boolean
	customer: Customer
	handleChange: any
	handleSubmit: any
}

const CustomerForm: React.FC<CustomerFormProps> = (props) => {
	const { loading, customer, handleChange, handleSubmit } = props

	return (
		<Stack spacing={1}>
			<TextInput
				placeholder="First Name"
				name="firstName"
				value={customer?.firstName || ''}
				handleChange={handleChange}
			/>
			<TextInput
				placeholder="Last Name"
				name="lastName"
				value={customer?.lastName || ''}
				handleChange={handleChange}
			/>
			<TextInput
				placeholder="Email"
				name="email"
				value={customer?.email || ''}
				handleChange={handleChange}
			/>
			<TextInput
				placeholder="Phone number"
				name="phone"
				value={customer?.phone || ''}
				handleChange={handleChange}
			/>
			<TextInput
				type="password"
				placeholder="Change Password"
				name="password"
				value={customer?.password || ''}
				handleChange={handleChange}
			/>
			<Button
				color="secondary"
				endIcon={<IconLoader loading={loading} />}
				variant="contained"
				onClick={handleSubmit}
			>
				Update Account
			</Button>
		</Stack>
	)
}

export default CustomerForm
