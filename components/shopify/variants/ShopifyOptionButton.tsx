'use client'

import React from 'react'
import { Button } from '@nextui-org/react'
import { cn } from '@nextui-org/react'

type ShopifyOptionButtonProps = {
	value: string
	name: string
	active: boolean
	handleClick: (name: string, value: string) => void
	children: React.ReactNode
	width?: number
	justifyContent?: string
}

const ShopifyOptionButton: React.FC<ShopifyOptionButtonProps> = (props) => {
	const { value, name, active, handleClick, children, width, justifyContent } =
		props

	return (
		<Button
			variant={active ? 'solid' : 'ghost'}
			onPress={() => handleClick(name, value)}
		>
			{children}
		</Button>
	)
}

export default ShopifyOptionButton
