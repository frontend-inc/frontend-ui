'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Typography } from '../../core'
import { Card } from 'frontend-shadcn'
import { Button } from '../../../components'
import { useApp } from '../../../hooks'
import { truncate } from '../../../helpers'
import { Image } from '../../../components'

export type ShopifyCardProps = {
	collection?: {
		label?: string
		title?: string
		image?: {
			url: string
		}
	}
	buttonText?: string
	handleClick?: () => void
	enableGradient?: boolean
	enableOverlay?: boolean
}

export default function ShopifyCollectionCard({
	collection,
	handleClick,
	buttonText,
	enableGradient = false,
	enableOverlay = false,
}: ShopifyCardProps) {

	const { label, title, image } = collection || {}

  const [open, setOpen] = useState(false)

	const handleItemClick = () => {
		if (handleClick) {
			handleClick()
		} else {
			setOpen(true)
		}
	}

	return (
		<Card className="relative w-full rounded-lg">
			<div className="relative w-full h-full">
				<Image
					// @ts-ignore
					src={image?.url}
					alt={title || 'Collection image'}
					label={label}
					aspectRatio={1.0}
					objectFit="cover"
					enableGradient={enableGradient}
					enableOverlay={enableOverlay}
				/>
			</div>
			<div className="dark absolute bottom-0 left-0 w-full p-4 z-10">
				<div className="flex items-center justify-between w-full">
					<div className="flex flex-col items-start justify-center">
						<Typography variant="body1" className="font-bold">
							{truncate(title || '', 60)}
						</Typography>
					</div>
					{buttonText && (
						<Button
							variant="secondary"
							size="sm"
							onClick={handleItemClick}
							className="bg-white text-black hover:bg-white/90"
						>
							Browse
						</Button>
					)}
				</div>
			</div>
		</Card>
	)
}
