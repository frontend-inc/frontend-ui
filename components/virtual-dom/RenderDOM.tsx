'use client'

import React, { useMemo } from 'react'
import RenderNode from './RenderNode'
import { Section, StaticReactGridLayout } from '../../components'

export type VirtualNodeType = {
	name: string
	props?: any
	classNames?: string[]
	children?: VirtualNodeType[]
}

type RenderDomProps = {
	node: VirtualNodeType
	injectProps: Record<string, React.FC>
	componentMap: {}
}

const RenderDOM: React.FC<RenderDomProps> = (props) => {
	const { node, injectProps = {}, componentMap = {} } = props || {}	

	return (
		node?.name == 'Grid' ? (
      <Section key={i} {...node.props} maxWidth="xl">
        <StaticReactGridLayout
          nodes={node?.children || []}
          componentMap={componentMap}
        />
      </Section>    
		) : (
			<RenderNode
				key={i}
				type={node?.name}
				children={node?.children}
				props={{
					...node.props,
					...(injectProps[node?.name] || {}),
				}}
				componentMap={componentMap}
			/>
		)
	)
}

export default RenderDOM

/* 
  <RenderDOMGrid 
    key={ node.id }
    node={ node }
    components={ components }
  />
*/
