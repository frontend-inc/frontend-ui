import React from 'react'
import { Card, CardFooter, Image } from '@nextui-org/react'
import { cn } from '@nextui-org/react'
import { AspectRatio } from 'frontend-shadcn'
import NoImage from './NoImage'


type ImageCardProps = {
  src: string
  label?: string
  aspectRatio?: number  
  handleClick?: () => void
  height?: number
  isBlurred?: boolean
  disableZoom?: boolean
  disableBorderRadius?: boolean
  enableGradient?: boolean
  enableOverlay?: boolean
  className?: string
}

const ImageCard: React.FC<ImageCardProps> = (props) => {

  const { 
    src, 
    label,
    handleClick,    
    isBlurred,
    disableZoom=false,
    disableBorderRadius=false,
    height,
    enableGradient, 
    enableOverlay,
    className
  } = props || {}

  return(
    <Card            
      isFooterBlurred
      isPressable={ handleClick ? true : false } 
      onPress={ handleClick } 
      className={ cn(
        disableBorderRadius ? 'rounded-none' : 'rounded-large',
        'relative w-full h-full'
      )}     
    >
      <Image   
        removeWrapper
        height={ height }
        radius='none'
        isBlurred={isBlurred}
        isZoomed={!disableZoom}
        src={src}
        alt={label}
        className={cn(
          "w-full h-full object-cover", 
          className
        )}
      /> 
      { enableGradient && <div className="z-20 absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent" /> }
      { enableOverlay && <div className="z-20 absolute top-0 left-0 w-full h-full bg-black bg-opacity-50" /> }
      { label && (
        <CardFooter className="z-20 p-3 w-full overflow-hidden py-1 absolute left-0 bottom-0 text-white text-sm">
          { label }
        </CardFooter>
      )}
    </Card>
  )
}


type NextImageProps = ImageCardProps & {
  aspectRatio?: number
}
  
const NextImage: React.FC<NextImageProps> = (props) => {

  const { 
    src,     
    height,
    aspectRatio,
    disableBorderRadius,
    ...rest 
  } = props || {}

  if(!src) return (
    <NoImage 
      disableBorderRadius={disableBorderRadius}
      aspectRatio={aspectRatio}
      height={height}
    />
  )
  return (
   aspectRatio ? 
    <AspectRatio ratio={aspectRatio}>
      <ImageCard 
        src={src}
        disableBorderRadius={disableBorderRadius}
        { ...rest }
      /> 
    </AspectRatio> : 
    <ImageCard 
      src={src}
      height={ height }
      disableBorderRadius={disableBorderRadius}
      { ...rest }      
    /> 
  )
}

export default NextImage