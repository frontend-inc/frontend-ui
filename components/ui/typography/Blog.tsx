'use client'

import React from 'react'
import { Label, Typography } from '../../../components'
import { TypographyVariantsType } from '@/types'
import { 
  Avatar,
  AvatarImage,
  AvatarFallback,
  Badge 
} from 'frontend-shadcn'

export type BlogProps = {  
  image?: string
  label?: string
  title?: string
  subtitle?: string
  publishedAt?: string
  author?: string  
  avatar?: string  
  tags?: string[]
	html: string	
  textAlign?: 'left' | 'center' | 'right'
  variant?: TypographyVariantsType
}

const Blog: React.FC<BlogProps> = (props) => {
	
  const {
    variant='h2',    
    label,
    title,
    subtitle,
    publishedAt,
		html,
    author,
    avatar,
    tags=[],
    textAlign='left'
	} = props || {}
  
	return (  
    <div className="w-full flex flex-col space-y-6">
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
        <div className="flex my-3 space-x-3">
          <Avatar>
            { avatar && <AvatarImage src={avatar} alt={author} /> }
            <AvatarFallback className="bg-primary">
              {author}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col space-y-0">
            <Typography variant="body2" className="font-medium text-foreground">
              {author}
            </Typography>
            <Typography variant="body2" className="text-muted-foreground">
              { publishedAt }
            </Typography>
          </div>
        </div>            
      )}  
      { subtitle && (
        <div className="w-full py-2 border-l-4 pl-6 border-border">
          <Typography variant="subtitle2" className="text-lg italic text-muted-foreground">
            { subtitle }
          </Typography>
        </div>
      )}        
      <div className='w-full prose py-0'>
        <div              
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
      { tags.length > 0 && (
        <div className="flex space-x-2 py-2">
          { tags.map((tag, index) => (
            <Badge className="px-3 py-1" variant='outline' key={index}>{ tag }</Badge>
          ))}
        </div>
      )}           
    </div>
	)
}

export default Blog
