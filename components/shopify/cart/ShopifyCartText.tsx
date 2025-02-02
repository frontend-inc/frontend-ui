'use client'

import React from 'react'
import { Typography } from '../../../components'

type ShopifyCartTextProps = {
	label: string
	value: string
	icon?: string
}

export default function ShopifyCartText({
	label,
	value,
}: ShopifyCartTextProps) {
	return (
		<div className="flex flex-row justify-between w-full">
			<Typography variant="body1" className="text-foreground/70">
				{label}
			</Typography>
			<Typography variant="body1">{value}</Typography>
		</div>
	)
}
