import React from 'react'
import { ButtonType, DisplayFieldType } from '../../../types'
import {
	HeroList,
	HeroAvatar,
	HeroCard,
	HeroCover,
	HeroSnippet,
} from '../../../components'
import { useResourceContext } from 'frontend-js'
import {
	DisplayFields,
	ButtonActions,
	SocialButtons,
	ExpandableText,
} from '../..'
import { Box, Stack } from '@mui/material'

export type ShowProps = {
	handle?: string
	buttons: ButtonType[]
	displayFields: DisplayFieldType[]
	resource: any
	enableFavorites?: boolean
	enableLikes?: boolean
	enableSharing?: boolean
	enableUsers?: boolean
	enableGradient?: boolean
	enableOverlay?: boolean
}

type ShowStyleTypes = 'card' | 'cover' | 'list' | 'avatar' | 'snippet'

export type ShowItemProps = ShowProps & {
	url?: string
	style: ShowStyleTypes
	slots?: {
		image?: any
		content?: any
	}
}

const ShowItem: React.FC<ShowItemProps> = (props) => {
	const {
		style = 'article',
		displayFields = [],
		buttons,
		enableFavorites,
		enableLikes,
		enableSharing,
		enableGradient,
		enableOverlay,
		slots: defaultSlots = {
			image: {},
			content: {},
		},
	} = props || {}

	const { resource } = useResourceContext()

	const components = {
		list: HeroList,
		cover: HeroCover,
		card: HeroCard,
		avatar: HeroAvatar,
		snippet: HeroSnippet,
	}

	const Component = components[style] || HeroList

	let slots = {
		image: {
			enableGradient,
			enableOverlay,
			...defaultSlots.image,
		},
		content: {
			...defaultSlots.content,
		},
	}

	let slotProps = {
		list: {
			secondary: {
				alignItems: 'center',
			},
			secondaryAction: {
				justifyContent: 'center',
			},
		},
		cover: {
			secondary: {
				alignItems: 'center',
			},
			secondaryAction: {
				justifyContent: 'center',
			},
		},
		card: {
			secondary: {
				alignItems: 'flex-start',
			},
			secondaryAction: {
				justifyContent: 'flex-end',
			},
		},
		avatar: {
			secondary: {
				alignItems: 'flex-start',
			},
			secondaryAction: {
				justifyContent: 'flex-end',
			},
		},
		snippet: {
			secondary: {
				alignItems: 'flex-start',
			},
			secondaryAction: {
				justifyContent: 'flex-end',
			},
		},
	}[style]

	if (!resource?.id) return null
	return (
		<Component
			image={resource?.image?.url}
			primary={resource?.title}
			secondary={
				<Stack spacing={2} sx={{ width: '100%' }}>
					<Stack
						spacing={2}
						sx={{ width: '100%' }}
						alignItems={slotProps?.secondary?.alignItems}
					>
						{displayFields?.length > 0 && (
							<DisplayFields fields={displayFields} resource={resource} />
						)}
					</Stack>
					<ExpandableText text={resource?.description} />
				</Stack>
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
					<Box sx={sx.buttons}>
						<ButtonActions
							justifyContent={slotProps?.secondaryAction?.justifyContent}
							buttons={buttons}
							resource={resource}
						/>
					</Box>
				)
			}
			slots={slots}
		/>
	)
}

export default ShowItem

const sx = {
	buttons: {
		width: '100%',
	},
}
