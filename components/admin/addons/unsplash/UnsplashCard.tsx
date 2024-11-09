'use client'

import React from 'react'
import { Image } from '../../../../components'
import {
	Avatar,
	AvatarFallback,
	AvatarImage,
	CardContent,
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
				'cursor-pointer rounded bg-background border border-border p-0 min-w-[240px]',
				selected && 'border-primary'
			)}
		>
			<CardContent className="p-0">
				<Image
					height={200}
					width={200}
					src={image?.urls?.regular}
					alt={image?.alt_description}
					objectFit="cover"
					disableBorderRadius
					handleClick={() => handleClick && handleClick(image)}
				/>
				<div className="p-3 w-full">
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
				</div>
			</CardContent>
		</Card>
	)
}

export default UnplashCard
