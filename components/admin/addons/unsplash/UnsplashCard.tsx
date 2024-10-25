'use client'

import React from 'react'
import { Image } from '../../../../components'
import {
	Avatar,
	AvatarFallback,
	AvatarImage,
} from 'frontend-shadcn'
import { Button } from '../../../../components'
import { Card, CardHeader } from 'frontend-shadcn'
import { cn } from 'frontend-shadcn'

type UnplashCardProps = {
	image?: any
	selected?: boolean
	handleClick?: (image: any) => void
}

const UnplashCard: React.FC<UnplashCardProps> = ({
	image,
	selected,
	handleClick,
}) => {
	const handleProfileClick = (user: any) => {
		let url = user?.links?.html + '?utm_source=frontend.co&utm_medium=referral'
		window.open(url, '_blank')
	}

	return (
		<Card
			className={cn(
				'rounded bg-background border border-border p-0',
				selected && 'border-primary'
			)}
		>
			<div
				className="cursor-pointer"
				onClick={() => handleClick && handleClick(image)}
			>
				<Image
					height={120}
					width={180}
					src={image?.urls?.small}
					alt={image?.alt_description}
					objectFit="cover"
					disableBorderRadius
				/>
			</div>
			<CardHeader className="p-1">
				<Button
					variant="ghost"
					className="text-xs text-muted-foreground hover:text-foreground flex items-center space-x-2 p-0"
					onClick={() => handleProfileClick(image?.user)}
				>
					<Avatar className="h-6 w-6">
						<AvatarImage
							src={image?.user?.profile_image?.medium}
							alt={image?.user?.name}
						/>
						<AvatarFallback>{image?.user?.name?.charAt(0)}</AvatarFallback>
					</Avatar>
					<span className="break-words">{image?.user?.name}</span>
				</Button>
			</CardHeader>
		</Card>
	)
}

export default UnplashCard
