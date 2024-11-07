'use client'

import React from 'react'
import { Typography } from '../../core'
import { AvatarImage } from '../..'

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
			<div className="container max-w-screen-md px-6 mx-auto flex flex-col p-6 w-full h-full justify-start items-center start space-y-[40px]">
        {text && (
          <Typography variant="h5" className="italic text-center">
            { text }
          </Typography>						
        )}
				<div className="flex flex-row items-center space-x-2">
          <div>
            <AvatarImage 
              alt={author}
              src={avatar} 
              size={48} 
            />
          </div>
					<Typography variant="body1" className="leading-relaxed text-muted-foreground">
						&mdash; {author}
					</Typography>
				</div>
			</div>					
	)
}

export default SwipeableTestimonialCard