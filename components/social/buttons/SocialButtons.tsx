import React from 'react'
import { Stack } from '@mui/material'
import {
	CommentButton,
	LikeButton,
	FavoriteButton,
	ShareButton,
	AddToListButton,
} from '../../../components'
import { useRouter } from 'next/router'

type SocialButtonsProps = {
	resource: any
	direction?: 'row' | 'column'
	enableComments?: boolean
	enableLikes?: boolean
	enableFavorites?: boolean
	enableAddToList?: boolean
	enableSharing?: boolean
	numLikes?: number
	numFavorites?: number
	justifyContent?: string
	size?: 'small' | 'large'
	color?: string
	spacing?: number
}

const SocialButtons: React.FC<SocialButtonsProps> = (props) => {
	const {
		resource,
		direction = 'row',
		enableComments,
		enableLikes,
		enableFavorites,
		enableSharing,
		enableAddToList,
		numLikes,
		numFavorites,
		size = 'small',
		justifyContent = 'flex-start',
		spacing = 1,
		color,
	} = props

	const router = useRouter()
	const currentPageUrl = router.asPath

	if (!enableLikes && !enableFavorites && !enableSharing && !enableAddToList)
		return null
	return (
		<Stack
			direction={direction}
			justifyContent={justifyContent}
			spacing={spacing}
		>
			{enableAddToList == true && (
				<AddToListButton 
          size={size} 
          resource={resource} 
          color={color} 
        />
			)}
			{enableLikes == true && (
				<LikeButton
					size={size}
					color={color}
					resource={resource}
					numLikes={numLikes}
				/>
			)}
			{enableFavorites == true && (
				<FavoriteButton
					size={size}
					resource={resource}
					numFavorites={numFavorites}
					color={color}
				/>
			)}
			{enableComments == true && (
				<CommentButton 
          resource={resource} 
          color={color} 
        />
			)}
			{enableSharing == true && (
				<ShareButton 
          size={size} 
          url={currentPageUrl} 
        />
			)}
		</Stack>
	)
}

export default SocialButtons
