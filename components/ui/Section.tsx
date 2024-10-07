import React from 'react'
import { Container, Box } from '../../tailwind'
import { AuthGuard } from '../../components'
import { SectionProps } from '../../types'
import { cn } from '../../shadcn/lib/utils'

const Section: React.FC<SectionProps> = (props) => {
	const {
		enableTransitions = false,
		requireAuth = false,
		requirePaid = false,
		children,
		bgColor,
		py = 6,
		px = 3,
	} = props

	return (
      <div 
        style={{
          backgroundColor: bgColor,
        }}
        className={"w-full min-h-[60px] flex flex-row justify-center items-center bg-background"}>
        <div
          className={cn(
            "w-full overflow-x-hidden",
            enableTransitions && "transition-all duration-300 ease-in-out",
            `py-${py} px-${px}`
          )}
        >
          <AuthGuard requireAuth={requireAuth} requirePaid={requirePaid}>
            {children}
          </AuthGuard>
        </div>
      </div>
	)
}

export default Section