'use client'

import React from 'react'
import { PrimaryButton, Sheet } from '../../../components'
import AdminViewForm from './AdminViewForm'
import { SyntheticEventType } from 'frontend-js'

type AdminViewEditProps = {
	loading: boolean
	errors: any
	open: boolean
	view: any
	handleClose: () => void
	handleChange: (ev: SyntheticEventType) => void
	handleSubmit: () => void
}

const AdminViewEdit: React.FC<AdminViewEditProps> = (props) => {
	const {
		loading,
		errors,
		open,
		view,
		handleClose,
		handleChange,
		handleSubmit,
	} = props

	return (
		<Sheet
			loading={loading}
			open={open}
			handleClose={handleClose}
			title="Save view"
			buttons={
				<PrimaryButton loading={loading} onClick={handleSubmit}>
					Save
				</PrimaryButton>
			}
		>
			<AdminViewForm errors={errors} view={view} handleChange={handleChange} />
		</Sheet>
	)
}

export default AdminViewEdit
