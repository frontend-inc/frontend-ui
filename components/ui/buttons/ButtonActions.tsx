'use client'

import React from 'react'
import ButtonAction from './ButtonAction'
import { ButtonType } from '../../../types'
import { cn } from 'frontend-shadcn'

type ButtonActionsProps = {
	buttons: ButtonType[]
	size?: 'sm' | 'default' | 'lg'
	justifyContent?: 'justify-start' | 'justify-center' | 'justify-end'
  className?: string
}

const ButtonActions: React.FC<ButtonActionsProps> = (props) => {

  const {
    buttons,
    size,
    justifyContent = 'justify-center',
    className
  } = props || {}

	return (
		<div
			className={cn(
        'flex flex-row',
				justifyContent && `justify-center md:${justifyContent}`,
        className
			)}
		>
			{buttons?.length > 0 && (
				<div
					className={cn(
            'w-full flex flex-col sm:flex-row sm:space-x-3',
						justifyContent
					)}
				>
					{buttons.map((button, index) => ( 
            <div 
              key={index}
              className='w-full sm:w-auto'            
            >            
              <ButtonAction 
                size={size} 
                icon={button?.icon}
                path={button?.path}
                url={button?.url}
                src={button?.src}
                action={button?.action_type}
                variant={button?.variant}              
              >
                {button?.label}
              </ButtonAction>
            </div>
					))}
				</div>
			)}
		</div>
	)
}

export default ButtonActions
