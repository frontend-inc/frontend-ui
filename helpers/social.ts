export const isLiked = (user, documentId) => {
	return user?.likes?.find(
		(d: any) => d.id == documentId || d.handle == documentId
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

export const isFollowing = (user, appId) => {
	return user?.following?.find((d: any) => d.id === appId) ? true : false
}