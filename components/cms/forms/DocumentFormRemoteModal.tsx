import React from 'react'
import { DocumentFormRemote, Drawer } from '../..'
import { DocumentFormRemoteProps } from './DocumentFormRemote'

export type DocumentFormRemoteModalProps = DocumentFormRemoteProps & {
	title?: string
	open: boolean
	handleClose: () => void
}

const DocumentFormRemoteModal: React.FC<DocumentFormRemoteModalProps> = (props) => {
	const { title, open, handleClose, ...rest } = props

	return (
		<Drawer open={open} handleClose={handleClose} title={title}>
			<DocumentFormRemote {...rest} />
		</Drawer>
	)
}

export default DocumentFormRemoteModal
