'use client'

import React from 'react'
import { cn } from 'frontend-shadcn'
import { Button } from '../..'
import { Card, CardContent, CardFooter, CardHeader } from 'frontend-shadcn'
import { Badge } from 'frontend-shadcn'
import { Typography } from '../../../components'

type SubscriptionCardProps = {
	loading?: boolean
	selected?: boolean
	label?: string
	title: string
	subtitle: string
	price: string
	description: string
	buttonText?: string
	handleClick: () => void
}

export default function SubscriptionCard(props: SubscriptionCardProps) {
	const {
		loading = false,
		label,
		price,
		title,
		subtitle,
		description,
		buttonText = 'Subscribe',
		handleClick,
	} = props

	return (
		<Card
			className={cn(
				'w-full max-w-sm',
				'transition-all duration-300 ease-in-out',
				'hover:shadow-lg'
			)}
		>
			<CardHeader>
				<div className="w-full flex flex-col space-y-3 justify-center items-center">
					{label && (
						<Badge
							variant="secondary"
							className="uppercase text-xs tracking-wider"
						>
							{label}
						</Badge>
					)}
					<Typography
						className="text-foreground text-center w-full"
						variant="h5"
					>
						{title}
					</Typography>
					<Typography variant="h3" className="text-center w-full">
						{price}
					</Typography>
				</div>
			</CardHeader>
			<CardContent className="p-4">
				<div className="flex flex-col space-y-4">
					<Typography className="text-muted-foreground" variant="body1">
						{subtitle}
					</Typography>
					<Typography className="text-muted-foreground" variant="body2">
						{description}
					</Typography>
				</div>
			</CardContent>
			<CardFooter>
				<Button loading={loading} onClick={handleClick} className="w-full">
					{buttonText} {price}
				</Button>
			</CardFooter>
		</Card>
	)
}
