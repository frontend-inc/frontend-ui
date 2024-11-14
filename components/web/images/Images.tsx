'use client'

import React, { useState } from 'react'
import { Image, ImageModal, Placeholder } from '../..'
import { BlurFade } from '../..'

type ImageType = {
	label?: string
	title: string
	subtitle?: string
	image: string
}

export type ImagesProps = {
	style?: 'card' | 'cover'
	items: ImageType[]
	enableBorder?: boolean
	enableGradient?: boolean
	enableOverlay?: boolean
}

const Images: React.FC<ImagesProps> = (props) => {
	const { items, enableGradient, enableOverlay } = props || {}

  const [open, setOpen] = useState(false)
  const [activeImage, setActiveImage] = useState<ImageType>()
	const handleClick = (image) => {
    setActiveImage(image)
    setOpen(true)
  }

	return (
		<div className="w-full justify-center flex flow-row p-2">
      <div className="container mx-auto max-w-screen-2xl">
        <div 
          className={           
            "w-full justify-center grid grid-cols-1 sm:grid-cols-3 gap-6"
          }>
          {items?.map((item, idx) => (
            <BlurFade delay={0.25 + idx * 0.05} key={idx}>
              <Image
                label={item?.label}
                src={item?.image}
                handleClick={() => handleClick(item)}
                enableGradient={enableGradient}
                enableOverlay={enableOverlay}							
              />
            </BlurFade>
          ))}
        </div>
			{items?.length == 0 && (
				<Placeholder
					icon="ri-collage-fill"
					title="No images yet."
					description="Images will appear here."
				/>
			)}
		</div>
    <ImageModal 
      open={open}
      handleClose={() => setOpen(false)}
      //@ts-ignore 
      src={ activeImage?.image }
      title={ activeImage?.title }
    />      
    </div>
	)
}

export default Images
