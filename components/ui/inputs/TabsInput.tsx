'use client'

import React from 'react'
import { SyntheticEventType } from '../../../types'
import { InputLabel } from '../../../components'
import { Tabs, TabsList, TabsTrigger } from 'frontend-shadcn'
import { cn } from 'frontend-shadcn'

type TabsInputProps = {
	name: string
	label?: string
	handleChange: (ev: SyntheticEventType) => void
	options: {
		icon?: string
		label?: string
		value: string
	}[]
	value: string
	info?: string
}

export default function TabsInput({
	name,
	label,
	handleChange,
	options,
	value,
	info,
}: TabsInputProps) {

	const handleInputChange = (value: string) => {
		handleChange({
			target: {
				name,
				value,
			},
		})
	}

	return (
		<div
			className={'flex flex-row items-center justify-between w-full space-y-1'}
		>
			<InputLabel label={label} info={info} />
			<Tabs
				value={value.toString()}
				onValueChange={handleInputChange}
				className="rounded-md"
			>
				<TabsList className={cn('w-full')}>
					{options.map((option) => (
						<TabsTrigger
							key={option.value}
							value={option.value.toString()}
							className={cn('flex items-center text-sm')}
						>
							{option.icon && (
								<span className={'inline-block mr-2'}>{option.icon}</span>
							)}
							{option.label}
						</TabsTrigger>
					))}
				</TabsList>
			</Tabs>
		</div>
	)
}
