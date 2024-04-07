import React, { useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { Box, CircularProgress, Typography, useTheme } from '@mui/material'
import { UploadCloud, DownloadCloud } from 'lucide-react'

type DropZoneProps = {
	onDrop: (file: File, preview: any) => void
	label?: string
	dropLabel?: string
}

const DropZone: React.FC<DropZoneProps> = (props) => {
	const { onDrop, label = 'Upload file', dropLabel = 'Drop file here' } = props
	const theme = useTheme()
	const [loading, setLoading] = useState(false)

	const handleOnDrop = (files: File[]) => {
		const reader = new FileReader()
		const file = files[0]
		reader.onload = async (e) => {
			let preview = {
				src: e.target.result,
				name: file.name,
				size: file.size,
				type: file.type,
			}
			setLoading(true)
			await onDrop(file, preview)
			setLoading(false)
		}
		reader.readAsDataURL(file)
	}

	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		onDrop: handleOnDrop,
	})

	return (
		<Box sx={sx.dropZone} {...getRootProps()}>
			<input {...getInputProps()} />
			{loading ? (
				<CircularProgress disableShrink size={32} sx={sx.icon} />
			) : (
				<>
					{isDragActive ? (
						<DownloadCloud color={theme.palette.text.secondary} />
					) : (
						<UploadCloud color={theme.palette.text.secondary} />
					)}
					<Typography variant="body2" color="textSecondary">
						{isDragActive ? dropLabel : label}
					</Typography>
				</>
			)}
		</Box>
	)
}

export default DropZone

const sx = {
	dropZone: {
		m: '1px',
		p: 2,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: (theme) => `${theme.shape.borderRadius}px`,
		border: '2px solid',
		borderColor: 'divider',
		bgcolor: 'background.paper',
		textAlign: 'center',
		'&:hover': {
			m: 0,
			border: '3px solid',
			cursor: 'pointer',
			borderColor: 'primary.main',
		},
	},
	icon: {
		color: 'icon',
		height: 32,
		width: 32,
	},
	iconButton: {
		fontSize: 11,
		top: 0,
		left: -48,
		color: 'text.secondary',
		'&& ': {
			bgcolor: 'background.paper',
		},
	},
}
