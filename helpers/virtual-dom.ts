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

function sanitizeNode(tree, parentId = null) {
  if (!tree || typeof tree !== "object") {
    return null; // Ensure tree is valid
  }

  const sanitizedNode = {
    id: tree?.id || nanoid(),
    name: tree?.name || "",
    parent_id: parentId,
    props: typeof tree?.props === "object" && tree?.props !== null ? { ...tree.props } : {},
    label: tree?.label || tree?.name || "",
    layouts: typeof tree?.layouts === "object" && tree?.layouts !== null 
      ? { ...tree.layouts } 
      : {
          sm: { w: 1, x: 0, y: 0, h: 1 },
          md: { w: 6, x: 0, y: 0, h: 3 },
        },
    children: Array.isArray(tree?.children) ? tree.children : [],
    isOpen: tree?.isOpen || false,
  };

  // Recursively sanitize children
  sanitizedNode.children = sanitizedNode.children.length
    ? sanitizedNode.children.map((child) => sanitizeNode(child, sanitizedNode.id))
    : [];

  return sanitizedNode;
}

export const setLocalVirtualDom = (appId, pageId, virtualDom: any[]) => {
  if(!appId || !pageId) return;
  if(typeof window === undefined) return []
  const sanitizedDom = sanitizeNode(virtualDom)
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
    return {}
  }	
}
