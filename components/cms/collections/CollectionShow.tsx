'use client'

import React from 'react'
import { CommentList, Drawer, CollectionDetails, SocialButtons } from '../..'
import { BlurFade } from '../../../components'
import { useResourceContext } from 'frontend-js'
import { ButtonType, MetafieldType } from '../../../types'

export type CollectionShowProps = {
	buttons: ButtonType[]
	metafields: MetafieldType[]
	enableFavorites?: boolean
	enableLikes?: boolean
	enableSharing?: boolean
	enableComments?: boolean
  disableImage?: boolean
	enableBorder?: boolean
	enableOverlay?: boolean
}

const CollectionShow: React.FC<CollectionShowProps> = (props) => {
	const { openShow, setOpenShow, resource, url } = useResourceContext()

	const {
		metafields = [],
		enableComments,
		enableLikes,
		enableFavorites,
		enableSharing,
	} = props || {}

  let disableImage = false 
  switch(resource?.documentType){
    case 'youtube':
    case 'vimeo':
    case 'soundcloud':
    case 'video':
      disableImage = true
      break
    default: 
      disableImage = false
  }

	if (!resource) return null
	return (
		<Drawer
			open={openShow}
			handleClose={() => setOpenShow(false)}
			title={resource?.title}
		>
			<div className="flex flex-col space-y-6 pb-[40px] w-full">
				<BlurFade delay={0.25} inView className="w-full">
					<div className="w-full">
						<CollectionDetails
              disableImage={ disableImage }
							resource={resource}
							metafields={metafields}
							actions={
								<SocialButtons
									size="large"
									justifyContent={'center'}
									resource={resource}
									enableLikes={enableLikes}
									enableFavorites={enableFavorites}
									enableSharing={enableSharing}
								/>
							}
						/>
						{enableComments && (
							<div className="px-2">
								<CommentList url={url} handle={resource?.handle} />
							</div>
						)}
					</div>
				</BlurFade>
			</div>
		</Drawer>
	)
}

export default CollectionShow
