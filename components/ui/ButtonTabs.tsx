'use client'

import React from 'react'
import { Tabs, TabsList, TabsTrigger } from 'frontend-shadcn'
import { Icon } from '..'
import { cn } from 'frontend-shadcn'

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
}

export default function ButtonTabs({
	handleChange,
	options,
	value,
	className,
	fullWidth,
}: ButtonTabsProps) {
	return (
		<Tabs value={value.toString()} onValueChange={handleChange}>
			<TabsList
				className={cn('bg-muted p-1', className, fullWidth && 'w-full')}
			>
				{options.map((tab, i) => {
					return (
						<TabsTrigger
							key={i}
							value={tab.value.toString()}
							className="w-full"
						>
							{tab.icon && (
								<Icon
									name={tab.icon}
									className={cn('h-5 w-5', tab.label && 'mr-2')}
								/>
							)}
							{tab.label && <span className="text-sm">{tab.label}</span>}
						</TabsTrigger>
					)
				})}
			</TabsList>
		</Tabs>
	)
}
