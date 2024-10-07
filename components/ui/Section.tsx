import React from 'react'
import { Container, Box } from '../../tailwind'
import { AuthGuard } from '../../components'
import { SectionProps } from '../../types'
import { cn } from '../../shadcn/lib/utils'

type ContainerMaxWidth = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

const maxWidthClasses: Record<ContainerMaxWidth, string> = {
  xs: 'max-w-screen-xs',
  sm: 'max-w-screen-sm',
  md: 'max-w-screen-md',
  lg: 'max-w-screen-lg',
  xl: 'max-w-screen-xl'
}

const Section: React.FC<SectionProps> = (props) => {
	const {
		enableTransitions = false,
		requireAuth = false,
		requirePaid = false,
		children,
		bgColor,
    maxWidth,
		py = 6,
		px = 3,
	} = props

	return (
    <div 
      className={cn(
        'w-full',
        py && `py-${py}`,
        px && `px-${px}`,
      )}
      style={{ backgroundColor: bgColor }}
    >
      <div         
        className={cn(
          maxWidth && maxWidthClasses[maxWidth],
          "w-full mx-auto min-h-[60px] flex flex-row justify-center items-center"
        )}>
        <div
          className={cn(
            "w-full overflow-x-hidden",
            "transition-all duration-300 ease-in-out",            
          )}
        >
          <AuthGuard requireAuth={requireAuth} requirePaid={requirePaid}>
            {children}
          </AuthGuard>
        </div>
      </div>
    </div>
	)
}

export default Section