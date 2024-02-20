import React, { useState } from 'react'
import Dropzone from 'react-dropzone'
import { Box, Button, LinearProgress, Typography } from '@mui/material'
import { InsertDriveFile } from '@mui/icons-material'

type FileInputProps = {
	errors?: any
	fileUrl: string
	handleUpload: (file: File) => void
	handleDelete?: () => void
}

const FileInput: React.FC<FileInputProps> = (props) => {
	const { fileUrl, handleUpload, handleDelete } = props

	const [editing, setEditing] = useState(false)
	const [file, setFile] = useState()
	const [files, setFiles] = useState([])
	const [isUploading, setIsUploading] = useState(false)
	const [isUploaded, setIsUploaded] = useState(false)
	const [dropzoneActive, setDropzoneActive] = useState(false)

	const onDrop = async (files: File[]) => {
		setIsUploading(true)
		setIsUploaded(false)
		handleUpload(files[0])
		setEditing(false)
		setIsUploading(false)
		setIsUploaded(true)
		setFiles([])
		setFile(null)
	}

	const onDragEnter = (files) => {
		setFiles(files)
		setDropzoneActive(true)
	}

	const onDragLeave = (files) => {
		setFiles(files)
		setDropzoneActive(false)
	}

	const handleDownloadClick = () => window.open(fileUrl, '_blank')

	return (
		<Box>
			{fileUrl && !editing && (
				<>
					<Button onClick={handleDownloadClick}>
						<InsertDriveFile sx={sx.icon} />
					</Button>
					{handleDelete && (
						<Button sx={sx.button} size="small" onClick={handleDelete}>
							Remove
						</Button>
					)}
				</>
			)}

			{editing ||
				(!fileUrl && (
					//@ts-ignore
					<Dropzone
						sx={sx.dropZone}
						disableClick={false}
						onDrop={onDrop}
						onDragEnter={onDragEnter}
						onDragLeave={onDragLeave}
						multiple={false}
					>
						{!isUploaded && !isUploading && !dropzoneActive && (
							<Typography variant="overline">Upload file</Typography>
						)}

						{isUploaded && (
							<Typography variant="overline">Upload complete</Typography>
						)}

						{!isUploaded && !isUploading && dropzoneActive && (
							<Typography variant="overline">Drop file</Typography>
						)}

						{!isUploaded && isUploading && (
							<Typography variant="overline">Uploading ...</Typography>
						)}

						{isUploading && <LinearProgress />}
					</Dropzone>
				))}
		</Box>
	)
}

export default FileInput

const sx = {
	icon: {
		height: 48,
		width: 48,
		color: 'primary.main',
	},
	dropZone: {
		m: 0,
		height: 140,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		border: (theme) => `1px dotted ${theme.palette.text.secondary}`,
		bgcolor: 'background.default',
		textAlign: 'center',
		mb: 2,
	},
	button: {
		fontSize: 11,
	},
}
