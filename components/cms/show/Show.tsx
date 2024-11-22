'use client'

import React from 'react'
import { ButtonType, MetafieldType } from '../../../types'
import {
	HeroList,
	HeroAvatar,
	HeroCard,
	HeroCover,
	CollectionDetails,
} from '../..'
import { useResourceContext } from 'frontend-js'
import { ListFields, ButtonActions, SocialButtons } from '../..'
import { DOCUMENT_SHOW_FIELDS } from '../../../constants'

export type ShowContainerProps = {
	resource: any
	metafields: MetafieldType[]
	buttons: ButtonType[]
	enableFavorites?: boolean
	enableLikes?: boolean
	enableSharing?: boolean
	enableGradient?: boolean
	enableOverlay?: boolean
}

type ShowStyleTypes = 'card' | 'cover' | 'list' | 'avatar'

export type ShowProps = ShowContainerProps & {
	url?: string
	style: ShowStyleTypes
}

const Show: React.FC<ShowProps> = (props) => {
	const {
		style = 'list',
		metafields = [],
		buttons,
		enableFavorites,
		enableLikes,
		enableSharing,
		enableGradient,
		enableOverlay,
	} = props || {}

	const { resource } = useResourceContext()

	let disableImage = false
	switch (resource?.documentType) {
		case 'youtube':
		case 'vimeo':
		case 'soundcloud':
		case 'video':
			disableImage = true
			break
		default:
			disableImage = false
	}

	const buttonAlignClasses = {
		list: 'justify-center',
		cover: 'justify-center',
		card: 'justify-end',
		avatar: 'justify-end',
	}[style] as 'justify-start' | 'justify-center' | 'justify-end'

	if (!resource?.id) return null
	return (
		<HeroList
			disableImage={disableImage}
			label={resource?.label}
			image={resource?.image?.url}
			title={resource?.title}
			subtitle={resource?.subtitle}
			description={resource?.description}
			category={resource?.category}
			location={resource?.location}
			lat={resource?.lat}
			lng={resource?.lng}
			tags={resource?.tags}
			html={resource?.html}
			startsAt={resource?.start_date}
			endsAt={resource?.end_date}
			publishedAt={resource?.published_at}
			youtubeSrc={resource?.youtube_video}
			vimeoSrc={resource?.vimeo_video}
			soundcloudSrc={resource?.soundcloud_audio}
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
			secondaryAction={
				buttons && (
					<div className="w-full">
						<ButtonActions
							justifyContent={buttonAlignClasses}
							buttons={buttons}
						/>
					</div>
				)
			}
			enableGradient={enableGradient}
			enableOverlay={enableOverlay}
		/>
	)
}

export default Show
