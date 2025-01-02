'use client'

import React from 'react'
import { Drawer, CommentList, Modal, DocumentDetails, SocialButtons } from '../..'
import { BlurFade } from '../..'
import { useResourceContext } from 'frontend-js'
import { ButtonType, MetafieldType } from '../../../types'

export type DocumentShowProps = {
	buttons: ButtonType[]
	metafields: MetafieldType[]
	enableFavorites?: boolean
  enableDownload?: boolean
	enableLikes?: boolean
	enableSharing?: boolean
	enableComments?: boolean
  disableTitle?: boolean
	disableImage?: boolean
	enableBorder?: boolean
	enableOverlay?: boolean
}

const DocumentShow: React.FC<DocumentShowProps> = (props) => {
  
	const { openShow, setOpenShow, resource, url } = useResourceContext()

	const {
		metafields = [],
    disableTitle = false,
    enableDownload,
		enableComments,
		enableLikes,
		enableFavorites,
		enableSharing,
	} = props || {}

	let disableImage = false
	switch (resource?.content_type) {
		case 'youtube':
		case 'vimeo':
		case 'soundcloud':
    case 'file':     
		case 'video':
			disableImage = true
			break
		default:
			disableImage = false
	}  

	if (!resource) return null
	return (
		<Modal      
			open={openShow}
			handleClose={() => setOpenShow(false)}
      maxWidth='5xl'
		>
			<div className="flex flex-col space-y-6 p-6 w-full">
				<BlurFade delay={0.25} inView className="w-full">
					<div className="w-full">
						<DocumentDetails
							disableImage={disableImage}
							resource={resource}
							metafields={metafields}
							actions={
								<SocialButtons
									size="large"
									justifyContent={'center'}
									resource={resource}
                  enableDownload={enableDownload}
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
		</Modal>
	)
}

export default DocumentShow
