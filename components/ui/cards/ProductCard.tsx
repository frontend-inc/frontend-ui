'use client'

import React from 'react'
import { cn } from '@nextui-org/react'
import { Typography } from '../../../components'
import { Image } from '../..'
import { Button, Card, CardBody, CardFooter } from '@nextui-org/react'
import { useNavigate } from '../../../hooks'

export type ProductCardProps = {
	avatar?: React.ReactNode
	image: string
	label?: string
	title: string
	subtitle?: string | React.ReactNode
	price: string
	compareAtPrice?: string
  url?: string
  path?: string
  buttonText?: string
	enableGradient?: boolean
	enableOverlay?: boolean
}

const ProductCard: React.FC<ProductCardProps> = (props) => {

  const {
    label,
    title,
    subtitle,
    price,
    compareAtPrice,
    image,
    buttonText='Purchase',			
    url,
    path,
    enableGradient = false,
    enableOverlay = false,
  } = props

  const onClick = useNavigate({
    path,
    url,      
  })

  return (
    <Card
      //@ts-ignore
      isPressable 
			onPress={ onClick }
      className="w-full overflow-hidden"
    >
      <CardBody className='w-full aspect-square'>    
        <Image
          fullWidth
          src={image}
          alt={title}
          label={label}
          isZoomed
          isBlurred
          enableGradient={enableGradient}
          enableOverlay={enableOverlay}
          className='aspect-square'
        />
      </CardBody> 
      <CardFooter>
        <div className="w-full h-full px-2 flex flex-col space-y-2">
          <Typography variant="subtitle1">{title}</Typography>
          <div className="flex flex-row space-x-2">
            <Typography className="text-lg text-foreground" variant="caption">
              {price} {compareAtPrice && (
                <span className="text-sm line-through text-foreground/70">
                  {compareAtPrice}
                </span>
              )}
            </Typography>            
          </div>
          {subtitle && (
            <Typography
              className="text-sm text-foreground/70"
              variant="body2"
            >
              {subtitle}
            </Typography>
          )}          
        <Button 
          className='min-h-[44px]'
          fullWidth          
          variant="solid"
          color="primary"
          onPress={onClick}
        >
          {buttonText}
        </Button>
        </div>
      </CardFooter>
    </Card>
  )
}


export default ProductCard
