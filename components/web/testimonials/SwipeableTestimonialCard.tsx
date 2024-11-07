'use client'

import React from 'react'
import { Typography } from '../../core'
import { AvatarImage } from '../..'
import Image from 'next/image'

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
          <Typography variant="h5" className="italic text-center leading-9 text-muted-foreground">
            { text }
          </Typography>						
        )}
				<div className="flex flex-row items-center space-x-2">
          <div className="min-w-[96px] min-h-[96px]">
            <Image 
              alt={author}
              src={avatar} 
              height={164} 
              width={164}
              className="rounded-full"
              style={{
                maxWidth: '96px',
                maxHeight: '96px',
                objectFit: 'cover'
              }}
            />
          </div>
					<Typography variant="body1" className="leading-8 text-muted-foreground">
						- {author}
					</Typography>
				</div>
			</div>					
	)
}

export default SwipeableTestimonialCard