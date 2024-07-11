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

export const isFollowing = (user, followUser) => {
	if (!user || !followUser) return false
	return user?.following?.find((u: any) => u.username === followUser?.username)
		? true
		: false
}
