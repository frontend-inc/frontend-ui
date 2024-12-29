import React from 'react'
import { cn } from '@nextui-org/react'
import { AspectRatio } from 'frontend-shadcn'

type GradientProps = {
  disableBorderRadius?: boolean
  height?: number
}

type NoImageProps = GradientProps & {
  aspectRatio?: number
}

const Gradient: React.FC<GradientProps> = (props) => {
  const { disableBorderRadius, height } = props || {}
  return(
    <div
      style={{
        height: height ? `${height}px` : '100%'
      }}
      className={cn(
        disableBorderRadius ? 'rounded-none' : 'rounded-large',
        'h-full w-full bg-gradient-to-br from-black to-gray-600'
      )}
    />    
  )
}

const NoImage: React.FC<NoImageProps> = (props) => {

  const { 
    radius='xl', 
    aspectRatio, 
    height 
  } = props || {}

  return(
    aspectRatio ?
      <AspectRatio ratio={aspectRatio}>    
        <Gradient radius={radius} />
      </AspectRatio> : 
      <Gradient 
        radius={radius} 
        height={height} 
      />
  )
}

export default NoImage 