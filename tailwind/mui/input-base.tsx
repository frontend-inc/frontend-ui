import React, { forwardRef } from 'react'
import { cn } from '../../shadcn/lib/utils'

export interface InputBaseProps
	extends React.InputHTMLAttributes<HTMLInputElement> {
	startAdornment?: React.ReactNode
	endAdornment?: React.ReactNode
	multiline?: boolean
	rows?: number
	fullWidth?: boolean
}

const InputBase = forwardRef<HTMLInputElement, InputBaseProps>(
	(
		{
			className,
			type = 'text',
			startAdornment,
			endAdornment,
			multiline = false,
			rows = 1,
			fullWidth = false,
			...props
		},
		ref
	) => {
		const inputClasses = cn(
			'bg-background text-foreground',
			'border border-input',
			'focus:outline-none focus:ring-2 focus:ring-ring focus:border-ring',
			'disabled:cursor-not-allowed disabled:opacity-50',
			'rounded-md',
			'px-3 py-2',
			'text-sm',
			fullWidth ? 'w-full' : 'w-auto',
			startAdornment && 'pl-10',
			endAdornment && 'pr-10',
			className
		)

		const InputComponent = multiline ? ('textarea' as 'input') : 'input'

		return (
			<div
				className={cn(
					'relative inline-flex items-center',
					fullWidth && 'w-full'
				)}
			>
				{startAdornment && (
					<div className="absolute left-3 top-1/2 transform -translate-y-1/2">
						{startAdornment}
					</div>
				)}
				<InputComponent
					type={type}
					className={inputClasses}
					ref={ref as any}
					rows={multiline ? rows : undefined}
					{...props}
				/>
				{endAdornment && (
					<div className="absolute right-3 top-1/2 transform -translate-y-1/2">
						{endAdornment}
					</div>
				)}
			</div>
		)
	}
)

InputBase.displayName = 'InputBase'

export { InputBase }
