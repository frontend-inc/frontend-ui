'use client'
import React from 'react'
import { Image } from '../../../components'
import { cn } from '@nextui-org/react'
import { useTheme } from '../../../hooks'

type BackgroundImageProps = {
  image: string
  enableGradient?: boolean
  enableOverlay?: boolean  
  alt?: string
  height?: number
  disablePadding?: boolean
  children?: React.ReactNode
  className?: string  
}

const BackgroundImage: React.FC<BackgroundImageProps> = (props) => {

	const {
		children,
		image,
    alt,
    height=400,
		enableGradient,
    enableOverlay,
    className
	} = props

	return (
    <div className="relative w-full h-[400px]">
      <Image
        fullWidth
        disableBorderRadius
        src={image}
        alt={alt}
        enableGradient={enableGradient}
        enableOverlay={enableOverlay}
        className='h-[400px]'
      />
      <div
        className={cn(        
          'flex flex-col items-center justify-center z-20',
          'absolute top-0 left-0 w-full h-full px-3 sm:px-0',
          className
        )}
      >
        { children }
      </div>
  </div>
	)
}

export default BackgroundImage
