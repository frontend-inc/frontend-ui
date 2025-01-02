'use client'

import React from 'react'
import {
  Card,
  FileCard,
	ListCard,
	CoverCard,
	TextCard,
	Typography,
  VideoCard,
  ImageCard
} from '../..'
import { ListFields, SocialButtons } from '../..'
import { ButtonType, MetafieldType } from '../../../types'
import { DocumentStyleTypes } from './DocumentList'

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
		card: Card,
		cover: CoverCard,
		text: TextCard,
		list: ListCard,
    image: ImageCard,
    file: FileCard,
    video: VideoCard
	}

	let Component = COMPONENTS[style] || Card

	let typographyVariants = {
		card: 'subtitle1',
		cover: 'subtitle1',
		chip: 'subtitle1',
		text: 'h5',
		list: 'h6',
	}

	return (
		<Component
			label={resource?.label}
			image={resource?.image?.url}
			// @ts-ignore
			title={
        !disableTitle && 
				//@ts-ignore
				<Typography variant={typographyVariants[style]}>
					{resource?.title}
				</Typography>
			}
			handleClick={handleClick}
			// @ts-ignore
			subtitle={
        <ListFields 
          fields={listFields} 
          resource={resource} 
        />
      }
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
