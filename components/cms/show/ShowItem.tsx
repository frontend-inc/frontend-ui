import React from 'react'
import { ButtonType, FormFieldType, DisplayFieldType } from '../../../types'
import {
	Hero,
	HeroAvatar,
	HeroCard,
	HeroCover,
	HeroSnippet,
} from '../../../components'
import { useForms } from '../../../hooks'
import { useResourceContext } from 'frontend-js'
import {
	AvgRating,
	DisplayFields,
	StripePaymentLink,
	ButtonActions,
	SocialButtons,
	ExpandableText,
} from '../..'
import { buildActions } from '../../../helpers'
import { Box, Stack } from '@mui/material'

export type ShowProps = {
	handle?: string
	buttons: ButtonType[]
	displayFields: DisplayFieldType[]
	resource: any
	enableEdit?: boolean
	enableCreate?: boolean
	enableFavorites?: boolean
	enableLikes?: boolean
	enableSharing?: boolean
	enableRatings?: boolean
	enablePayments?: boolean
	enableAddToList?: boolean
	enableUsers?: boolean
	enableGradient?: boolean
	enableOverlay?: boolean
	handleEdit?: (res: any) => void
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
		enableEdit,
		enableFavorites,
		enableLikes,
		enableSharing,
		enableRatings,
		enableAddToList,
		enablePayments,
		enableGradient,
		enableOverlay,
		slots: defaultSlots = {
			image: {},
			content: {},
		},
	} = props || {}

	const { resource } = useResourceContext()

	const components = {
		list: Hero,
		cover: HeroCover,
		card: HeroCard,
		avatar: HeroAvatar,
		snippet: HeroSnippet,
	}

	const Component = components[style] || Hero

	const { handleEdit } = useForms()

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
						{enableRatings == true && (
							<AvgRating resource={resource} enableTotal />
						)}
						{displayFields?.length > 0 && (
							<DisplayFields fields={displayFields} resource={resource} />
						)}
						{enablePayments == true && (
							<StripePaymentLink resource={resource} buttonText="Checkout" />
						)}
					</Stack>
					<ExpandableText text={resource?.description} />
				</Stack>
			}
			actions={
				<SocialButtons
					justifyContent={'center'}
					resource={resource}
					enableLikes={enableLikes}
					enableFavorites={enableFavorites}
					enableSharing={enableSharing}
					enableAddToList={enableAddToList}
				/>
			}
			secondaryAction={
				(buttons || enableEdit) && (
					<Box sx={sx.buttons}>
						<ButtonActions
							justifyContent={slotProps?.secondaryAction?.justifyContent}
							buttons={buildActions({
								enableEdit,
								handleEdit: () => handleEdit(resource),
								buttons,
							})}
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
