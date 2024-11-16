'use client'

import React from 'react'
import { Label, Typography } from '../../../components'
import { TypographyVariantsType } from '@/types'
import { cn } from 'frontend-shadcn'
import { 
  Avatar,
  AvatarImage,
  AvatarFallback,
  Badge 
} from 'frontend-shadcn'

export type BlogProps = {  
  label?: string
  title?: string
  subtitle?: string
  author?: string
  avatar?: string
  tags?: string[]
	text: string	
  textAlign?: 'left' | 'center' | 'right'
  variant?: TypographyVariantsType
}

const Blog: React.FC<BlogProps> = (props) => {
	
  const {
    variant='h2',
    label,
    title,
    subtitle,
		text,
    author,
    avatar,
    tags=[],
    textAlign='left'
	} = props || {}

	return (
    <div className="flex flex-col space-y-6">
      { label && (
        <Label label={ label } textAlign={textAlign} />        
      )}
      { title && (
        <Typography 
          variant={variant}
          textAlign={textAlign}
          className='text-foreground tracking-tight font-semibold'
        >
          {title}
        </Typography>
      )}
      { author && (
        <div className="flex space-x-3">
          <Avatar>
            <AvatarImage src={avatar} alt={author} />
            <AvatarFallback className="bg-primary">
              {author[0]}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col space-y-0">
            <Typography variant="body2" className="font-medium text-foreground">
              {author}
            </Typography>
            <Typography variant="body2" className="text-muted-foreground">
              { subtitle }
            </Typography>
          </div>
        </div>            
      )}
      { tags.length > 0 && (
        <div className="flex space-x-2 py-2">
          { tags.map((tag, index) => (
            <Badge className="px-3 py-1" variant='outline' key={index}>{ tag }</Badge>
          ))}
        </div>
      )}
      <Typography 
        variant='body1'
        className='text-muted-foreground leading-relaxed whitespace-pre-line'        
      >
        {text}
      </Typography>
    </div>
	)
}

export default Blog
