import React from 'react'
import { Stack } from '@mui/material'
import { 
  CommentButton, 
  LikeButton, 
  FavoriteButton, 
  ShareButton 
} from '../../../components'
import { useRouter } from 'next/router'

type SocialButtonsProps = {
	resource: any
	direction?: 'row' | 'column'
  enableComments?: boolean
	enableLikes?: boolean
	enableFavorites?: boolean
	enableSharing?: boolean
	numLikes?: number
	numFavorites?: number
	justifyContent?: string
  color?: string
  spacing?: number
  variant?: 'button' | 'icon'
}

const SocialButtons: React.FC<SocialButtonsProps> = (props) => {
	const {
		resource,
		direction = 'row',
		enableLikes,
		enableFavorites,
		enableSharing,
    enableComments,
		numLikes,
		numFavorites,
    variant='button',
		justifyContent = 'center',
    spacing = 1,
    color
	} = props

	const router = useRouter()
	const currentPageUrl = router.asPath

	if (!enableLikes && !enableFavorites && !enableSharing) return null
	return (
		<Stack direction={direction} justifyContent={justifyContent} spacing={spacing}>
			{enableLikes == true && (
				<LikeButton 
          color={color} 
          variant={variant} 
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
				<CommentButton 
          resource={resource} 
          color={color} 
        />
			)}
			{enableSharing == true && (
				<ShareButton 
          variant={variant} 
          url={currentPageUrl} 
        />
			)}
		</Stack>
	)
}

export default SocialButtons
