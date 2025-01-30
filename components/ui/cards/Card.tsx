'use client'

import React from 'react'
import {
	Card,
  CardBody,
	CardFooter,
	cn,
} from '@nextui-org/react'
import { Image, Typography } from '../..'
import { useNavigate } from '../../../hooks'
import { Button } from 'frontend-shadcn'

export type CardProps = {
  label?: string
	image?: string
	title: string
	subtitle?: string
	path?: string
	url?: string
	buttonText?: string
  objectFit?: 'cover' | 'contain' 
	className?: string
}

const SimpleCard: React.FC<SimpleCardProps> = (props) => {
	const { 
    label,
    title, 
    subtitle, 
    image, 
    path, 
    url, 
    buttonText, 
    objectFit,
    className 
  } =
		props || {}

	const onClick = useNavigate({
		url,
		path,
	})

	return (
		<Card
			className={cn('w-full overflow-hidden', className)}
		>
      <CardBody>
        <Image 
          disableBorderRadius
          label={label}
          src={image} 
          alt="card-image" 
          className='aspect-video' 
          objectFit={ objectFit }
        />
			<CardFooter className="w-full min-h-[80px] flex flex-col space-y-2 justify-start items-start">
        { title && (
					<Typography variant="subtitle2" className="text-foreground">
						{title}
					</Typography>
				)}
				{subtitle && (
					<Typography variant="body1" className="text-foreground/70">
						{subtitle}
					</Typography>
				)}
				{buttonText && (
					<Button 
            fullWidth             
            onPress={onClick}
          >
						{buttonText}
					</Button>
				)}
			</CardFooter>
      </CardBody>
		</Card>
	)
}

export default SimpleCard
