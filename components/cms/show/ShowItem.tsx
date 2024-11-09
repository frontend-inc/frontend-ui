'use client'

import React from 'react'
import { ButtonType, MetafieldType } from '../../../types'
import {
	HeroList,
	HeroAvatar,
	HeroCard,
	HeroCover,
} from '../../../components'
import { useResourceContext } from 'frontend-js'
import { ListFields, ButtonActions, SocialButtons } from '../..'

export type ShowProps = {
  resource: any
	displayFields: MetafieldType[]
  buttons: ButtonType[]
	enableFavorites?: boolean
	enableLikes?: boolean
	enableSharing?: boolean
	enableGradient?: boolean
	enableOverlay?: boolean
}

type ShowStyleTypes = 'card' | 'cover' | 'list' | 'avatar' 

export type ShowItemProps = ShowProps & {
	url?: string
	style: ShowStyleTypes
}

const ShowItem: React.FC<ShowItemProps> = (props) => {
	const {
		style = 'list',
		displayFields = [],
		buttons,
		enableFavorites,
		enableLikes,
		enableSharing,
		enableGradient,
		enableOverlay,
	} = props || {}

	const { resource } = useResourceContext()

	const components = {
		list: HeroList,
		cover: HeroCover,
		card: HeroCard,
		avatar: HeroAvatar,
	}

	const Component = components[style] || HeroList

  const buttonAlignClasses = {
    list: 'center',
    cover: 'center',
    card: 'end',
    avatar: 'end',
  }[style] as 'start' | 'center' | 'end'

	if (!resource?.id) return null
	return (
		<Component
      label={resource?.label}
			image={resource?.image?.url}
			title={resource?.title}
      // @ts-ignore
			description={
				displayFields?.length > 0 && (
					<ListFields
						direction="column"
						fields={displayFields}
						resource={resource}
					/>
				)
			}
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

export default ShowItem
