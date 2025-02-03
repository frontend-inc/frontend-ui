// @ts-ignore
import { ReactGridLayoutType } from '@/types';
// @ts-ignore
import { nanoid } from 'nanoid'

export function bottom(layout: ReactGridLayoutType[]): number {
  let max = 0,
    bottomY;
  for (let i = 0, len = layout.length; i < len; i++) {
    bottomY = layout[i].y + layout[i].h;
    if (bottomY > max) max = bottomY;
  }
  return max;
}

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
  if(typeof window === undefined || !localStorage) return []
  let storage = localStorage.getItem(`${appId}-${pageId}-vdom`)
  if(storage && storage !== 'undefined'){
    return JSON.parse(storage)
  }else{
    return []
  }	
}
