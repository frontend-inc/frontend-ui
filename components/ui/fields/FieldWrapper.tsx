'use client'

import React from 'react'
import { RemixIcon } from '../../../components'
import { cn } from '@nextui-org/react'

type FieldWrapperProps = {
	direction?: 'row' | 'column'
	label?: string
	icon?: string
	alignItems?: 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline'
	children?: React.ReactNode
	className?: string
}

const FieldWrapper: React.FC<FieldWrapperProps> = (props) => {
	const { direction = 'column', label, icon, children, className } = props || {}

	const wrapperClasses = cn(
		'flex w-full',
		direction === 'row' && 'flex-row space-x-2',
		direction === 'column' && 'flex-col space-y-2',
		className
	)

	return (
		<div className={wrapperClasses}>
			{label && (
				<div
					className={cn(
						'min-w-[100px] pr-1',
						direction == 'row' && 'w-[100px] pr-1'
					)}
				>
					<label className="text-xs text-foreground/70 font-medium uppercase tracking-wider">
						{label}
					</label>
				</div>
			)}
			<div className="w-full flex flex-row space-x-1">
				{icon && <RemixIcon name={icon} />}
				{children}
			</div>
		</div>
	)
}

export default FieldWrapper
