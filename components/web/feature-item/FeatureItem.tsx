'use client'

import React from 'react'
import { Typography, Heading, RemixIcon , Image, Stack } from '../..'
import { BlurFade } from '../..'
import { HeadingProps } from '../../../types'

export type FeatureItemProps = HeadingProps & {
  direction?: 'row' | 'row-reverse'
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
    direction='row',
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
		<Stack direction={ direction } spacing={10} className="items-center">
      <Stack direction="row" size="1/2">
        <Image 
          src={image}          
          enableOverlay={enableOverlay}
          enableGradient={enableGradient} 
        />
      </Stack>
      <Stack direction="row" size="1/2" className="h-full">
        <div className="flex flex-col space-y-4 h-full justify-center w-full">
          <Heading 
            label={label}
            title={ title }
            subtitle={ subtitle }
            editable={editable}
            handleChange={handleChange}
            size="lg"
          />
          <ul className="flex flex-col space-y-2 w-full p-0">
            { items?.map((item, idx) => (
              <li key={idx} className="flex flex-row w-full items-center space-x-2 h-[60px]">
                { item?.icon && (
                  <RemixIcon name={item.icon} className='text-primary' size="xl" />
                )}
                <div className="flex flex-col justify-center space-y-0">
                  <Typography variant="subtitle2">{ item.title }</Typography>
                  <Typography variant="body1" className="text-foreground/70">{ item.subtitle }</Typography>
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
