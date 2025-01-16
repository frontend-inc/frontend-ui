'use client'

import React from 'react'
import RenderDOMComponent from './RenderDOMComponent'

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
  components: {}
}

const RenderDOM: React.FC<RenderDomProps> = (props) => {
  const { nodes=[], injectProps={}, components={} } = props || {}
  if (!nodes || !Array.isArray(nodes)) {
    throw new Error ('Nodes is not an array')
  }
  return nodes?.map((node, i) => (
    <RenderDOMComponent 
      key={i} 
      name={node?.name} 
      innerHTML={node?.innerHTML}
      classNames={node?.classNames}
      props={{
        ...node.props,
        ...(injectProps[node?.name] || {})
      }}
      components={ components }
    />
  ))
}

export default RenderDOM
