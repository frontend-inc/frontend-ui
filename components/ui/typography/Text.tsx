'use client'

import React from 'react'
import { Typography } from '../../core'
import { cn } from 'frontend-shadcn'
import { TypographyVariantsType } from '@/types'

export type TextProps = {  
	description: string	
  variant?: TypographyVariantsType
}

const Text: React.FC<TextProps> = (props) => {
	const {
    variant='body1',
		description,
	} = props || {}

	return (
    <Typography 
      variant={variant}
      className={cn(
        "text-md leading-10 text-muted-foreground",
      )}
    >
      {description}
    </Typography>
	)
}

export default Text
