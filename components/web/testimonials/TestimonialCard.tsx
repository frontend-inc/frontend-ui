'use client'

import React from 'react'
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

export default TestimonialCard
