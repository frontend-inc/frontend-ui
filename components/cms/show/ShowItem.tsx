import React from 'react'
import { ButtonType, FormFieldType, DisplayFieldType } from '../../../types'
import ShowList from './ShowList'
import ShowCard from './ShowCard'
import ShowAvatar from './ShowAvatar'
import ShowCover from './ShowCover'
import YouTubeVideo from './ShowYouTube'
import VimeoEmbed from './ShowVimeo'
import { useForms } from '../../../hooks'
import { useResourceContext } from 'frontend-js'

export type ShowProps = {
	handle?: string
	buttons: ButtonType[]
	displayFields: DisplayFieldType[]
	fieldName?: string
	url?: string
	resource: any
	enableEdit?: boolean
	enableCreate?: boolean
	enableFavorites?: boolean
	enableLikes?: boolean
	enableSharing?: boolean
	enableRatings?: boolean
	enablePayments?: boolean
	enableUsers?: boolean
	enableOverlay?: boolean
	handleEdit?: (res: any) => void
}

type ShowStyleTypes = 'card' | 'cover' | 'list' | 'avatar' | 'youtube' | 'vimeo'

export type ShowItemProps = ShowProps & {
	fieldName: string
	fields?: FormFieldType[]
	url: string
	style: ShowStyleTypes
}

const ShowItem: React.FC<ShowItemProps> = (props) => {
	let { handle } = props
	if (handle == 'index') handle = undefined
	const {
		style = 'article',
		displayFields = [],
		fieldName,
		buttons,
		enableOverlay,
		enableEdit,
		enableFavorites,
		enableLikes,
		enableSharing,
		enableRatings,
		enablePayments,
	} = props || {}

	const { resource, openEdit } = useResourceContext()

	const components = {
		list: ShowList,
		cover: ShowCover,
		card: ShowCard,
		avatar: ShowAvatar,
		youtube: YouTubeVideo,
		vimeo: VimeoEmbed,
	}

	const Component = components[style] || ShowList

	const { handleEdit } = useForms()

	if (!resource?.id) return null
	return (
		<Component
			fieldName={fieldName}
			resource={resource}
			buttons={buttons}
			displayFields={displayFields}
			enableOverlay={enableOverlay}
			enableEdit={enableEdit}
			handleEdit={() => handleEdit(resource)}
			enableFavorites={enableFavorites}
			enableLikes={enableLikes}
			enableSharing={enableSharing}
			enableRatings={enableRatings}
			enablePayments={enablePayments}
		/>
	)
}

export default ShowItem
