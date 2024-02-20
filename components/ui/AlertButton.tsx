import React, { useState } from 'react'
import { IconButton, Button } from '@mui/material'
import { AlertModal } from '../../components'

type AlertButtonProps = {
	disable?: boolean
	iconButton?: boolean
	onClick: () => void
}

const AlertButton: React.FC<AlertButtonProps> = (props) => {
	const { disable = false, iconButton = false, onClick } = props

	const [open, setOpen] = useState(false)

	const handleClick = () => {
		if (!disable) {
			setOpen(true)
		} else {
			handleConfirm()
		}
	}

	const handleConfirm = () => {
		setOpen(false)
		onClick()
	}

	return (
		<>
			{iconButton ? (
				<IconButton {...props} onClick={handleClick} />
			) : (
				<Button {...props} onClick={handleClick} />
			)}
			<AlertModal
				open={open}
				handleClose={() => setOpen(false)}
				handleConfirm={handleConfirm}
			/>
		</>
	)
}

export default AlertButton
