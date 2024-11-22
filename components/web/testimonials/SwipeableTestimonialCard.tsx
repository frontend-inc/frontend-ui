'use client'

import React from 'react'
import { Container, Typography } from '../../../components'
import { Avatar, AvatarImage, AvatarFallback } from 'frontend-shadcn'

type SwipeableTestimonialCardProps = {
	author: string
	text: string
	avatar: string
	size?: 'small' | 'large'
}

const SwipeableTestimonialCard: React.FC<SwipeableTestimonialCardProps> = (
	props
) => {
	const { author, avatar, text } = props

	return (
    <Container maxWidth="sm">
      <div className="flex flex-col space-y-[40px] p-6 px-[40px] w-full h-full justify-start items-center">
        {text && (
          <Typography
            variant="subtitle1"
            className="italic font-normal text-center leading-loose text-muted-foreground"
          >
            {text}
          </Typography>
        )}
        <div className="flex flex-row items-center space-x-2">
          <Avatar className="h-[64px] w-[64px] rounded-full">
            <AvatarImage src={avatar} alt={author} />
            <AvatarFallback></AvatarFallback>
          </Avatar>
          <Typography variant="body2" className="text-muted-foreground">
            {author}
          </Typography>
        </div>
      </div>
    </Container>
	)
}

export default SwipeableTestimonialCard
