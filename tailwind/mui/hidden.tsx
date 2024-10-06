import React from 'react'
import { cn } from '../../shadcn/lib/utils'

type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'

interface HiddenProps {
  children: React.ReactNode
  only?: Breakpoint | Breakpoint[]
  up?: Breakpoint
  down?: Breakpoint
  className?: string
}

const breakpointMap: Record<Breakpoint, string> = {
  xs: 'sm',
  sm: 'md',
  md: 'lg',
  lg: 'xl',
  xl: '2xl',
  '2xl': ''
}

const Hidden: React.FC<HiddenProps> = ({ children, only, up, down, className }) => {
  const getHiddenClasses = () => {
    if (only) {
      if (Array.isArray(only)) {
        return only.map(bp => `hidden ${breakpointMap[bp]}:block`).join(' ')
      }
      return `hidden ${breakpointMap[only]}:block`
    }

    if (up) {
      return `hidden ${breakpointMap[up]}:block`
    }

    if (down) {
      const nextBreakpoint = breakpointMap[down]
      return nextBreakpoint ? `${nextBreakpoint}:hidden` : 'hidden'
    }

    return ''
  }

  const hiddenClasses = getHiddenClasses()

  return (
    <div className={cn(hiddenClasses, className)}>
      {children}
    </div>
  )
}

export { Hidden }