'use client'

import React from 'react'
import { Typography } from '../../core'
import { TypographyVariantsType } from '@/types'
import { cn } from 'frontend-shadcn'

export type TextProps = {  
  title?: string
	text: string	
  textAlign?: 'left' | 'center' | 'right'
  variant?: TypographyVariantsType
}

const Text: React.FC<TextProps> = (props) => {
	
  const {
    variant='h6',
    title,
		text,
    textAlign='left'
	} = props || {}

	return (
    <div className="flex flex-col space-y-3">
      { title && (
      <Typography 
        variant={variant}
        textAlign={textAlign}
        className='text-foreground'
      >
        {title}
      </Typography>
      )}
      <Typography 
        variant='body1'
        className='text-muted-foreground'        
      >
        {text}
      </Typography>
    </div>
	)
}

export default Text
