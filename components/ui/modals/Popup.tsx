import React, { useState, useEffect } from 'react'
import { Box, Fade, Popover } from '@mui/material'

type PopupProps = {
	open: boolean
	handleClose: () => void
	anchorEl: any
	children: any
	disablePadding?: boolean
	p?: number
}

const Popup: React.FC<PopupProps> = (props) => {
	const {
		open,
		handleClose,
		anchorEl,
		children,
		disablePadding = false,
		p = 2,
	} = props || {}

	return (
		<Popover
			open={open}
			anchorEl={anchorEl}
			onClose={handleClose}
			anchorOrigin={{
				vertical: 'bottom',
				horizontal: 'left',
			}}
      sx={ sx.root }
		>
			<Box
				sx={{
					...sx.content,
					p,
					...(disablePadding && sx.disablePadding),
				}}
			>
				{children}
			</Box>
		</Popover>
	)
}

export default Popup

const sx = {
  root: {
    '& .MuiPopover-paper': {
      border: '1px solid',
      borderColor: 'divider',
      borderRadius: theme => theme.shape.borderRadius,
    }
  },
	content: {
		maxHeight: '520px',
		maxWidth: '520px',
		overflowY: 'scroll',
		'&::-webkit-scrollbar': {
			display: 'none',
		},
	},
	disablePadding: {
		p: 0,
	},
}
