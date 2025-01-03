'use client'

import React from 'react'
import { Badge, Image } from '@nextui-org/react'
import { formatCurrency } from 'frontend-shopify'
import { OrderLineItemType } from 'frontend-shopify'
import { Typography } from '../../../components'
import { cn } from '@nextui-org/react'

type ShopifyOrderLineItemProps = {
	lineItem: OrderLineItemType
	className?: string
}

const ShopifyOrderLineItem: React.FC<ShopifyOrderLineItemProps> = ({
	lineItem,
	className,
}) => {
	return (
		<div className={cn('flex items-start space-x-4 py-2', className)}>
			<div className="relative flex-shrink-0">
				{lineItem?.variant?.image?.url && (
					<Badge className="absolute -top-2 -right-2 h-6 w-6 rounded-full flex items-center justify-center bg-primary text-primary-foreground">
						<Image
							height={96}
							width={96}
							src={lineItem.variant.image.url}
							alt={lineItem.title}
						/>
						{lineItem.quantity}
					</Badge>
				)}
			</div>
			<div className="flex-grow">
				<Typography variant="body1" className="text-sm text-foreground/70">
					{lineItem?.variant?.title}
				</Typography>
				<Typography variant="body2" className="text-foreground/70">
					{lineItem.quantity} x{' '}
					{formatCurrency(lineItem?.variant?.price?.amount)}
				</Typography>
			</div>
		</div>
	)
}

export default ShopifyOrderLineItem
