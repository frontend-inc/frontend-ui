'use client'

import React, { useState, forwardRef } from 'react'
import {
	Button, 
  ButtonProps 
} from '@nextui-org/react'
import { AlertModal } from '..'

const AlertButton = forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			onPress,
			...rest
		},
		ref
	) => {
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
          { ...rest }
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

AlertButton.displayName = 'AlertButton'

export { AlertButton }
