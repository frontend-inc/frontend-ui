'use client'

import React from 'react'
import { Drawer, Image, Typography, CollectionProducts } from '../..'
import { useResourceContext } from 'frontend-js'

export type ShowModalProps = {
	handle?: string
	enableFavorites?: boolean
	enableLikes?: boolean
	enableSharing?: boolean
	enableGradient?: boolean
	enableOverlay?: boolean
}

const ShowModal: React.FC<ShowModalProps> = (props) => {
	const { openShow, setOpenShow, resource } = useResourceContext()

	const {
		enableLikes,
		enableFavorites,
		enableGradient,
		enableOverlay,
	} = props || {}

	if (!resource) return null
	return (
		<Drawer 
      title={resource?.title}
      open={openShow} 
      handleClose={() => setOpenShow(false)}
    >
      <div className="w-full flex flex-row justify-center pb-10">
        <div className="w-full md:max-w-screen-sm flex flex-col space-y-[40px]">        
          <div className="w-full flex flex-col space-y-3">
            <Typography variant="body1" className="text-muted-foreground">
              {resource?.description}
            </Typography>	
          </div>
          <CollectionProducts 
            enableGradient={enableGradient}
            enableOverlay={enableOverlay}
            enableLikes={enableLikes}
            enableFavorites={enableFavorites}
            productCollectionId={resource.id}
          />
        </div>
      </div>
		</Drawer>
	)
}

export default ShowModal
