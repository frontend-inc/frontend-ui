'use client'

import React from 'react'
import RenderDOMNode from './RenderDOMNode'
import RenderDOMGrid from './RenderDOMGrid'

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
	const { nodes = [], injectProps = {}, components = {} } = props || {}
	if (!nodes || !Array.isArray(nodes)) {
		throw new Error('Nodes is not an array')
	}

	return nodes?.map((node, i) => (
    node?.name == "Grid" ? (
      <RenderDOMGrid 
        key={node.id}
        node={ node }
        components={ components }
      />
    ):(
      <RenderDOMNode
        key={node.id}
        name={node?.name}
        innerHTML={node?.innerHTML}
        classNames={node?.classNames}
        children={node?.children}
        props={{
          ...node.props,
          ...(injectProps[node?.name] || {}),
        }}
        components={components}
      />
    ) 
	))
}

export default RenderDOM
