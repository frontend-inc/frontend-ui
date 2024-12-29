import React from 'react'
import { Card, Image } from '@nextui-org/react'
import { cn } from '@nextui-org/react'
import { AspectRatio } from 'frontend-shadcn'

type NextImageProps = {
  src: string
  label?: string
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'full'
  handleClick?: () => void
  height?: number
  width?: number
  isBlurred?: boolean
  disableZoom?: boolean
  enableGradient?: boolean
  enableOverlay?: boolean
  className?: string
}

const NextImage: React.FC<NextImageProps> = (props) => {

  const { 
    src, 
    label,
    radius='lg',
    handleClick,    
    isBlurred,
    disableZoom=false,
    height,
    width,
    enableGradient, 
    enableOverlay,
    className
  } = props || {}

  return (
    src ? 
    <Card
      isPressable={ handleClick ? true : false } 
      onPress={ handleClick } 
      className='relative w-full h-full'     
    >
      <Image   
        removeWrapper
        height={height}
        radius={radius}      
        isBlurred={isBlurred}
        isZoomed={!disableZoom}
        src={src}
        alt={label}
        className="w-full h-full object-cover"
      /> 
      { enableGradient && <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent" /> }
      { enableOverlay && <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50" /> }
    </Card>
    : 
    <div
      style={{
        height: `${height}px`,
      }}
      className={cn(
        radius && `rounded-${radius}`,
        'h-full w-full bg-gradient-to-br from-black to-gray-600'
      )}
    />
  )
}

export default NextImage