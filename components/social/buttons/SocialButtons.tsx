import React, { useEffect } from 'react'
import { Stack } from '@mui/material'
import { LikeButton, FavoriteButton, ShareButton } from '../../../components'
import { useResource } from 'frontend-js'
import { useRouter } from 'next/router'

type SocialButtonsProps = {
	url: string
	handle: string
	enableLikes?: boolean
	enableShares?: boolean
	enableFavorites?: boolean
	justifyContent?: string
}

const SocialButtons: React.FC<SocialButtonsProps> = (props) => {
	const {
		url,
		handle,
		enableLikes,
		enableShares,
		enableFavorites,
		justifyContent = 'center',
	} = props

	const router = useRouter()
	const currentPageUrl = router.asPath

	const { loading, resource, findOne } = useResource({
		url,
	})

	useEffect(() => {
		if (url && handle) {
			findOne(handle)
		}
	}, [url, handle])

	if (!resource?.id) return null
	return (
		<Stack direction="row" justifyContent={justifyContent} spacing={1}>
			{enableLikes && <LikeButton handle={handle} url={url} />}
			{enableFavorites && <FavoriteButton handle={handle} url={url} />}
			{enableShares && <ShareButton url={currentPageUrl} />}
		</Stack>
	)
}

export default SocialButtons
