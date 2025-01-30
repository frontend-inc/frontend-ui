'use client'

import React from 'react'
import { Image } from '../..'
import { CardProps } from './Card'
import { Typography } from '../..'
import { useNavigate } from '../../../hooks'
import { Button, Card, CardBody } from '@nextui-org/react'

type BlogListCard = CardProps & {
  publishedAt?: string
}

const BlogListCard: React.FC<BlogListCard> = (props) => {
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
      <CardBody className="flex flex-col md:flex-row gap-4 w-full">
        <div className="flex h-[190px]">
          <Image
            label={label}
            src={image}
            alt={title}
            className='aspect-square'
          />
        </div>
        <div className="flex">
          <div className="flex flex-col space-y-1">
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
        </div>
      </CardBody>
  </Card>			
	)
}

export default BlogListCard
