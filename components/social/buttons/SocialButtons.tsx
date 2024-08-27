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
	variant?: 'icon' | 'button'
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
		variant = 'button',
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
				<AddToListButton variant={variant} resource={resource} color={color} />
			)}
			{enableLikes == true && (
				<LikeButton
					variant={variant}
					color={color}
					handle={resource?.handle}
					numLikes={numLikes}
				/>
			)}
			{enableFavorites == true && (
				<FavoriteButton
					variant={variant}
					handle={resource?.handle}
					numFavorites={numFavorites}
					color={color}
				/>
			)}
			{enableComments == true && (
				<CommentButton resource={resource} color={color} />
			)}
			{enableSharing == true && (
				<ShareButton variant={variant} url={currentPageUrl} />
			)}
		</Stack>
	)
}

export default SocialButtons
