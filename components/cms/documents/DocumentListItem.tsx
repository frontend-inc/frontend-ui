'use client'

import React, { useMemo } from 'react'
import {
	CmsCard,
	CmsFileCard,
	CmsListCard,
	CmsCoverCard,
	CmsTextCard,
	CmsVideoCard,
	CmsImageCard,
} from '../..'
import { 	Typography } from '../..'
import { ListFields, SocialButtons } from '../..'
import { ButtonType, MetafieldType } from '../../../types'
import { DocumentStyleTypes } from './DocumentList'
import { resizeCloudinaryImage } from '../../../helpers'

type DocumentListItemProps = {
	buttons: ButtonType[]
	style: DocumentStyleTypes
	listFields: MetafieldType[]
	resource: any
	buttonText?: string
	href?: string
	handleClick: () => void
	disableTitle?: boolean
	enableBorder?: boolean
	enableGradient?: boolean
	enableOverlay?: boolean
	enableDownload?: boolean
	enableComments?: boolean
	enableFavorites?: boolean
	enableLikes?: boolean
}

const DocumentListItem: React.FC<DocumentListItemProps> = (props) => {
	const {
		buttons,
		resource,
		listFields = [],
		handleClick,
		disableTitle = false,
		enableGradient = false,
		enableOverlay = false,
		enableDownload = false,
		enableComments = false,
		enableFavorites = false,
		enableLikes = false,
		style = 'card',
		...rest
	} = props

	const COMPONENTS = {
		card: CmsCard,
		cover: CmsCoverCard,
		text: CmsTextCard,
		list: CmsListCard,
		image: CmsImageCard,
		file: CmsFileCard,
		video: CmsVideoCard,
	}

	let Component = COMPONENTS[style] || CmsCard

	let typographyVariants = {
		card: 'subtitle1',
		cover: 'subtitle1',
		chip: 'subtitle1',
		text: 'h5',
		list: 'h6',
	}

	const imageUrl = useMemo(
		() =>
			resizeCloudinaryImage(resource?.image?.url, {
				width: 480,
				height: 320,
				transform: 'fill',
			}),
		[resource?.image?.url]
	)

	return (
		<Component
			label={resource?.label}
			image={imageUrl}
			fullWidth
			imageHeight={320}
			imageWidth={480}
			// @ts-ignore
			title={
				!disableTitle && (
					//@ts-ignore
					<Typography variant={typographyVariants[style]}>
						{resource?.title}
					</Typography>
				)
			}
			handleClick={handleClick}
			// @ts-ignore
			subtitle={<ListFields fields={listFields} resource={resource} />}
			actions={
				<SocialButtons
					size="small"
					justifyContent="flex-start"
					resource={resource}
					enableDownload={enableDownload}
					enableLikes={enableLikes}
					enableFavorites={enableFavorites}
					enableComments={enableComments}
				/>
			}
			enableGradient={enableGradient}
			enableOverlay={enableOverlay}
		/>
	)
}

export default DocumentListItem
