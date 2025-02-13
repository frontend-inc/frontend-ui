'use client'

import React from 'react'
import Button from './Button'
import { ButtonType } from '../../../types'
import { cn } from '@nextui-org/react'

export type ButtonsProps = {
	buttons: ButtonType[]
	size?: 'sm' | 'md' | 'lg'
	justifyContent?: 'justify-start' | 'justify-center' | 'justify-end'
	className?: string
}

const Buttons: React.FC<ButtonsProps> = (props) => {
	const {
		buttons,
		size = 'md',
		justifyContent = 'justify-center',
		className,
	} = props || {}

	return (
		<div
			className={cn(
				'flex flex-row w-full',
				justifyContent && `justify-center md:${justifyContent}`,
				className
			)}
		>
			{buttons?.length > 0 && (
				<div
					className={cn(
						'w-full flex flex-col space-y-2 sm:flex-row sm:space-x-3 sm:space-y-0',
						justifyContent
					)}
				>
					{buttons.map((button, index) => (
						<div key={index} className="w-full sm:w-auto">
							<Button
								size={size}
								icon={button?.icon}
								path={button?.path}
								url={button?.url}
								src={button?.src}
								action={button?.action}
								color={button?.color}
								variant={button?.variant}
								label={button?.label}
							/>
						</div>
					))}
				</div>
			)}
		</div>
	)
}

export default Buttons
