'use client'

import React from 'react'
import { AuthGuard } from '../../components'
import { SectionProps } from '../../types'
import { cn } from 'frontend-shadcn'

type ContainerMaxWidth = 'sm' | 'md' | 'lg' | 'xl'

const maxWidthClasses: Record<ContainerMaxWidth, string> = {
	sm: 'container mx-auto max-w-screen-sm',
	md: 'container mx-auto max-w-screen-md',
	lg: 'container mx-auto max-w-screen-lg',
	xl: 'container mx-auto max-w-screen-xl',
}

const Section: React.FC<SectionProps> = (props) => {
	const {
		requireAuth = false,
		children,
		bgColor,
		mode,
		maxWidth,
		py = 12,
		px = 6,
	} = props

	return (
		<section
			className={cn(mode, 'w-full bg-background', `py-${py}`, px && `px-${px}`)}
			style={{ backgroundColor: bgColor }}
		>
			<div
				className={cn(
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
