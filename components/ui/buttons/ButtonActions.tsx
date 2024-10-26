'use client'

import React from 'react'
import ButtonAction from './ButtonAction'
import { ButtonType } from '../../../types'
import { cn } from 'frontend-shadcn'

type ButtonActionsProps = {
	buttons: ButtonType[]
	size?: 'sm' | 'default' | 'lg'
	justifyContent?: 'start' | 'center' | 'end'
}

const ButtonActions: React.FC<ButtonActionsProps> = ({
	buttons,
	size,
	justifyContent = 'start',
}) => {
	return (
		<div
			className={cn('flex flex-row', {
				'justify-start': justifyContent === 'start',
				'justify-center': justifyContent === 'center',
				'justify-end': justifyContent === 'end',
			})}
		>
			{buttons?.length > 0 && (
				<div
					className={cn('w-full flex flex-col sm:flex-row gap-1', {
						'justify-start': justifyContent === 'start',
						'justify-center': justifyContent === 'center',
						'justify-end': justifyContent === 'end',
					})}
				>
					{buttons.map((button, index) => (
						<ButtonAction
							key={index}
							icon={button?.icon}
							path={button?.path}
							url={button?.url}
							size={size}
						>
							{button?.label}
						</ButtonAction>
					))}
				</div>
			)}
		</div>
	)
}

export default ButtonActions
