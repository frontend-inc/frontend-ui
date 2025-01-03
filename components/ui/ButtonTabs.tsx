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
}

export default function ButtonTabs(props: ButtonTabsProps) {
	const { handleChange, options, value, className, fullWidth } = props

	return (
		//@ts-ignore
		<Tabs
			fullWidth={fullWidth}
			selectedKey={value.toString()}
			onSelectionChange={handleChange}
			className={className}
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
