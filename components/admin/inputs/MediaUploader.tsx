'use client'

import React from 'react'
import { useAdminMedia, useToast } from '../../../hooks'
import { DropZone } from '../../../components'
import { MAX_FILE_SIZE } from '../../../constants'

type MediaUploaderProps = {
	onComplete?: (resp: any) => void
}

const MediaUploader: React.FC<MediaUploaderProps> = (props) => {
	const { onComplete } = props

	const { showAlertError } = useToast()

	const { uploadFile } = useAdminMedia()

	const handleUpload = async (file) => {
		try {
			if (file?.size > MAX_FILE_SIZE) {
				showAlertError('File size must be less than 10MB.')
				return
			}
			let resp = await uploadFile(file)
			if (onComplete) {
				onComplete(resp)
			}
		} catch (e) {
			console.log(e)
		}
	}

	return <DropZone label="Drag-and-drop to upload." onDrop={handleUpload} />
}

export default MediaUploader
