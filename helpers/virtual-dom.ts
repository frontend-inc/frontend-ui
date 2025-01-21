export const setVirtualDom = (appId, pageId, virtualDom: any[]) => {
	localStorage.setItem(`${appId}-${pageId}-vdom`, JSON.stringify(virtualDom))
}

export const getVirtualDom = (appId, pageId) => {
	return JSON.parse(localStorage.getItem(`${appId}-${pageId}-vdom`) || '[]')
}
