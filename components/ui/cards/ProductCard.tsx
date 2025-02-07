'use client'

import React from 'react'
import { Typography } from '../../../components'
import { Image } from '../..'
import { cn, Button, Card, CardBody, CardFooter } from '@nextui-org/react'
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
  className?: string
  shadow?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
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
    className,
    shadow='sm'
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
      className={cn(
        "w-full overflow-hidden", 
        className
      )}
      shadow={ shadow }
    >
      <CardBody className='p-0 min-h-[240px] h-full w-full aspect-square'>    
        <Image
          disableBorderRadius
          fullWidth
          src={image}
          alt={title}
          label={label}
          isZoomed
          isBlurred
          enableGradient={enableGradient}
          enableOverlay={enableOverlay}
        />
      </CardBody> 
      <CardFooter className="flex flex-col justify-between">
        <div className="w-full h-full flex flex-col space-y-2">
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
          </div>   
        <Button 
          className='min-h-[44px] mb-2'
          fullWidth          
          variant="solid"
          color="primary"
          onPress={onClick}
        >
          {buttonText}
        </Button>
      </CardFooter>
    </Card>
  )
}


export default ProductCard
