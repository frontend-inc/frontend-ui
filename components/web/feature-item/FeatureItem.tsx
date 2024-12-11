'use client'

import React from 'react'
import { Typography, Heading, RemixIcon , Image, Stack } from '../..'
import { BlurFade } from '../..'
import { HeadingProps } from '../../../types'

export type FeatureItemProps = HeadingProps & {
	items: {
		icon?: string
		title?: string
		subtitle?: string
	}[]
  image?: string  
	enableGradient?: boolean
	enableOverlay?: boolean
  buttonText?: string
  path?: string
  url?: string  
}

const FeatureItem: React.FC<FeatureItemProps> = (props) => {
	
  const {
    label,
    title,
    subtitle,
    image,
    enableGradient,
    enableOverlay,		
		items = [],
    editable,
    handleChange
	} = props || {}

	return (
		<Stack direction="row" className="items-center">
      <Stack direction="row" size="1/2">
        <Image 
          src={image}
          objectFit="cover"
          enableOverlay={enableOverlay}
          enableGradient={enableGradient} 
        />
      </Stack>
      <Stack direction="row" size="1/2" className="h-full">
        <div className="flex flex-col space-y-4 h-full justify-center">
          <Heading 
            label={label}
            title={ title }
            subtitle={ subtitle }
            editable={editable}
            handleChange={handleChange}
          />
          <ul className="flex flex-col space-y-6 p-0">
            { items?.map((item, idx) => (
              <li key={idx} className="flex flex-row items-center space-x-2 h-[60px]">
                { item?.icon && (
                  <RemixIcon name={item.icon} size="lg" />
                )}
                <div className="flex flex-col justify-center space-y-0">
                  <Typography variant="body1">{ item.title }</Typography>
                  <Typography variant="body2" className="text-muted-foreground">{ item.subtitle }</Typography>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Stack>
    </Stack>
	)
}

export default FeatureItem
