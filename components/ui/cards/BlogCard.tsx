'use client'

import React from 'react'
import { Image } from '../..'
import { CardProps } from './Card'
import { Typography } from '../..'
import { useNavigate } from '../../../hooks'
import { cn, Button, Card, CardFooter, CardBody } from '@nextui-org/react'

type BlogCard = CardProps & {
  publishedAt?: string
}

const BlogCard: React.FC<BlogCard> = (props) => {
	
  const {
		label,
		title,
		subtitle,
    publishedAt,
		image,
    url,
    path,
    buttonText,
    className,
    shadow='sm'
	} = props || {}

  const onClick = useNavigate({
    url,
    path,
  })

	return (
		<Card
      //@ts-ignore
      isPressable 
			onPress={ onClick }
      className={cn("w-full overflow-hidden", className)}
      shadow={ shadow }
    >
      <CardBody className="p-0 w-full">
        <Image
          label={label}
          src={image}
          alt={title}   
          disableBorderRadius       
          className='aspect-square'
        />
      </CardBody>
      <CardFooter className="min-h-[140px] flex flex-col space-y-4 w-full">        
        <div className="flex flex-col space-y-1 w-full">
          { publishedAt && <Typography variant="caption">{publishedAt}</Typography> }
          <Typography variant="subtitle1">{title}</Typography>
          <Typography variant="body2" className="text-foreground/70">
            {subtitle}
          </Typography>
        </div>
        { buttonText && (
          <Button 
            fullWidth    
            variant="solid"
            color="primary"         
            onPress={onClick}
          >
            { buttonText }
          </Button>
        )}
      </CardFooter>
  </Card>			
	)
}

export default BlogCard
