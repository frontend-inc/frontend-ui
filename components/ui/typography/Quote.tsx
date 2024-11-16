'use client'

import React from 'react'
import { cn } from 'frontend-shadcn'
import { RiDoubleQuotesL } from '@remixicon/react'

export type QuoteProps = {  
	text: string	
  author?: string
  className?: string
}

const Quote: React.FC<QuoteProps> = (props) => {

	const {
		text,
    author,
    className
	} = props || {}

	return (
    <figure className={cn("max-w-screen-md mx-auto text-center", className)}>
    <RiDoubleQuotesL size={36} className="text-foreground/50" />    
    <blockquote>
      <p className="text-2xl italic font-medium text-foreground">
        {text}
      </p>
    </blockquote>
    {author && (
      <figcaption className="flex items-center justify-center mt-6 space-x-3">
        <div className="flex items-center divide-x-2 divide-border">
          <cite className="pr-3 font-medium text-foreground">
            {author}
          </cite>
        </div>
      </figcaption>
    )}
  </figure>

	)
}

export default Quote
