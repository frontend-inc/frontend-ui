'use client'

import React from 'react'
import { Button, Typography } from '../../core'
import { useRouter } from 'next/navigation'
import { Label } from '../..'
import { Separator } from 'frontend-shadcn'

type PricingCardProps = {
	label?: string
	title: string
	description?: string
	features?: string[]
	price: string | number
	buttonText?: string
	url?: string
  highlight?: boolean
}

const PricingCard: React.FC<PricingCardProps> = (props) => {
	const router = useRouter()
	const { highlight, label, title, features, buttonText, price, url } = props

	const handleClick = () => {
		if (url) {
			router.push(url)
		}
	}

	return (
		<div className="w-full border border-divider rounded p-2 flex flex-col justify-between">
			<div className="flex flex-col space-y-3 min-h-[300px]">
				{label && (
					<div>
						<Label label={label} />
					</div>
				)}
				<Typography variant="body1">{title}</Typography>
				<Typography variant="h5">{price}</Typography>
				<Separator />
				<ul>
					{features?.map((feature, i) => (
						<li key={i}>
							<Typography variant="body1">{feature}</Typography>
						</li>
					))}
				</ul>
			</div>
			{buttonText && <Button onClick={handleClick}>{buttonText}</Button>}
		</div>
	)
}

export default PricingCard
