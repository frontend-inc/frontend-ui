'use client'

import React from 'react'
import { cn } from 'frontend-shadcn'
import { Button } from '../../../components'
import { Card, CardContent, CardFooter, CardHeader } from 'frontend-shadcn'
import { Badge } from 'frontend-shadcn'
import { Typography } from '../../core'

type SubscriptionTableCardProps = {
	selected?: boolean
  label?: string
  title: string
  subtitle: string
  price: string
  description: string 
	buttonText?: string
	handleClick: () => void
}

export default function SubscriptionTableCard({
  label,
  price,
  title,  
  subtitle,
  description,
	buttonText = 'Subscribe',
	handleClick,
}: SubscriptionTableCardProps) {
	return (
		<Card
			className={cn(
				'w-full max-w-sm',
				'transition-all duration-300 ease-in-out',
				'hover:shadow-lg'
			)}
		>
			<CardHeader>
				<div className="flex justify-between items-center">
					{label && (
						<Badge variant="secondary">{label}</Badge>
					)}
				</div>
				<Typography className="text-muted-foreground" variant="subtitle1">
					{title}
				</Typography>
				<Typography variant="h4">{price}</Typography>
			</CardHeader>
			<CardContent>
        <div className="flex flex-col space-y-4">
        <Typography className="text-muted-foreground" variant="body1">
					{subtitle}
				</Typography>
        <Typography className="text-muted-foreground" variant="body2">
          { description }
        </Typography>
        </div>
			</CardContent>
			<CardFooter>
				<Button onClick={handleClick} className="w-full">
					{buttonText}
				</Button>
			</CardFooter>
		</Card>
	)
}
