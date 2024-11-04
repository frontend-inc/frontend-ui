'use client'

import React from 'react'
import {
	ListCard,
	Card,
	CoverCard,
	AvatarCard,
	ChipCard,
	TextCard,
  Typography
} from '../..'
import { ListFields, SocialButtons } from '../..'
import { ButtonType, MetafieldType } from '../../../types'
import { resizeCloudinaryImage } from '../../../helpers'

type CardStyleTypes = 'list' | 'avatar' | 'card' | 'cover' | 'text'

type CollectionListItemProps = {
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

const CollectionListItem: React.FC<CollectionListItemProps> = (props) => {
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
    card: 'body1',
		avatar: 'body1',
		cover: 'body1',
		chip: 'body1',
		text: 'h5',
		list: 'body1'
  }

	return (
		<Component
			label={resource?.label}
			image={resource?.image?.url}
			primary={
        //@ts-ignore
        <Typography variant={ typographyVariants[style] }>
          { resource?.title }
        </Typography>
      }
			handleClick={handleClick}
			// @ts-ignore
			secondary={
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
					enableLikes={enableLikes}
					enableFavorites={enableFavorites}
					enableComments={enableComments}
				/>
			}
			slots={{
				image: {
					enableGradient,
					enableOverlay,
				},
			}}
		/>
	)
}

export default CollectionListItem
