// @ts-ignore
import { nanoid } from 'nanoid'

// Ensure that all nodes have an ID and other prop values
function sanitizeVirtualDom(nodes = [], parentId = null) {
  const nodesArray = Array.isArray(nodes) ? nodes : [nodes]
  return nodesArray.map((node) => {

    let sanitizedNode = {
      // @ts-ignore
      id: node?.id || nanoid(),
      name: node?.name || '',
      parent_id: parentId,
      props: node?.props || {},
      innerHTML: node?.innerHTML || '',
      label: node?.label || node?.name,
      children: node?.children,
      isOpen: node?.isOpen || false,
    }

    if (Array.isArray(sanitizedNode.children)) {
      sanitizedNode.children = sanitizeVirtualDom(
        sanitizedNode.children,
        sanitizedNode.id
      )
    }

    return sanitizedNode
  })
}

export const setLocalVirtualDom = (appId, pageId, virtualDom: any[]) => {
  if(!appId || !pageId) return;
  if(typeof window === undefined) return []
  const sanitizedDom = sanitizeVirtualDom(virtualDom)
  const storageData = JSON.stringify(sanitizedDom)
  if(localStorage && storageData){
    localStorage.setItem(`${appId}-${pageId}-vdom`, storageData)
  }	
  return sanitizedDom
}

export const getLocalVirtualDom = (appId, pageId) => {
  if(!appId || !pageId) return;
  if(typeof window === undefined) return []
  let storage = localStorage.getItem(`${appId}-${pageId}-vdom`)
  if(storage && storage !== 'undefined'){
    return JSON.parse(storage)
  }else{
    return []
  }	
}
