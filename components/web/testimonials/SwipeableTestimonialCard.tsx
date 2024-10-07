import React from 'react'
import { Stack, Typography } from '@mui/material'
import { Avatar, Image, ExpandableText } from '../..'

type SwipeableTestimonialCardProps = {
  author: string
  text: string
  rating?: number
  image?: string
  avatar?: string
  size?: 'small' | 'large'
}

export default function SwipeableTestimonialCard(props: SwipeableTestimonialCardProps = {
  author: '',
  text: '',
  image: '',
  avatar: ''
}) {
  const { author, avatar, text, image } = props

  return (
    <Stack 
      direction={'row'} 
      className="w-full min-h-[320px] overflow-hidden rounded-lg border border-divider bg-background"
    >
      <Stack 
        spacing={1} 
        className="p-6 w-full sm:w-1/2 justify-around sm:justify-between items-start h-full"
      >
        <div className="flex flex-col items-center">
          {text && (
            <ExpandableText color='text.secondary' text={text} variant="h5" />            
          )}											
        </div>
        <Stack 
          direction="row" 
          spacing={1} 
          className="w-full items-center"
        >
          <Avatar src={avatar} size={48} />
          <Typography variant="body2" color="text.secondary">
            &mdash; {author}
          </Typography>
        </Stack>
      </Stack>
      {image && (
        <div className="flex justify-center items-center overflow-hidden w-full sm:w-1/2">
          <Image src={image} height={320} disableBorderRadius />
        </div>
      )}
    </Stack>
  )
}