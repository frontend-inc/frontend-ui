import React from 'react'
import { RemixIcon } from '../../../components'
import { cn } from '@nextui-org/react'

type IconProps = {
  name: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  variant?: 'solid' | 'ghost' | 'light' 
  color?: 
    'default' |
    'primary' | 
    'secondary' | 
    'success' | 
    'warning' | 
    'error' | 
    'foreground' | 
    'background' | 
    'content1' | 
    'content2' 
  className?: string
}

const Icon: React.FC<IconProps> = (props) => {
  
  const { name, variant='default', size='md', color, className } = props

  const ghostClasses = {
    default: 'bg-content1',
    primary: 'bg-primary/20',
    secondary: 'bg-secondary/20',
    success: 'bg-success/20',
    warning: 'bg-warning/20',
    error: 'bg-error/20',    
    background: 'bg-background',
    content1: 'bg-content1',
    content2: 'bg-content2',
  }

  const solidClasses = {
    default: 'bg-transparent',
    primary: 'bg-primary',
    secondary: 'bg-secondary',
    success: 'bg-success',
    warning: 'bg-warning',
    error: 'bg-error',    
    background: 'bg-background',
    content1: 'bg-content1',
    content2: 'bg-content2',
  }

  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-10 h-10',
    xl: 'w-12 h-12',
  }

  const textClasses = {
    default: 'text-foreground',
    primary: 'text-primary',
    secondary: 'text-secondary',
    success: 'text-success',
    warning: 'text-warning',
    error: 'text-error',    
    background: 'text-foreground',
    content1: 'text-foreground',
    content2: 'text-foreground',
  }

  return (
    <div 
      className={cn(
        'rounded-lg flex items-center justify-center', 
        sizeClasses[size || 'md'],
        variant == 'ghost' && ghostClasses[color || 'default'],
        variant == 'solid' && solidClasses[color || 'default'],
      )}
    >
      <RemixIcon
        name={name}
        size={size}
        className={cn(
          variant == 'ghost' && textClasses[color || 'default'],
          variant == 'default' && textClasses[color || 'default'],
          className
        )}
      />
    </div>
  )
}

export default Icon