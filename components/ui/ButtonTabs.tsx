'use client'

import React from 'react'
import { RemixIcon } from '..'
import { cn } from '@nextui-org/react'
import { Tabs, Tab } from '@nextui-org/react'

type ButtonTabsProps = {
	handleChange: (value: string | number) => void
	options: {
		icon?: string
		label?: string
		value: string | number
	}[]
	className?: string
	fullWidth?: boolean
	value: string | number
	variant?: 'solid' | 'underlined' | 'bordered' | 'light'
	isVertical?: boolean
  size?: 'sm' | 'md' | 'lg'
}

export default function ButtonTabs(props: ButtonTabsProps) {
	const {
		handleChange,
		variant = 'solid',
		options,
		value,
		className,
		fullWidth,
		isVertical = false,
    size='md'
	} = props

	return (
		//@ts-ignore
		<Tabs
			isVertical={isVertical}
			fullWidth={fullWidth}
			variant={variant}
			selectedKey={value.toString()}
			onSelectionChange={handleChange}
			className={className}
      size={size}
		>
			{options.map((tab, i) => (
				<Tab          
					key={tab.value}
					title={
						<div className="flex space-x-2 items-center">
							{tab.icon && <RemixIcon size="lg" name={tab.icon} />}
							{tab.label && <span className="text-sm">{tab.label}</span>}
						</div>
					}
				/>
			))}
		</Tabs>
	)
}
