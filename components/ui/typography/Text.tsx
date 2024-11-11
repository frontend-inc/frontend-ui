'use client'

import React from 'react'
import { Typography } from '../../core'
import { Heading } from '../..'
import { cn } from 'frontend-shadcn'

export type TextProps = {
  label?: string
	title: string
  subtitle?: string
	description: string	
	textAlign?: 'center' | 'left'
	size?: 'sm' | 'md' | 'lg' | 'xl'	
}

// Call To Action
const Text: React.FC<TextProps> = (props) => {
	const {
		label,
		title,
    subtitle,
		description,
		textAlign='center',
		size = 'lg',
	} = props || {}

	return (
		<div className="container max-w-screen-md mx-auto">
			<div className="flex flex-col space-y-6">
				<Heading
					label={label}
					title={title}
          subtitle={subtitle}
					textAlign={textAlign}
					size={size}
				/>        				
        <Typography 
          variant="body1" 
          className={cn(
            "text-md leading-10 text-muted-foreground",
          )}
        >
          {description}
        </Typography>
			</div>
		</div>
	)
}

export default Text
