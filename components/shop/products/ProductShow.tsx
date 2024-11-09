'use client'

import React from 'react'
import { Drawer, ProductDetails, ProductReviews } from '../..'
import { useResourceContext } from 'frontend-js'
import { BlurFade } from '../../../components'

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
			open={openShow}
			handleClose={() => setOpenShow(false)}
			maxWidth="lg"
		>
			<div className="w-full flex flex-row justify-center pb-10">
				<BlurFade delay={0.25} inView className="w-full">
					<div className="w-full flex flex-col space-y-[20px]">
						<ProductDetails
							direction="row"
							product={resource}
							enableGradient={enableGradient}
							enableOverlay={enableOverlay}
							enableFavorites={enableFavorites}
							enableLikes={enableLikes}
							enableRatings={enableRatings}
						/>
						{enableRatings && <ProductReviews productId={resource?.id} />}
					</div>
				</BlurFade>
			</div>
		</Drawer>
	)
}

export default ShowModal
