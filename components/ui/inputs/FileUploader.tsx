'use client'

import React, { useState, useEffect, useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import Image from 'next/image'
import { File, Trash2, UploadCloud, DownloadCloud } from 'lucide-react'
import { Button, Spinner } from '@nextui-org/react' // Adjust the import path as needed
import { InputLabel } from '../..' // Adjust the import path as needed
import { toast } from 'sonner'
import { cn } from '@nextui-org/react' // Adjust the import path as needed

// Type Definitions

type FileUploaderProps = {
	label?: string
	loading?: boolean
	handleSubmit: (files: File[]) => Promise<void>
}

type PreviewFileProps = {
	index: number
	file: File
	handleDelete: (index: number) => void
}

// PreviewFile Component

const PreviewFile: React.FC<PreviewFileProps> = ({
	index,
	file,
	handleDelete,
}) => {
	const isImage = file.type.startsWith('image/')
	const [preview, setPreview] = useState<string | null>(null)

	useEffect(() => {
		if (isImage) {
			const objectUrl = URL.createObjectURL(file)
			setPreview(objectUrl)

			// Clean up the object URL when component unmounts
			return () => URL.revokeObjectURL(objectUrl)
		}
	}, [file, isImage])

	return (
		<div className="flex items-center space-x-4 p-2 border rounded-md">
			{isImage ? (
				<div className="relative w-16 h-16">
					{preview && (
						<Image
							src={preview}
							alt={file.name}
							fill
							style={{ objectFit: 'cover' }}
							className="rounded-md"
						/>
					)}
				</div>
			) : (
				<div className="h-16 w-16 bg-content1 rounded-md flex items-center justify-center">
					<File className="h-6 w-6" />
				</div>
			)}
			<div className="flex-1">
				<p className="text-sm font-medium text-foreground">{file.name}</p>
				<p className="text-xs text-foreground/70">
					{(file.size / (1024 * 1024)).toFixed(2)} MB
				</p>
			</div>
			<Button
				isIconOnly
				size="sm"
				color="danger"
				onPress={() => handleDelete(index)}
				aria-label={`Remove ${file.name}`}
			>
				<Trash2 className="h-4 w-4" />
			</Button>
		</div>
	)
}

// FileUploader Component

const FileUploader: React.FC<FileUploaderProps> = ({
	label,
	loading,
	handleSubmit,
}) => {
	const [files, setFiles] = useState<File[]>([])
	const [isUploading, setIsUploading] = useState(false)
	const [isDropzoneLoading, setIsDropzoneLoading] = useState(false)

	const MAX_SIZE = 20 * 1024 * 1024 // 20MB in bytes

	// Handle file drops
	const onDrop = async (droppedFiles: File[]) => {
		const validFiles: File[] = []
		let hasInvalidFiles = false

		droppedFiles.forEach((file) => {
			if (file.size > MAX_SIZE) {
				hasInvalidFiles = true
				toast.error(`File "${file.name}" exceeds 20MB and was not added.`)
			} else {
				validFiles.push(file)
			}
		})

		if (validFiles.length > 0) {
			setFiles((prevFiles) => [...prevFiles, ...validFiles])
		}

		if (droppedFiles.length > 0 && validFiles.length === 0) {
			toast.error('No valid files were added.')
		}
	}

	// Configure react-dropzone
	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		onDrop,
		multiple: true,
	})

	// Handle file removal
	const onRemove = (index: number) => {
		setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index))
	}

	// Handle file upload
	const onUpload = async () => {
		try {
			setIsDropzoneLoading(true)
			await handleSubmit(files)
			setFiles([]) // Clear files after successful upload
			toast.success('Files uploaded successfully!')
		} catch (error) {
			console.error('Error uploading files:', error)
			toast.error('Failed to upload files. Please try again.')
			// Optionally, add more detailed error handling here
		} finally {
			setIsDropzoneLoading(false)
		}
	}

	return (
		<div className="flex flex-col space-y-4 w-full">
			{/* Input Label */}
			<InputLabel label={label} />

			{/* File Previews */}
			{files.length > 0 && (
				<div className="space-y-2">
					{files.map((file, index) => (
						<PreviewFile
							key={index}
							index={index}
							file={file}
							handleDelete={onRemove}
						/>
					))}
				</div>
			)}

			{/* Drop Zone */}
			<div
				{...getRootProps()}
				className={cn(
					'h-[120px] w-full bg-content1 hover:bg-content2 m-px p-4 flex flex-col justify-center items-center rounded-xl border-2 border-divider text-center hover:border-2 hover:border-primary hover:cursor-pointer transition-all duration-300',
					isDragActive ? 'border-primary bg-opacity-50' : ''
				)}
			>
				<input {...getInputProps()} />
				{isDropzoneLoading ? (
					<Spinner className="text-foreground w-8 h-8" />
				) : (
					<>
						{isDragActive ? (
							<DownloadCloud className="text-foreground w-5 h-5" />
						) : (
							<UploadCloud className="text-foreground w-5 h-5" />
						)}
						<p className="mt-2 text-sm text-foreground">
							{isDragActive
								? 'Drop files here...'
								: 'Drag & drop files here, or click to select files'}
						</p>
					</>
				)}
			</div>

			{/* Upload Button */}
			{files.length > 0 && (
				<Button
					onPress={onUpload}
					disabled={isDropzoneLoading}
					isLoading={isDropzoneLoading}
				>
					{isDropzoneLoading ? 'Uploading...' : 'Upload Files'}
				</Button>
			)}
		</div>
	)
}

export default FileUploader
