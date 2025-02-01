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
