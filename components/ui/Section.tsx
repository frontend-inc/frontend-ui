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
		mode,
		maxWidth,
    fill = false,
    border,
		py,
		px = 6,
	} = props

  const pyClasses = {
    none: 'py-0',
    sm: 'py-[24px]',
    md: 'py-[48px]',
    lg: 'py-[96px]',
    xl: 'py-[144px]',
  }

	return (
		<section
			className={cn(
        mode, 
        theme,
        'w-full bg-background', 
        py ? pyClasses[py] : 'py-[48px]',
        px && `px-${px}`
      )}
			style={{ backgroundColor: bgColor }}
		>
			<div
				className={cn(
          border && 'p-8 border-2 border-border rounded-xl',
          fill && 'p-8 rounded-xl bg-muted/60',
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
