import React, { useContext } from 'react'
import { ApiContext } from 'frontend-js'
import { useLoaders } from '..'

type UseSocialProps = {
	url: string
}

const useSocial = (props: UseSocialProps) => {
	const { url } = props
	const { api } = useContext(ApiContext) as any

	const { loading, loadingWrapper } = useLoaders()

	const like = async (itemId) => {
		return await loadingWrapper(() => api.url(url).like(itemId))
	}

	const unlike = async (itemId) => {
		return await loadingWrapper(() => api.url(url).unlike(itemId))
	}

	const favorite = async (itemId) => {
		return await loadingWrapper(() => api.url(url).favorite(itemId))
	}

	const unfavorite = async (itemId) => {
		return await loadingWrapper(() => api.url(url).unfavorite(itemId))
	}

	const follow = async (itemId) => {
		return await loadingWrapper(() => api.url(url).follow(itemId))
	}

	const unfollow = async (itemId) => {
		return await loadingWrapper(() => api.url(url).unfollow(itemId))
	}

	return {
		loading,
		like,
		unlike,
		favorite,
		unfavorite,
		follow,
		unfollow,
		loadingWrapper,
	}
}

export default useSocial
