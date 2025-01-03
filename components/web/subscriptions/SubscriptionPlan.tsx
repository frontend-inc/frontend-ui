'use client'

import React, { useState } from 'react'
import { Typography } from '../..'
import {
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Button,
} from '@nextui-org/react'
import { RemixIcon } from '../..'
import { cn } from '@nextui-org/react'
import { useNavigate } from '../../../hooks'
import { formatCurrency } from '../../../helpers'

type SubscriptionPlanProps = {
	id?: string | number
	label?: string
	title: string
	subtitle?: string
	features?: string[]
	price: number
	compareAtPrice?: number
	buttonText?: string
	url?: string
	path?: string
	interval?: string
	popular?: boolean
	precision?: number
	variant?: 'default' | 'outline' | 'fill' | 'shadow'
	handleClick?: () => void
}

const SubscriptionPlan: React.FC<SubscriptionPlanProps> = (props) => {
	const {
		title,
		subtitle,
		features,
		variant = 'default',
		interval = 'month',
		buttonText = 'Subscribe',
		price,
		compareAtPrice,
		path,
		url,
		handleClick,
		precision = 0,
	} = props

	const [loading, setLoading] = useState(false)

	const onClick = useNavigate({
		path,
		url,
		handleClick,
	})

	const variantClass = {
		default: 'shadow',
		outline: 'bordered',
		fill: 'flat',
		shadow: 'shadow',
	}

	const handleSubscribe = () => {
		setLoading(true)
		onClick()
		setTimeout(() => setLoading(false), 5000)
	}

	return (
		<Card isHoverable className="w-full">
			<CardHeader className="flex flex-col p-6 justify-start items-start space-y-1">
				<Typography variant="subtitle2">{title}</Typography>
				<Typography variant="body2" className="text-foreground/70">
					{subtitle}
				</Typography>
			</CardHeader>
			<CardBody className="flex flex-col space-y-4 p-6 w-full min-h-[300px]">
				<div className="flex flex-row space-x-4 w-full items-end">
					<div className="flex flex-row items-center space-x-1">
						<Typography variant="h2" className="font-bold">
							{price == 0 ? 'FREE' : formatCurrency(price, precision)}
						</Typography>
						{price > 0 && (
							<Typography
								variant="body2"
								className="text-xs text-foreground/70"
							>
								per
								<br />
								{interval}
							</Typography>
						)}
					</div>
					{compareAtPrice && (
						<Typography
							variant="subtitle2"
							className="line-through text-foreground/70"
						>
							{compareAtPrice == 0
								? 'FREE'
								: formatCurrency(compareAtPrice, precision)}
						</Typography>
					)}
				</div>
				{price > 0 && (
					<Button
						variant="solid"
						color="primary"
						isLoading={loading}
						onPress={handleSubscribe}
					>
						{buttonText}
					</Button>
				)}
				<Typography variant="body2" className="text-foreground/70">
					This includes:
				</Typography>
				<ul className="flex flex-col space-y-3">
					{features?.map((feature, i) => (
						<li className="flex flex-row space-x-2" key={i}>
							<RemixIcon
								name="ri-checkbox-circle-fill"
								className="text-foreground"
							/>
							<Typography variant="body2">{feature}</Typography>
						</li>
					))}
				</ul>
			</CardBody>
		</Card>
	)
}

export default SubscriptionPlan
