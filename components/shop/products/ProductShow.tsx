'use client'

import React from 'react'
import { Drawer, ProductDetails } from '../..'
import { useResourceContext } from 'frontend-js'
import { ButtonType, DisplayFieldType } from '../../../types'

export type ShowModalProps = {
	handle?: string
	enableBorder?: boolean
	buttons: ButtonType[]
	displayFields: DisplayFieldType[]
	fieldName?: string
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
		displayFields = [],
		enableRatings,
		enableLikes,
		enableFavorites,
		enableSharing,
		enableGradient,
		enableOverlay,
	} = props || {}

	if (!resource) return null
	return (
		<Drawer open={openShow} handleClose={() => setOpenShow(false)}>
      <div className="w-full flex flex-row justify-center pb-10">
        <div className="md:max-w-screen-sm">
          <ProductDetails
            direction="column"
            product={resource}              
            enableGradient={enableGradient}
            enableOverlay={enableOverlay}
            enableFavorites={enableFavorites}
            enableLikes={enableLikes}
            enableRatings={enableRatings}
          />
        </div>
      </div>
		</Drawer>
	)
}

export default ShowModal
