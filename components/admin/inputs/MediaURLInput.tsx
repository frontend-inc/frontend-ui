'use client'

import React, { useState } from 'react'
import { Button } from '../../../components'
import { InputLabel, Image, Icon } from '../../../components'
import { InputPropsType } from '../../../types'
import { MediaBrowser } from '../../../components'
import { cn } from 'frontend-shadcn'
import {
	cloudinaryImageFromVideoUrl,
} from '../../../helpers'


type ImageInputProps = InputPropsType & {
	handleChange: (e: { target: { name: string; value: string } }) => void
	objectFit?: 'cover' | 'contain'
}

const ImageInput: React.FC<ImageInputProps> = (props) => {
	const {
		label,
		direction = 'column',
		name,
		value,
		info,
		objectFit = 'cover',
		handleChange,
	} = props

	const [open, setOpen] = useState(false)
	const handleBrowseClick = () => {
		setOpen(true)
	}

	const handleRemoveClick = () => {
		handleChange({
			target: {
				name,
				value: '',
			},
		})
	}

	const handleSubmit = (selected: { url: string }[]) => {
		setOpen(false)
		handleChange({
			target: {
				name,
				value: selected[0]?.url,
			},
		})
	}

	return (
		<div
			className={cn(
				'flex',
				direction === 'column' ? 'flex-col space-y-4' : 'flex-row space-x-2',
				'items-start'
			)}
		>
			<InputLabel label={label} info={info} />
			<div className="flex flex-col space-y-2">
				<div className="w-[120px] h-[120px] rounded overflow-hidden flex items-center justify-center">
					<Image
						aspectRatio={1.0}
						height={120}
						width={120}
						src={ cloudinaryImageFromVideoUrl(value)}
						objectFit={objectFit}
					/>
				</div>
				<div className="flex">
					<Button
						variant="secondary"
						size="sm"
						className={cn(
							'h-[38px]',
							value?.length > 0 ? 'w-[85px] rounded-r-none' : 'w-[120px]'
						)}
						onClick={handleBrowseClick}
					>
						Browse
					</Button>
					{value?.length > 0 && (
						<Button
							variant="secondary"
							size="sm"
							className="h-[38px] w-[38px] p-0 rounded-l-none"
							onClick={handleRemoveClick}
						>
							<Icon name="X" />
						</Button>
					)}
				</div>
				<MediaBrowser
					open={open}
					handleClose={() => setOpen(false)}
					handleSubmit={handleSubmit}
				/>
			</div>
		</div>
	)
}

export default ImageInput
