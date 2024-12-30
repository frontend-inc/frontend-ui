'use client'

import React from 'react'
import { TestimonialType } from '../../../types'
import { Typography } from '../../../components'
import { 
  Card, 
  CardBody, 
  CardHeader,
  CardFooter, 
  User, 
  ScrollShadow 
} from '@nextui-org/react'
import { getInitials } from '../../../helpers'

type TestimonialProps = {
	text: string
	author: string
	image?: string
	size?: 'small' | 'large'	
  variant?: 'outline' | 'fill' | 'default'
}

const TestimonialCard: React.FC<TestimonialProps> = (props) => {
	const { text, author, image = '', variant='default' } = props || {}

	return (
		<Card 
      shadow={ variant == "default" ? "none" : "md" }
      className={
        variant == 'fill' ? 'bg-muted' : ''
      }
    >
      <CardHeader className="p-6">
        <User 
          avatarProps={{
            src: image,
            color: 'primary',
            name: getInitials(author),
            variant: 'circular',
          }}
          name={author}
          description="Testimonial"
        />				
      </CardHeader>      
			<CardBody className="p-6">				
        {text && (
          <ScrollShadow style={{ height: '200px' }}>
            <Typography variant="body1" className="font-normal leading-loose">
              {text}
            </Typography>
          </ScrollShadow>
        )}				
      </CardBody>
		</Card>
	)
}

type TestimonialCardsProps = {
	size?: 'small' | 'large'
	items: TestimonialType[]
	variant?: 'fill' | 'outline' | 'default'
}

const TestimonialCards: React.FC<TestimonialCardsProps> = (props) => {
	const { size = 'small', variant, items = [] } = props

	return (
		<div className="container mx-auto max-w-screen-lg">
			<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
				{items?.map((testimonial, i) => (
					<TestimonialCard
						key={i}
						size={size}
						image={testimonial.image}
						author={testimonial.title}
						text={testimonial.subtitle}
						variant={variant}
					/>
				))}
			</div>
		</div>
	)
}

export default TestimonialCards
