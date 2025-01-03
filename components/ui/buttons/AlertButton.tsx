'use client'

import React, { useState, forwardRef } from 'react'
import { Button, ButtonProps } from '@nextui-org/react'
import { AlertModal } from '../../../components'

type AlertButtonProps = ButtonProps & {
	onPress: () => void
}

const AlertButton = forwardRef<HTMLButtonElement, AlertButtonProps>(
	({ onPress, ...rest }, ref) => {
		const [open, setOpen] = useState(false)

		const handleConfirm = () => {
			setOpen(false)
			onPress()
		}

		return (
			<>
				<Button
					ref={ref}
					onPress={() => setOpen(true)}
					variant="ghost"
					color="danger"
					{...rest}
				/>
				<AlertModal
					open={open}
					handleClose={() => setOpen(false)}
					handleConfirm={handleConfirm}
				/>
			</>
		)
	}
)

export default AlertButton
