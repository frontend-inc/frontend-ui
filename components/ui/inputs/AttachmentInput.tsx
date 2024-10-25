'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { File, Trash2 } from 'lucide-react'
import { InputLabel } from '../../../components'
import { AttachmentInputProps } from '../../../types'
import { cn } from 'frontend-shadcn'
import { Button } from '../../../components'
import { Avatar, AvatarFallback } from 'frontend-shadcn'
import { CloudUpload } from 'lucide-react'
import { DropZone } from '../../../components'

const IMAGE_WIDTH = 140

type RenderAttachmentProps = {
	src: string
	size?: number
	objectFit?: 'cover' | 'contain'
	onDelete: () => void
	variant: 'image' | 'file'
	alt?: string
}

function RenderAttachment({
	src,
	objectFit = 'cover',
	size = IMAGE_WIDTH,
	onDelete,
	variant = 'file',
	alt = '',
}: RenderAttachmentProps) {
	return (
		<div className="relative">
			{variant === 'image' && (
				<div
					className="relative overflow-hidden rounded"
					style={{ height: size, width: size }}
				>
					<Image
						alt={alt}
						height={size}
						width={size}
						src={src}
						style={{ objectFit }}
					/>
				</div>
			)}
			{variant === 'file' && (
				<Avatar className="h-16 w-16 bg-primary">
					<AvatarFallback>
						<File className="h-6 w-6" />
					</AvatarFallback>
				</Avatar>
			)}
			<Button
				variant="outline"
				size="icon"
				className={cn(
					'text-foreground absolute -top-3 left-2 h-6 w-6 rounded-full',
					variant === 'file' && 'left-12 -top-1'
				)}
				onClick={onDelete}
			>
				<Trash2 className="h-4 w-4" />
			</Button>
		</div>
	)
}

export default function AttachmentInput({
	name,
	label,
	handleChange,
	value: attachment,
	handleRemove,
	variant = 'file',
	size = IMAGE_WIDTH,
	objectFit = 'cover',
	placeholder = 'Upload file',
	info,
}: AttachmentInputProps) {
	const [src, setSrc] = useState<string | null>(null)

	const onDrop = async (file: File, preview: { src: string }) => {
		setSrc(preview.src)
		handleChange({
			target: {
				name: name,
				value: file,
			},
		})
	}

	const onRemove = async () => {
		if (!attachment?.url) {
			handleChange({
				target: {
					name: name,
					value: null,
				},
			})
		}
		setSrc(null)
	}

	const handleDelete = async (name: string) => {
		setSrc(null)
		handleRemove(name)
	}

	return (
		<div className="flex flex-col w-full">
			<InputLabel label={label} info={info} />
			{attachment?.url && (
				<RenderAttachment
					variant={variant}
					src={attachment.url}
					size={size}
					objectFit={objectFit}
					onDelete={() => handleDelete(name)}
				/>
			)}
			{!attachment?.url && src && (
				<RenderAttachment
					src={src}
					size={size}
					variant={variant}
					objectFit={objectFit}
					onDelete={onRemove}
				/>
			)}
			{!attachment?.url && !src && (
        <DropZone 
          onDrop={onDrop}          
        />				
			)}
		</div>
	)
}
