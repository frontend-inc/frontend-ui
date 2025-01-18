'use client'

import React from 'react'
import { 
  Card as NextUICard, 
  CardHeader, 
  CardBody, 
  CardFooter, 
  cn 
} from '@nextui-org/react'
import { Image, Typography } from '../..'
import { useNavigate } from '../../../hooks'
import { Button } from 'frontend-shadcn'

export type CardProps = {
	image?: string
	title: string
	subtitle?: string
	path?: string
  url?: string
  buttonText?: string
	className?: string
}

const Card: React.FC<CardProps> = (props) => {
  
  const {
    title,
    subtitle,
    image,
    path,
    url,
    buttonText, 
    className
  } = props || {}

  const onClick = useNavigate({
    url,
    path 
  })

  return (
    <NextUICard
      isHoverable
      isPressable 
      onPress={ onClick }
      className={cn('w-full min-h-[340px] overflow-hidden', className)}
    >
      { title && (
        <CardHeader>
          { title }
        </CardHeader>
      )}
    <CardBody className="py-0">
      <Image         
        src={image}        
        alt='card-image'          
      />
    </CardBody>
    <CardFooter className='w-full min-h-[80px] flex flex-col space-y-2 justify-start items-start'>
      {subtitle && (
        <Typography variant="body1" className="text-foreground/70">
          {subtitle}
        </Typography>
      )}
      { buttonText && (
        <Button 
          fullWidth 
          color='primary'
          onPress={onClick}
        >
          { buttonText }
        </Button>
      )}
    </CardFooter>
  </NextUICard>
  )
}


export default Card
