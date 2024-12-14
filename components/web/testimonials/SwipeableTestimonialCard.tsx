'use client'

import React from 'react'
import { Stack, Container, Typography } from '../../../components'
import { Avatar, AvatarImage, AvatarFallback } from 'frontend-shadcn'

type SwipeableTestimonialCardProps = {
	author: string
	text: string
	avatar: string
	size?: 'small' | 'large'
	direction?: 'row' | 'column'
}

const SwipeableTestimonialCard: React.FC<SwipeableTestimonialCardProps> = (
	props
) => {
	const { direction, author, avatar, text } = props

	return (
		<Container maxWidth="lg">
      <div className="flex flex-col space-y-4 items-center justify-center w-full">
        {text && (
          <Typography
            variant="body1"
            textAlign='center'
            className="italic text-xl font-medium leading-loose text-foreground/80"
          >
            {text}
          </Typography>
        )}
        <Avatar className="h-[96px] w-[96px] rounded-full">
          <AvatarImage src={avatar} alt={author} />
          <AvatarFallback></AvatarFallback>
        </Avatar>
        <Typography variant="body2" className="text-foreground/80">
          {author}
        </Typography>
			</div>
		</Container>
	)
}

export default SwipeableTestimonialCard
