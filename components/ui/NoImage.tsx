'use client'

import React from 'react'
import { cn } from 'frontend-shadcn'
import { Icon } from '../../components'
import { 
  Avatar, 
  AvatarFallback, 
  AspectRatio 
} from 'frontend-shadcn'

type NoImageProps = {
  aspectRatio?: number
	height?: number
  icon?: string
	disableBorder?: boolean
	disableBorderRadius?: boolean
}

const NoImage: React.FC<NoImageProps> = (props) => {
	const { height = 240, icon='Play', aspectRatio=1.0, disableBorderRadius } = props

	return (
    <div 
      className={cn(
        !disableBorderRadius && 'rounded-lg',
        'relative h-full w-full overflow-hidden'
      )} 
      style={{ 
        maxHeight: `${height}px` 
      }}
    >
    <AspectRatio ratio={aspectRatio}>
      <div
        className={cn(
          !disableBorderRadius && 'rounded-lg',
          'h-full w-full bg-gradient-to-br from-black to-gray-600'
        )}        
      />
    </AspectRatio>
    {icon && (
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <Avatar>
          <AvatarFallback className="bg-transparent border border-white">
            <Icon name={icon} className="text-white" />
          </AvatarFallback>
        </Avatar>
      </div>
      )}
    </div>
	)
}

export default NoImage
