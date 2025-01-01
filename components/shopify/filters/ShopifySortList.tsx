'use client'

import React from 'react'
import { RadioGroup, RadioGroupItem } from 'frontend-shadcn'
import { Label } from 'frontend-shadcn'

type ShopifySortListProps = {
	enableIcons?: boolean
	value: string
	reverse?: boolean
	options: Array<{
		value: string
		reverse?: boolean
		label: string
	}>
	handleClick: (value: string, reverse?: boolean) => void
}

const ShopifySortList: React.FC<ShopifySortListProps> = (props) => {
	const { value, reverse, options, handleClick } = props || {}

	return (
		<RadioGroup
			value={`${value}-${reverse}`}
			onValueChange={(newValue) => {
				const [value, reverse] = newValue.split('-')
				handleClick(value, reverse === 'true')
			}}
			className="space-y-0"
		>
			{options?.map((option, index) => (
				<div
					key={index}
					className="flex items-center cursor-pointer p-2 space-x-2 hover:bg-content2/50 rounded-lg"
				>
					<RadioGroupItem
						value={`${option.value}-${option.reverse}`}
						id={`option-${index}`}
					/>
					<Label
						htmlFor={`option-${index}`}
						className="text-base font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
					>
						{option.label}
					</Label>
				</div>
			))}
		</RadioGroup>
	)
}

export default ShopifySortList
