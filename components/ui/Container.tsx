import React from 'react'
import { cn } from '@nextui-org/react'

export type ContainerProps = {
	maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl'
	children: React.ReactNode
	className?: string
}

const Container: React.FC<ContainerProps> = (props) => {
	const { maxWidth='xl', className, children } = props

  const maxWidthClasses = {
    sm: 'max-w-screen-sm',
    md: 'max-w-screen-md',
    lg: 'max-w-screen-lg',
    xl: 'max-w-screen-xl',
  }

	return (
		<div className="w-full flex items-center">
			<div
				className={cn(
					'container mx-auto p-4',
          maxWidthClasses[maxWidth],					
          'space-y-6',
					className
				)}
			>
				{children}
			</div>
		</div>
	)
}

export default Container
