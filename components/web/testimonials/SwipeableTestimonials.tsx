'use client'

import React from 'react'
import { Swipeable } from '../../../components'
import { Container, Typography } from '../../../components'
import { 
  Card, 
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
        shadow={ variant == 'default' ? 'none' : 'sm' }
        className={
          variant == 'fill' ? 'bg-content1' : ''
        }
      >
        <CardBody className="p-10">
          <ScrollShadow className="h-[160px] w-full">
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
        <CardFooter className="flex p-6 items-center justify-center">
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


type SwipeableTestimonialsProps = {
	items: Record<string, any>[]	
  variant?: 'outline' | 'fill' | 'default'
}

const SwipeableTestimonials: React.FC<SwipeableTestimonialsProps> = (props) => {
	const { items = [], variant } = props || {}

	return (
		<Swipeable itemsPerSlide={2} enableArrows>
			{items?.map((testimonial, i) => (
				<div key={i} className="flex items-center justify-center pb-[60px]">
					<SwipeableTestimonialCard
						avatar={testimonial.image}
						author={testimonial.title}
						text={testimonial.subtitle}
            variant={ variant }
					/>
				</div>
			))}
		</Swipeable>
	)
}

export default SwipeableTestimonials
