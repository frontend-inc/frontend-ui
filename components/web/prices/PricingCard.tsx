'use client'

import React from 'react'
import { Button, Typography } from '../../../components'
import { Badge } from 'frontend-shadcn'
import { Separator } from 'frontend-shadcn'
import { RemixIcon } from '../../../components'
import { cn } from 'frontend-shadcn'
import { useNavigate } from '../../../hooks'

type PricingCardProps = {
	label?: string
	title: string
	description?: string
	features?: string[]
	price: string | number
	buttonText?: string
	url?: string
	path?: string
	interval?: string
	recurring?: boolean
	popular?: boolean
}

const PricingCard: React.FC<PricingCardProps> = (props) => {
	const {
		popular,
		label,
		title,
		features,
		recurring = false,
		interval = 'month',
		buttonText = 'Subscribe',
		price,
		path,
		url,
	} = props

	const onClick = useNavigate({
		path,
		url,
	})

	return (
		<div
			className={cn(
				'w-full border bg-background shadow-lg border-divider rounded-xl p-6 flex flex-col space-y-4 justify-between',
				popular &&
					'border-2 z-10 border-primary shadow-3xl transition duration-200'
			)}
		>
			<div className="flex flex-col space-y-3 min-h-[300px]">
				{label && (
					<div>
						<Badge className="px-3 py-1" variant="outline">
							{label}
						</Badge>
					</div>
				)}
				<Typography variant="body1">{title}</Typography>
				<div className="flex flex-row items-end">
					<Typography variant="h2">${price}</Typography>
					{recurring && <Typography variant="h4">/{interval}</Typography>}
				</div>
				<Separator />
				<Typography variant="body1" className="text-muted-foreground">
					What's included:
				</Typography>
				<ul className="flex flex-col space-y-3">
					{features?.map((feature, i) => (
						<li className="flex flex-row space-x-2" key={i}>
							<RemixIcon
								name="ri-check-fill"
								className="text-foreground bg-background"
							/>
							<Typography variant="body1">{feature}</Typography>
						</li>
					))}
				</ul>
			</div>
			{/** @ts-ignore */}
			<Button onClick={onClick}>{buttonText}</Button>
		</div>
	)
}

export default PricingCard
