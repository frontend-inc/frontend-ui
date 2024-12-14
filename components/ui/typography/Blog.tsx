'use client'

import React from 'react'
import { Container, Image, RichText, Typography } from '../../../components'
import { TypographyVariantsType } from '../../../types'
import { Avatar, AvatarImage, AvatarFallback, Badge } from 'frontend-shadcn'
import { HeadingProps } from '../../../types'

export type BlogProps = HeadingProps & {
	image?: string
  description?: string
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
    editable,
    handleChange,
    image,
		variant = 'h2',
		label,
		title,
		subtitle,
		description,
    publishedAt,
		html,
		author,
		avatar,
		tags = [],
		textAlign = 'left',
	} = props || {}

	return (
		<div className="w-full flex flex-col space-y-6">
      <Container maxWidth='md'>
        <div className="w-full flex flex-col space-y-6">
          {label && (
            <Typography 
              variant="caption" 
              textAlign={textAlign}
              name='label'
              editable={editable}
              handleChange={handleChange}
            >
              { label }
            </Typography>
          )}
          {title && (
            <Typography
              variant={variant}
              textAlign={textAlign}
              className="text-foreground tracking-tight font-semibold"
              name='title'
              editable={editable}
              handleChange={handleChange}
            >
              {title}
            </Typography>
          )}
            <div className="flex my-3 space-x-3">
              <Avatar>
                {avatar && <AvatarImage src={avatar} alt={author} />}
                <AvatarFallback className="bg-primary">
                  {author?.slice(0, 1)}
                </AvatarFallback>
              </Avatar>
              <div className="flex flex-col space-y-0">
                <Typography 
                  name='author'
                  editable={editable}
                  handleChange={handleChange}
                  variant="body2" className="font-medium text-foreground">
                  {author}
                </Typography>
                <Typography 
                  name='description'
                  editable={editable}
                  handleChange={handleChange}
                  variant="body2" 
                  className="text-foreground/70"
                >
                  {description}
                </Typography>
              </div>
            </div>
          {subtitle && (
            <Typography
              variant="subtitle2"
              className="text-lg text-foreground/70"
              name='subtitle'
              editable={editable}
              handleChange={handleChange}
            >
              {subtitle}
            </Typography>
          )}
        </div>
      </Container>
      { image && (
        <Image 
          src={image}
          alt={title}
          aspectRatio={1.5}          
        />
      )}
      <Container maxWidth='md'>
        <div className='flex flex-col space-y-10'>
          <RichText 
            html={html}
            editable={editable}
            handleChange={handleChange}
          />			
          {tags.length > 0 && (
            <div className="flex space-x-2 py-2">
              {tags.map((tag, index) => (
                <Badge className="px-3 py-1" variant="outline" key={index}>
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </div>
      </Container>
		</div>
	)
}

export default Blog
