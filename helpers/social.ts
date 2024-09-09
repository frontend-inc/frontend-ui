export const isLiked = (user, documentId) => {
	return user?.likes?.find(
		(d: any) => d.id == documentId || d.handle == documentId
	)
		? true
		: false
}

export const isProductFavorited = (user, productId) => {
	return user?.favorite_products?.find(
		(p: any) => p.id == productId || p.handle == productId
	)
		? true
		: false
}

export const isProductLiked = (user, productId) => {
	return user?.liked_products?.find(
		(p: any) => p.id == productId || p.handle == productId
	)
		? true
		: false
}

export const isFavorited = (user, documentId) => {
	return user?.favorites?.find(
		(d: any) => d.id == documentId || d.handle == documentId
	)
		? true
		: false
}

export const isFollowing = (user, followUser) => {
	if (!user || !followUser) return false
	return user?.following?.find((u: any) => u.username === followUser?.username)
		? true
		: false
}

export const isShopifyFavorite = (user, handle) => {
	return user?.shopify_favorites?.includes(handle) ? true : false
}
