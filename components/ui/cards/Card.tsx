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
import { Button } from '@nextui-org/react'

export type CardProps = {
  label?: string
	image?: string
	title: string
	subtitle?: string
	path?: string
	url?: string
	buttonText?: string
  objectFit?: 'cover' | 'contain' 
  shadow?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
	className?: string
}

const SimpleCard: React.FC<CardProps> = (props) => {
	const { 
    label,
    title, 
    subtitle, 
    image, 
    path, 
    url, 
    buttonText, 
    objectFit,
    shadow='sm',
    className 
  } = props || {}

	const onClick = useNavigate({
		url,
		path,
	})

	return (
		<Card
			className={
        cn('w-full overflow-hidden', 
        className
      )}
      shadow={ shadow }
		>
      <CardBody className='p-0 w-full'>
        <Image 
          disableBorderRadius
          label={label}
          src={image} 
          alt="card-image" 
          className='aspect-square' 
          objectFit={ objectFit }
        />
      </CardBody>
      <CardFooter className="w-full min-h-[140px] justify-between items-start flex flex-col space-y-2">
        <div className="flex flex-col space-y-2 w-full">
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
        </div>
				{buttonText && (
					<Button 
            fullWidth             
            onPress={onClick}
          >
						{buttonText}
					</Button>
				)}
			</CardFooter>
		</Card>
	)
}

export default SimpleCard
