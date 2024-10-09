import React, { useState, useEffect, useContext } from 'react'
import { AppContext } from '../../context'
import { toast, Toaster } from 'sonner'

export type AlertProps = {
	anchorBottom?: boolean
}

const Alert: React.FC<AlertProps> = (props) => {

	const [open, setOpen] = useState(false)
	const { alert, setAlert } = useContext(AppContext)

	const handleClose = () => {
		setOpen(false)
		setAlert()
	}

	useEffect(() => {
		if (alert && alert?.message) {
			setOpen(true)
		}
	}, [alert])

	useEffect(() => {
		if (open) {
			toast(alert?.status, {
        description: alert?.message,
        action: {
          label: "Close",
          onClick: handleClose,
        },
      })
		}
	}, [open])

	return (
    <Toaster />		
	)
}

export default Alert
