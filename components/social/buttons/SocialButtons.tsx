import React, { useEffect } from 'react'
import { Stack } from '@mui/material'
import { LikeButton, FavoriteButton, ShareButton } from '../../../components'
import { useResource } from 'frontend-js'
import { useRouter } from 'next/router'

type SocialButtonsProps = {
	handle: string
	direction?: 'row' | 'column'
	enableLikes?: boolean
	enableFavorites?: boolean
	enableSharing?: boolean
	numLikes?: number
	numFavorites?: number
	justifyContent?: string
}

const SocialButtons: React.FC<SocialButtonsProps> = (props) => {
	const {
		handle,
		direction = 'row',
		enableLikes,
		enableFavorites,
		enableSharing,
		numLikes,
		numFavorites,
		justifyContent = 'center',
	} = props

	const router = useRouter()
	const currentPageUrl = router.asPath

	if (!enableLikes && !enableFavorites && !enableSharing) return null
	return (
		<Stack direction={direction} justifyContent={justifyContent} spacing={1}>
			{enableLikes == true && (
				<LikeButton variant="button" handle={handle} numLikes={numLikes} />
			)}
			{enableFavorites == true && (
				<FavoriteButton
					variant="button"
					handle={handle}
					numFavorites={numFavorites}
				/>
			)}
			{enableSharing == true && (
				<ShareButton variant="button" url={currentPageUrl} />
			)}
		</Stack>
	)
}

export default SocialButtons
