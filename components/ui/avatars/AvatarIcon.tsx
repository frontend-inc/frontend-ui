import React from 'react'
import { RemixIcon } from '../../../components'
import { Avatar, AvatarFallback } from 'frontend-shadcn'
import { cn } from 'frontend-shadcn'

type AvatarIconProps = {
  icon: string
  className?: string
}

const AvatarIcon: React.FC<AvatarIconProps> = (props) => {

  const { icon, className } = props || {}

  return(
  <Avatar className='rounded-lg'>
    <AvatarFallback 
      className={cn(
        'rounded-lg bg-primary', 
        className
      )}>
      <RemixIcon 
        name={ icon } 
        className='text-primary-foreground' 
      />
    </AvatarFallback>
  </Avatar>									
  )
}

export default AvatarIcon