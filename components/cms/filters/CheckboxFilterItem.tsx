'use client'

import React from 'react'
import { Typography } from '../../core'
import { Check } from 'lucide-react'
import { cn } from 'frontend-shadcn'

type CheckboxFilterItemProps = {
	label?: string
	option: {
		label: string
		value: string | number | boolean
	}
	values?: any[]
	handleClick: () => void
}

const CheckboxFilterItem: React.FC<CheckboxFilterItemProps> = (props) => {
	const { values = [], option, handleClick } = props

	const selected = values.includes(option.value)

	return (
		<li className="list-none">
			<button
				className={cn(
					' rounded-md cursor-pointer hover:bg-muted/20 flex py-1 px-2 items-center w-full border border-input shadow-sm',
					selected &&
						'bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground shadow-md'
				)}
				onClick={handleClick}
			>
				<div
					className={cn(
						'w-full flex flex-row space-x-2 items-center justify-between'
					)}
				>
					<Typography
						variant="body1"
						className={cn('font-medium', selected && 'text-primary-foreground')}
					>
						{option?.label}
					</Typography>
					{selected && <Check className="w-5 h-5 text-primary-foreground" />}
				</div>
			</button>
		</li>
	)
}

export default CheckboxFilterItem
