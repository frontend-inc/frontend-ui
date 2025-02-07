'use client'

import React from 'react'
import { Typography } from '../..'
import {
  cn,
	Card,
	CardBody,
	CardHeader,
  CardFooter,
	User,
	ScrollShadow,
} from '@nextui-org/react'
import { getInitials } from '../../../helpers'

export type TestimonialCardType = {
	author: string
	text: string
	avatar: string
}

type TestimonialProps = {
	author: string
	text: string
	avatar: string
	variant?: 'outline' | 'fill' | 'default'
	className?: string
  shadow?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
}

export const TestimonialCard: React.FC<TestimonialProps> = (props) => {
	const {
		text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		author = 'John Doe',
		avatar = '',
		className,
    shadow = 'sm',
	} = props || {}

	return (
		<Card 
      className={cn(
        'w-full h-full',
        className
      )}
      shadow={ shadow }
    >			
			<CardBody className="p-6 pb-0">
				{text && (
					<ScrollShadow>
						<Typography variant="body1" className="font-normal leading-loose">
							{text}
						</Typography>
					</ScrollShadow>
				)}
			</CardBody>
      <CardFooter className='px-6 pb-4'>
				<User
					avatarProps={{
						src: avatar,
            size: 'md',
						color: 'primary',
						name: getInitials(author),
					}}
          classNames={{
            name: 'text-lg font-semibold',
            description: 'text-sm font-normal text-foreground/70'
          }}          
					name={author}
					description="Testimonial"
				/>
			</CardFooter>
		</Card>
	)
}

export default TestimonialCard
