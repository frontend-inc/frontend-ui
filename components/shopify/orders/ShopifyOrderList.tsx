'use client'

import React from 'react'
import { ScrollArea } from 'frontend-shadcn'
import { ShopifyOrderType } from 'frontend-shopify'
import ShopifyOrderItem from './ShopifyOrderItem'
import { cn } from '@nextui-org/react'

type ShopifyOrderListProps = {
	orders: ShopifyOrderType[]
	handleClick: (id: string) => void
	className?: string
}

const ShopifyOrderList: React.FC<ShopifyOrderListProps> = ({
	orders,
	handleClick,
	className,
}) => {
	return (
		<ScrollArea className={cn('h-[400px] rounded-md border', className)}>
			<div className="space-y-2 p-4">
				{orders?.map((order) => (
					<ShopifyOrderItem
						key={order?.id}
						order={order}
						handleClick={() => handleClick(order.id)}
					/>
				))}
			</div>
		</ScrollArea>
	)
}

export default ShopifyOrderList
