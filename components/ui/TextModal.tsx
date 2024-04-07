import React from 'react'
import { Modal } from '../../components'
import { Typography } from '@mui/material'

type TextModalProps = {
	open: boolean
	text: string
	title?: string
	handleClose: () => void
}

const TextModal: React.FC<TextModalProps> = (props) => {
	const { open, text, title = 'Preview', handleClose } = props

	return (
		<Modal open={open} handleClose={handleClose} title={title} maxWidth="md">
			<Typography my={2} variant="body2" sx={sx.text}>
				{text}
			</Typography>
		</Modal>
	)
}

export default TextModal

const sx = {
	text: {
		whiteSpace: 'pre-wrap',
	},
}
