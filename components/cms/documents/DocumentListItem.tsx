'use client'

import React from 'react'
import {
  Card,
	ListCard,
	CoverCard,
	AvatarCard,
	ChipCard,
	TextCard,
	Typography,
} from '../..'
import { ListFields, SocialButtons } from '../..'
import { ButtonType, MetafieldType } from '../../../types'

type CardStyleTypes = 'list' | 'avatar' | 'card' | 'cover' | 'text'

type DocumentListItemProps = {
	buttons: ButtonType[]
	style: CardStyleTypes
	listFields: MetafieldType[]
	resource: any
	buttonText?: string
	href?: string
	handleClick: () => void
	enableBorder?: boolean
	enableGradient?: boolean
	enableOverlay?: boolean
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
		enableGradient = false,
		enableOverlay = false,
		enableComments = false,
		enableFavorites = false,
		enableLikes = false,
		style = 'card',
		...rest
	} = props

	const COMPONENTS = {
		card: Card,
		avatar: AvatarCard,
		cover: CoverCard,
		chip: ChipCard,
		text: TextCard,
		list: ListCard,
	}

	let Component = COMPONENTS[style] || Card

	let typographyVariants = {
		card: 'subtitle1',
		avatar: 'subtitle1',
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
				//@ts-ignore
				<Typography variant={typographyVariants[style]}>
					{resource?.title}
				</Typography>
			}
			handleClick={handleClick}
			// @ts-ignore
			subtitle={<ListFields fields={listFields} resource={resource} />}
			actions={
				<SocialButtons
					size="small"
					justifyContent="flex-start"
					resource={resource}
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
