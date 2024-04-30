import React, { useState } from 'react'
import { Avatar, Box, IconButton, Typography } from '@mui/material'
import { DeleteOutlined } from '@mui/icons-material'
import Image from 'next/image'
import DropZone from './DropZone'
import { File } from 'lucide-react'
import { AttachmentInputProps } from '../../../types'
const IMAGE_WIDTH = 140

type RenderAttachmentProps = {
	src: string
	size?: number
	objectFit?: 'cover' | 'contain'
	onDelete: () => void
	variant: 'image' | 'file'
	alt?: string
}

const RenderAttachment: React.FC<RenderAttachmentProps> = (props) => {
	const {
		src,
		objectFit = 'cover',
		size,
		onDelete,
		variant = 'file',
		alt = '',
	} = props

	return (
		<Box sx={sx.root}>
			{variant == 'image' && (
				<Image
					alt={alt}
					height={size}
					width={size}
					src={src}
					style={{
						objectFit,
					}}
				/>
			)}
			{variant == 'file' && (
				<Avatar variant="rounded" sx={sx.avatar}>
					<File size={24} />
				</Avatar>
			)}
			<Box width={50}>
				<IconButton
					sx={{
						...sx.iconButton,
						...(variant === 'file' && sx.iconButtonFile),
					}}
					size="small"
					onClick={onDelete}
				>
					<DeleteOutlined />
				</IconButton>
			</Box>
		</Box>
	)
}

const AttachmentInput: React.FC<AttachmentInputProps> = (props) => {
	const {
		name,
		label,
		handleChange,
		value: attachment,
		handleRemove,
		variant = 'file',
		size = IMAGE_WIDTH,
		objectFit = 'cover',
	} = props

	const [src, setSrc] = useState()

	const onDrop = async (file, preview) => {
		setSrc(preview.src)
		handleChange({
			target: {
				name: name,
				value: file,
			},
		})
	}

	const onRemove = async () => {
		if (!attachment) {
			handleChange({
				target: {
					name: name,
					value: null,
				},
			})
		}
		setSrc(null)
	}

	const handleDelete = async (name) => {
		setSrc(null)
		handleRemove(name)
	}

	return (
		<Box sx={sx.root}>
			<Typography variant="caption" color="textSecondary">
				{label}
			</Typography>
			{attachment && (
				<RenderAttachment
					variant={variant}
					src={attachment}
					size={size}
					objectFit={objectFit}
					onDelete={() => handleDelete(name)}
				/>
			)}
			{!attachment && src && (
				<RenderAttachment
					src={src}
					size={size}
					variant={variant}
					objectFit={objectFit}
					onDelete={onRemove}
				/>
			)}
			{!attachment && !src && (
				<DropZone onDrop={onDrop} label={'Upload attachment'} />
			)}
		</Box>
	)
}

export default AttachmentInput

const sx = {
	root: {
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
	},
	avatar: {
		height: 64,
		width: 64,
		bgcolor: 'primary.main',
	},
	image: {
		p: 2,
		mr: 1,
		borderRadius: 1,
	},
	iconButton: {
		top: -15,
		left: 15,
		fontSize: 11,
		color: 'text.secondary',
		bgcolor: 'background.default',
		'&:hover': {
			bgcolor: 'background.default',
		},
	},
	iconButtonFile: {
		left: 26,
		top: -10,
	},
}
