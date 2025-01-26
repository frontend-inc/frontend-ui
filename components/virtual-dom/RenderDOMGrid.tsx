'use client'

import React from 'react'
import RenderDOMNode from './RenderDOMNode'
import { Section, Grid, GridItem } from '..'

export type VirtualNodeType = {
	name: string
	props?: any
	classNames?: string[]
	layouts: {
		sm: { x: number; y: number; w: number; h: number }
		md: { x: number; y: number; w: number; h: number }
	}
	children?: VirtualNodeType[]
}

type RenderDomProps = {
	node: VirtualNodeType
	injectProps: Record<string, React.FC>
	components: {}
}

const RenderDOMGrid: React.FC<RenderDomProps> = (props) => {
	const { node, injectProps = {}, components = {} } = props || {}

	return (
		<Section {...node.props} maxWidth="xl">
			<Grid>
				{node?.children?.map((childNode) => (
					<GridItem key={childNode.id} layouts={childNode?.layouts}>
						<RenderDOMNode
							component={childNode?.name}
							classNames={childNode?.classNames}
							children={childNode?.children}
							props={{
								...childNode.props,
								...(injectProps[childNode?.name] || {}),
							}}
							components={components}
						/>
					</GridItem>
				))}
			</Grid>
		</Section>
	)
}

export default RenderDOMGrid
