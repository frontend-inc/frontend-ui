'use client'

import React from 'react'
import { Typography } from '../../core'
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
			<div className="flex flex-col space-y-[40px] p-6 w-full h-full justify-start items-center">
        {text && (
          <Typography variant="h5" className="italic text-center leading-9 text-muted-foreground">
            { text }
          </Typography>						
        )}
				<div className="flex flex-row items-center space-x-2">
          <Avatar
            className="h-[64px] w-[64px] rounded-full"
          >
            <AvatarImage src={avatar} alt={author} />
            <AvatarFallback>
              { author }
            </AvatarFallback>
          </Avatar>
					<Typography variant="body1" className="leading-8 text-muted-foreground">
						- {author}
					</Typography>
				</div>
			</div>					
	)
}

export default SwipeableTestimonialCard