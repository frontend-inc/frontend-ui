import React from 'react'
import { Button } from '@mui/material'
import { ButtonLoader, Placeholder, Modal } from '../../../components'

type AlertModalProps = {
	loading?: boolean
	title?: string
	description?: string
	open: boolean
	handleClose: () => void
	handleConfirm: any
}

const AlertModal: React.FC<AlertModalProps> = (props) => {
	const {
		loading = false,
		title = 'Please confirm or cancel this action.',
		description = 'This action is not reversable.',
		open,
		handleClose,
		handleConfirm,
	} = props

	return (
		<Modal
			open={open}
			loading={loading}
			title="Are you sure?"
			actions={
				<Button
					variant="contained"
					color="secondary"
					onClick={handleConfirm}
					startIcon={<ButtonLoader loading={loading} />}
				>
					Confirm
				</Button>
			}
			handleClose={handleClose}
		>
			{!loading && (
				<Placeholder
					icon={'CircleAlert'}
					title={title}
					description={description}
				/>
			)}
		</Modal>
	)
}

export default AlertModal
