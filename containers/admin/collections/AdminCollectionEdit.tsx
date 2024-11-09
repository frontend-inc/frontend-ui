'use client'

import React from 'react'
import { IconLoading, Drawer } from '../../../components'
import { Button } from '../../../components/core'
import AdminCollectionForm from './AdminCollectionForm'

type AdminCollectionEditProps = {
	loading: boolean
	errors: any
	open: boolean
	collection: any
	handleClose: () => void
	handleChange: (e: any) => void
	handleSubmit: (collection: any) => void
	handleClick: (template: any) => void
}

const AdminCollectionEdit: React.FC<AdminCollectionEditProps> = (props) => {
	const {
		loading,
		errors,
		open,
		collection,
		handleClose,
		handleChange,
		handleSubmit,
		handleClick,
	} = props

	return (
		<Drawer
			loading={loading}
			open={open}
			handleClose={handleClose}
			title={collection?.id ? 'Edit Collection' : 'Add Collection'}
			buttons={
				<Button
					fullWidth
					onClick={handleSubmit}
					startIcon={loading && <IconLoading />}
				>
					{collection?.id ? 'Update' : 'Save'}
				</Button>
			}
		>
			<AdminCollectionForm
				errors={errors}
				collection={collection}
				handleChange={handleChange}
				handleClick={handleClick}
			/>
		</Drawer>
	)
}

export default AdminCollectionEdit
