'use client'

import React from 'react'
import { Container, Typography } from '../../../components'
import { 
  Card, 
  CardHeader, 
  CardBody, 
  CardFooter, 
  ScrollShadow, 
  User 
} from '@nextui-org/react'
import { getInitials } from '../../../helpers'

type SwipeableTestimonialCardProps = {
	author: string
	text: string
	avatar: string
	size?: 'small' | 'large'
	direction?: 'row' | 'column'
  variant?: 'outline' | 'fill' | 'default'
}

const SwipeableTestimonialCard: React.FC<SwipeableTestimonialCardProps> = (
	props
) => {
	
  const { 
    author, 
    avatar, 
    text, 
    variant='default' 
  } = props || {}

	return (
		<Container maxWidth="lg">     
      <Card 
        className={
          variant == 'fill' ? 'bg-muted' : ''
        }
      >
        <CardBody className="p-6">
        <ScrollShadow className="h-[220px] w-full">
          {text && (
            <Typography
              variant="body1"
              textAlign='center'
              className="italic text-xl font-medium leading-loose text-foreground/80"
            >
              {text}
            </Typography>
          )}
        </ScrollShadow>
        </CardBody>
        <CardFooter>
          <User 
            avatarProps={{
              src: avatar,
              color: 'primary',
              size: 'lg',
              name: getInitials(author),
              variant: 'circular',
            }}
            name={author}
            description="Testimonial"
          />		
        </CardFooter>  
      </Card> 
		</Container>
	)
}

export default SwipeableTestimonialCard
