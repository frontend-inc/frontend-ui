'use client'

import React, { useState } from 'react'
import { Card } from '@nextui-org/react'
import { cloudinaryImageFromVideoUrl } from '../../../helpers'
import { Image, VideoModal, RemixIcon } from '../../../components'

type VideoCardProps = { 
  src: string
  image?: string
  title: string
  objectFit?: 'cover' | 'contain' 
  enableOverlay?: boolean
  enableGradient?: boolean
}

const VideoCard: React.FC<VideoCardProps> = (props) => {

  const { 
    src,
    image,
    enableOverlay,
    enableGradient, 
    objectFit='cover'
  } = props || {}

  const [open, setOpen] = useState(false)
  const cloudinaryImage = cloudinaryImageFromVideoUrl(src)
  
  return(
    <>
      <Card 
        isPressable 
        onPress={() => setOpen(true)}
        className="w-full relative"
        shadow="none"
      >
        <Image
          src={image ? image : cloudinaryImage }
          alt='video-cover'
          enableOverlay={enableOverlay}
          enableGradient={enableGradient}
          objectFit={objectFit}
          disableBorderRadius
        />
        <div className="absolute bottom-2 left-2">
          <RemixIcon name="ri-play-fill" />
        </div>
      </Card>
      <VideoModal
        open={ open }
        handleClose={ () => setOpen(false) }
        src={ src }
      />
    </>
  )
}

export default VideoCard 