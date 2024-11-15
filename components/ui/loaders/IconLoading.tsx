'use client'

import React from 'react'
import { RiLoader4Line } from '@remixicon/react'
import { cn } from 'frontend-shadcn'

type IconLoadingProps = {
	color?: string
	size?: number
	className?: string
}

export default function IconLoading(props: IconLoadingProps) {

  const {
    size = 20,
    color = 'text-secondary',
    className,
  } = props
  
	return (
		<RiLoader4Line className={cn('animate-spin', color, className)} size={size} />
	)
}
