import React, { useEffect } from 'react'
import { 
  ActionType, 
  FormFieldType, 
  DisplayFieldType 
} from '../../../types'
import HeroList from './HeroList'
import HeroCard from './HeroCard'
import HeroAvatar from './HeroAvatar'
import HeroCover from './HeroCover'
import YouTubeVideo from './HeroYouTube'
import VimeoEmbed from './HeroVimeo'
import { useForms } from '../../../hooks'
import { useCollection } from 'frontend-js'

export type HeroProps = {
	handle?: string
	actions: ActionType[]
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

type HeroStyleTypes =
	| 'card'
  | 'cover' 
	| 'list'  
	| 'avatar'
	| 'youtube'
	| 'vimeo'

export type HeroItemProps = HeroProps & {
	fieldName: string
	fields?: FormFieldType[]
	url: string
	style: HeroStyleTypes
}

const HeroItem: React.FC<HeroItemProps> = (props) => {
	let { handle } = props
	if (handle == 'index') handle = undefined
	const {
		style = 'article',		
		displayFields = [],
		fieldName,
		actions,
    enableOverlay,
		enableEdit,
		enableFavorites,    
		enableLikes,
		enableSharing,
    enableRatings,
		enablePayments,
	} = props || {}

  const { resource } = useCollection()

	const components = {
		list: HeroList,
		cover: HeroCover,
		card: HeroCard,
		avatar: HeroAvatar,
		youtube: YouTubeVideo,
		vimeo: VimeoEmbed,
	}

	const Component = components[style]
  
  const { 
    handleEdit 
  } = useForms()

  if(!resource?.id) return null;
	return (
    <Component
      fieldName={fieldName}
      resource={resource}
      actions={actions}
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

export default HeroItem
