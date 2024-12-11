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
		<Stack direction="row">
      <Stack direction="row" size="1/2">
        <Image 
          src={image}
          objectFit="cover"
          enableOverlay={enableOverlay}
          enableGradient={enableGradient} 
        />
      </Stack>
      <Stack direction="row" size="1/2">
        <Heading 
          label={label}
          title={ title }
          subtitle={ subtitle }
          editable={editable}
          handleChange={handleChange}
        />
        <ul>
          { items?.map((item, idx) => (
            <li key={idx}>
              <BlurFade delay={0.25 + idx * 0.05} inView>
                { item?.icon && (
                  <RemixIcon name={item.icon} size="lg" className="text-primary-foreground mr-2" />
                )}
                <div className="flex flex-col justify-center space-y-2">
                  <Typography variant="body1">{ item.title }</Typography>
                  <Typography variant="body2" className="text-muted-foreground">{ item.subtitle }</Typography>
                </div>
              </BlurFade>
            </li>
          ))}
        </ul>
      </Stack>
    </Stack>
	)
}

export default FeatureItem
