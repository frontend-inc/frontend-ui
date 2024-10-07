import React from 'react'
import { Checkbox as ShadcnCheckbox } from '../../shadcn/ui/checkbox'
import { cn } from '../../shadcn/lib/utils'

interface CheckboxProps {
	name: string
	value: string
	onChange: (checked: boolean) => void
	checked: boolean
	label?: string
	className?: string
}

const Checkbox: React.FC<CheckboxProps> = ({
	name,
	value,
	onChange,
	checked,
	label,
	className,
}) => {
	return (
		<div className={cn('flex items-center space-x-2', className)}>
			<ShadcnCheckbox
				id={name}
				name={name}
				value={value}
				checked={checked}
				onCheckedChange={onChange}
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
