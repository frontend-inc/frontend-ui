'use client'

import React from 'react'
import { SectionProps } from '../../types'
import { cn } from '@nextui-org/react'
import { useTheme } from '../../hooks'

type ContainerMaxWidth = 'sm' | 'md' | 'lg' | 'xl'

const maxWidthClasses: Record<ContainerMaxWidth, string> = {
	sm: 'container mx-auto max-w-screen-sm',
	md: 'container mx-auto max-w-screen-md',
	lg: 'container mx-auto max-w-screen-lg',
	xl: 'container mx-auto max-w-screen-xl',
}

const Section: React.FC<SectionProps> = (props) => {
	const { theme } = useTheme()

	const {
    children,
    className,		
		bgColor,
		bgImage,
		bgOverlay,
		mode,
		maxWidth,
		py = 'sm',
		px = 'sm',
	} = props

	const pyClasses = {
		none: 'py-0',
		sm: 'py-[24px]',
		md: 'py-[48px]',
		lg: 'py-[96px]',
		xl: 'py-[144px]',
	}

	const pxClasses = {
		none: 'px-0',
		sm: 'px-6',
		md: 'px-12',
		lg: 'px-24',
		xl: 'px-48',
	}

	const backgroundStyle = bgImage ? { 
    backgroundImage: `url(${bgImage})` } : {
    backgroundColor: bgColor,
  }
  
	return (
		<section
			className={cn(
        'z-0',
				'relative bg-cover bg-center bg-no-repeat',
				'w-full bg-background',
        theme && mode && `${theme}-${mode}`,
				pyClasses[py],
				pxClasses[px],
				!bgImage && bgColor,
				bgImage && bgOverlay &&
					"after:content-[''] after:absolute after:inset-0 after:bg-black/50",
        className
			)}
			style={backgroundStyle}
		>
			<div
				className={cn(
          'relative z-[1]',
					maxWidth && maxWidthClasses[maxWidth],
					'w-full mx-auto min-h-[60px] flex flex-row justify-center items-center'
				)}
			>
				<div
					className={cn(
						'w-full',
						'transition-all duration-300 ease-in-out'
					)}
				>
					{children}
				</div>
			</div>
		</section>
	)
}

export default Section