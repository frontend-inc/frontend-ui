'use client'

import React from 'react'
import { Drawer, ProductDetails, ProductReviews } from '../..'
import { useResourceContext } from 'frontend-js'

export type ShowModalProps = {
	handle?: string
	enableFavorites?: boolean
	enableLikes?: boolean
	enableSharing?: boolean
	enableRatings?: boolean
	enableGradient?: boolean
	enableOverlay?: boolean
}

const ShowModal: React.FC<ShowModalProps> = (props) => {
	const { openShow, setOpenShow, resource } = useResourceContext()

	const {
		enableRatings,
		enableLikes,
		enableFavorites,
		enableGradient,
		enableOverlay,
	} = props || {}

	if (!resource) return null
	return (
		<Drawer 
      open={openShow} handleClose={() => setOpenShow(false)}>
      <div className="w-full flex flex-row justify-center pb-10">
        <div className="md:w-screen-sm w-full flex flex-col space-y-[20px]">
          <ProductDetails
            direction="column"
            product={resource}              
            enableGradient={enableGradient}
            enableOverlay={enableOverlay}
            enableFavorites={enableFavorites}
            enableLikes={enableLikes}
            enableRatings={enableRatings}
          />
          { enableRatings && (
            <ProductReviews
              productId={resource?.id}
            />
          )}
        </div>
      </div>
		</Drawer>
	)
}

export default ShowModal
