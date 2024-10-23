export const isPurchased = (user, documentId) => {
	return user?.purchases?.find(
		(d: any) => d.id == documentId || d.handle == documentId
	)
		? true
		: false
}
