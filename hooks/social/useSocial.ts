import React from 'react'
import { useApi } from 'frontend-js'
import { useLoaders } from '..'

const useSocial = () => {
	const { api } = useApi()
  
  const params = { 
    url: `/api/v1/social`,
  }

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

  const productLike = async (productId) => {
		return await loadingWrapper(() => api.productLike(productId, params))
	}

	const productUnlike = async (productId) => {
		return await loadingWrapper(() => api.productUnlike(productId, params))
	}

	const productFavorite = async (productId) => {
		return await loadingWrapper(() => api.productFavorite(productId, params))
	}

	const productUnfavorite = async (productId) => {
		return await loadingWrapper(() => api.productUnfavorite(productId, params))
	}

  const shopifyFavorite = async (handle) => {
		return await loadingWrapper(() => api.shopifyFavorite(handle, params))
	}

	const shopifyUnfavorite = async (handle) => {
		return await loadingWrapper(() => api.shopifyUnfavorite(handle, params))
	}

	return {
		loading,
		like,
		unlike,
		favorite,
		unfavorite,
		follow,
		unfollow,
    productLike,
    productUnlike,
    productFavorite,
    productUnfavorite,
    shopifyFavorite,
    shopifyUnfavorite,
    loadingWrapper,
	}
}

export default useSocial
