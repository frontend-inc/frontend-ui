'use client'

import React from 'react'
import { SectionProps } from '../../types'
import { cn } from '@nextui-org/react'
import { useTheme } from '../../hooks'

type ContainerMaxWidth = 'sm' | 'md' | 'lg' | 'xl'

const Section: React.FC<SectionProps> = (props) => {
	const { theme } = useTheme()

	const {
		children,
		bgColor,
		bgImage,
		bgOverlay,
		mode,
		maxWidth = 'xl',
		variant,
		py = 'md',
		px = 'sm',
		spacing = 6,
		className,
	} = props

	const spacingClasses = {
		1: 'space-y-1',
		2: 'space-y-2',
		3: 'space-y-3',
		4: 'space-y-4',
		5: 'space-y-5',
		6: 'space-y-6',
		7: 'space-y-7',
		8: 'space-y-8',
		9: 'space-y-9',
		10: 'space-y-10',
	}

	const maxWidthClasses: Record<ContainerMaxWidth, string> = {
		sm: 'container mx-auto max-w-screen-sm',
		md: 'container mx-auto max-w-screen-md',
		lg: 'container mx-auto max-w-screen-lg',
		xl: 'container mx-auto max-w-screen-xl',
	}

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

	const backgroundStyle = bgImage
		? { backgroundImage: `url(${bgImage})` }
		: { backgroundColor: bgColor }

	return (
		<section
			className={cn(
				'z-0',
				'relative bg-cover bg-center bg-no-repeat',
				'w-full h-full bg-background',
				'flex flex-col',
				theme && mode && `${theme}-${mode}`,
				pyClasses[py],
				pxClasses[px],
				!bgImage && bgColor,
				bgImage &&
					bgOverlay &&
					"after:content-[''] after:absolute after:inset-0 after:bg-black/70"
			)}
			style={backgroundStyle}
		>
			<div
				className={cn(
					'relative z-[1]',
					variant == 'outline' && 'p-8 border-2 border-divider rounded-xl',
					variant == 'fill' && bgImage && 'p-8 rounded-xl bg-black/50',
					variant == 'fill' && !bgImage && 'p-8 rounded-xl bg-content2/50',
					maxWidth && maxWidthClasses[maxWidth],
					spacingClasses[spacing],
					'w-full h-full mx-auto min-h-[60px]',
					className
				)}
			>
				{children}
			</div>
		</section>
	)
}

export default Section
