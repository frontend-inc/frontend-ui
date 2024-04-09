import React from 'react'
import { Button } from '@mui/material'
import { ButtonLoader, Placeholder, Modal } from '../../../components'

type AlertModalProps = {
	loading?: boolean
	title?: string
	description?: string
  icon?: string
	open: boolean
	handleClose: () => void
	handleConfirm: any
}

const AlertModal: React.FC<AlertModalProps> = (props) => {
	const {
		loading = false,
		title = 'Please confirm or cancel this action.',
		description = 'This action is not reversable.',
    icon='CircleAlert',
		open,
		handleClose,
		handleConfirm,
	} = props

	return (
		<Modal
			open={open}
			loading={loading}
			actions={
        <>
        <Button
					variant="contained"
					color="secondary"
					onClick={handleClose}
				>
					Cancel
				</Button>
				<Button
					variant="contained"
					color="primary"
					onClick={handleConfirm}
					startIcon={<ButtonLoader loading={loading} />}
				>
					Confirm
				</Button>
        </>
			}
			handleClose={handleClose}
		>
			{!loading && (
				<Placeholder
					icon={icon}
					title={title}
					description={description}
				/>
			)}
		</Modal>
	)
}

export default AlertModal
