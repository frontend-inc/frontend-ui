'use client'

import React from 'react'
import { Checkbox as ShadcnCheckbox } from 'frontend-shadcn'
import { cn } from 'frontend-shadcn'

interface CheckboxProps {
	name: string
	value: boolean
	handleChange: (ev: any) => void
	label?: string
	className?: string
}

const Checkbox: React.FC<CheckboxProps> = ({
	name,
	value = false,
	handleChange,
	label,
	className,
}) => {
	const handleClick = () => {
		handleChange({
			target: {
				name,
				value: !value,
			},
		})
	}

	return (
		<div className={cn('flex items-center space-x-2', className)}>
			<ShadcnCheckbox
				id={name}
				name={name}
				checked={value}
				onClick={handleClick}
			/>
			{label && (
				<label
					htmlFor={name}
					className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
				>
					{label}
				</label>
			)}
		</div>
	)
}

export { Checkbox }
