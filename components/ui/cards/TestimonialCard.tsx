'use client'

import React from 'react'
import { Typography } from '../..'
import {
  cn,
	Card,
	CardBody,
	CardHeader,
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
}

export const TestimonialCard: React.FC<TestimonialProps> = (props) => {
	const {
		text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		author = 'John Doe',
		avatar = '',
		variant = 'default',
		className,
	} = props || {}

	return (
		<Card 
      className={cn(
        'w-full h-full',
        className
      )}
      shadow="md"
    >
			<CardHeader className='px-3'>
				<User
					avatarProps={{
						src: avatar,
						color: 'primary',
						name: getInitials(author),
					}}
					name={author}
					description="Testimonial"
				/>
			</CardHeader>
			<CardBody className="p-6">
				{text && (
					<ScrollShadow>
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
