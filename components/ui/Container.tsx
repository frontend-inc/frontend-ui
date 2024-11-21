import React from 'react'
import { cn } from 'frontend-shadcn'

export type ContainerProps = {
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  children: React.ReactNode
  className?: string
}

const Container: React.FC<ContainerProps> = (props) => {
  const { maxWidth, className, children } = props 
  if(!maxWidth) return children;
  return (    
    <div className="w-full flex items-center">
      <div className={cn(
        "container mx-auto", 
        maxWidth && `max-w-screen-${maxWidth}`, 
        className
        )}>
        {children}
      </div>
    </div>
  )
}

export default Container