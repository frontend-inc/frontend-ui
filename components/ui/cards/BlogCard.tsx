'use client'

import React from 'react'
import { Image } from '../..'
import { CardProps } from './Card'
import { Typography } from '../..'
import { useNavigate } from '../../../hooks'
import { Button, Card, CardFooter, CardBody } from '@nextui-org/react'

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
      className="w-full overflow-hidden"
    >
      <CardBody className=" w-full">
        <Image
          label={label}
          src={image}
          alt={title}
          className='w-full aspect-square'
        />
      </CardBody>
      <CardFooter className="flex flex-col space-y-4 w-full">        
        <div className="flex flex-col space-y-1 w-full">
          { publishedAt && <Typography variant="caption">{publishedAt}</Typography> }
          <Typography variant="h5">{title}</Typography>
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
