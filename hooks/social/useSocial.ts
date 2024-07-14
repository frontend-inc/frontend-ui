import React, { useContext } from 'react'
import { ApiContext } from 'frontend-js'
import { useLoaders } from '..'

type UseSocialParams = {
	url: string
}

const useSocial = (params: UseSocialParams) => {
	const { api } = useContext(ApiContext) as any

	const { loading, loadingWrapper } = useLoaders()

	const like = async (itemId) => {
		return await loadingWrapper(() => api.like(itemId, params))
	}

	const unlike = async (itemId) => {
		return await loadingWrapper(() => api.unlike(itemId, params))
	}

	const favorite = async (itemId) => {
		return await loadingWrapper(() => api.favorite(itemId, params))
	}

	const unfavorite = async (itemId) => {
		return await loadingWrapper(() => api.unfavorite(itemId, params))
	}

	const follow = async (username) => {
		return await loadingWrapper(() => api.follow(username, params))
	}

	const unfollow = async (username) => {
		return await loadingWrapper(() => api.unfollow(username, params))
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
