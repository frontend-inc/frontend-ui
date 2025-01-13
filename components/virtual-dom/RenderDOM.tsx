'use client'

import React from 'react'
import { cn } from '@nextui-org/react'

const Div: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props) => {
  const { children } = props;
  return <div {...props}>{children}</div>;
}

export type VirtualNodeType = {  
  name: string   
  props?: any  
  classNames?: string[]
  innerHTML?: string
  children?: VirtualNodeType[]  
}

type RenderDomProps = {
  nodes: VirtualNodeType[]
  injectProps: Record<string, React.FC>  
  components: []
}

const RenderDOM: React.FC<RenderDomProps> = (props) => {
  const { nodes=[], injectProps={}, components={} } = props || {}

  const renderNode = (node: VirtualNodeType, index) => {

    const Component = components[node?.name] || Div
  
    if (!Component) return null
    return (
      <Component 
        key={index} 
        {...node?.props} 
        { ...(injectProps[node?.name] || {}) }
        className={cn(
          ...(node?.classNames || []),
          node?.props?.className,
        )}
      >
        {node?.innerHTML }        
        {node?.children?.map((childNode, index) =>
          renderNode(childNode, index)
        )}
      </Component>
    )
  }

  if (!nodes) return null
  return nodes?.map((node, i) => renderNode(node, i))
}

export default RenderDOM
