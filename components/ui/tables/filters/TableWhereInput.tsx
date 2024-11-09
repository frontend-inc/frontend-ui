'use client'

import React from 'react'
import { SyntheticEventType } from '../../../../types'
import { Tabs, TabsList, TabsTrigger } from 'frontend-shadcn'
import { cn } from 'frontend-shadcn'

type TabsWhereInputProps = {
	name: string
	handleChange: (ev: SyntheticEventType) => void
	value: string
}

export default function TabsWhereInput({
	name,
	handleChange,
	value,
}: TabsWhereInputProps) {
	const handleInputChange = (value: string) => {
		handleChange({
			target: {
				name,
				value,
			},
		})
	}

	return (
		<Tabs
			defaultValue={value.toString()}
			onValueChange={handleInputChange}
			className="rounded-md w-full"
		>
			<TabsList className={cn('w-full')}>
				{['AND', 'OR'].map((option) => (
					<TabsTrigger
						key={option}
						value={option.toString()}
						className={cn('w-full flex items-center text-sm')}
					>
						{option}
					</TabsTrigger>
				))}
			</TabsList>
		</Tabs>
	)
}
