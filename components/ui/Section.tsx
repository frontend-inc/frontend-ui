'use client'

import React from 'react'
import { AuthGuard } from '../../components'
import { SectionProps } from '../../types'
import { cn } from 'frontend-shadcn'
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
		requireAuth = false,
		children,
		bgColor,
		bgImage,
		bgOverlay,
		mode,
		maxWidth,
		variant,
		py = 'md',
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
				mode == 'dark' ? 'dark-theme' : 'light',
				theme,
				'relative bg-cover bg-center bg-no-repeat',
				'w-full bg-background',
				pyClasses[py],
				pxClasses[px],
				!bgImage && bgColor,
				bgImage && bgOverlay &&
					"after:content-[''] after:absolute after:inset-0 after:bg-black/50"
			)}
			style={backgroundStyle}
		>
			<div
				className={cn(
          'relative z-10',
					variant == 'outline' && 'p-8 border-2 border-border rounded-xl',
					variant == 'fill' && bgImage && 'p-8 rounded-xl bg-black/50',
          variant == 'fill' && !bgImage && 'p-8 rounded-xl bg-muted',
					maxWidth && maxWidthClasses[maxWidth],
					'w-full mx-auto min-h-[60px] flex flex-row justify-center items-center'
				)}
			>
				<div
					className={cn(
						'w-full overflow-x-hidden',
						'transition-all duration-300 ease-in-out'
					)}
				>
					<AuthGuard requireAuth={requireAuth}>{children}</AuthGuard>
				</div>
			</div>
		</section>
	)
}

export default Section
