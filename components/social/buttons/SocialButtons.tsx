import React from 'react'
import { Stack } from '@mui/material'
import {
	CommentButton,
	LikeButton,
	FavoriteButton,
	ShareButton,
	AddToListButton,
  ProductLikeButton,
  ProductFavoriteButton,
} from '../../../components'
import { useRouter } from 'next/router'

type SocialButtonsProps = {
	resource: any
  product?: any
	direction?: 'row' | 'column'
	enableComments?: boolean
	enableLikes?: boolean  
	enableFavorites?: boolean
	enableAddToList?: boolean
	enableSharing?: boolean
  enableProductLikes?: boolean
  enableProductFavorites?: boolean
	numLikes?: number
	numFavorites?: number
	justifyContent?: string
	size?: 'small' | 'large'
	color?: string	
}

const SocialButtons: React.FC<SocialButtonsProps> = (props) => {
	const {
		resource,
    product,
		direction = 'row',
		enableComments,
		enableLikes,
		enableFavorites,
		enableSharing,
		enableAddToList,
    enableProductLikes,
    enableProductFavorites,
		numLikes,
		numFavorites,
		size = 'small',
		justifyContent = 'flex-start',
		color,
	} = props

	const router = useRouter()
	const currentPageUrl = router.asPath

	if (!enableLikes && !enableFavorites && 
      !enableSharing && !enableAddToList && 
      !enableProductFavorites && !enableProductLikes)
		return null
	return (
		<Stack
			direction={direction}
			justifyContent={justifyContent}
			spacing={size == 'small' ? 0 : 1}
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
          color={color}
					resource={resource}
					numFavorites={numFavorites}					
				/>
			)}

      {enableProductLikes == true && (
				<ProductLikeButton
					size={size}					
					product={product}
          color={color}
					numLikes={numLikes}
				/>
			)}
			{enableProductFavorites == true && (
				<ProductFavoriteButton
					size={size}
					product={product}					
					color={color}
          numFavorites={numFavorites}
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
