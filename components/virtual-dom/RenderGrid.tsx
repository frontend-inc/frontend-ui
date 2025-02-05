'use client'

import React from 'react'
import RenderNode from './RenderNode'
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

const RenderGrid: React.FC<RenderDomProps> = (props) => {
	const { node, injectProps = {}, components = {} } = props || {}

	return (
		<Section {...node.props} maxWidth="xl">
			<Grid>
				{node?.children?.map((childNode) => (
					<GridItem key={childNode.id} layouts={childNode?.layouts}>
						<RenderNode
							type={childNode?.name}
							classNames={childNode?.classNames}
							children={childNode?.children}
							props={{
								...childNode.props,
								...(injectProps[childNode?.name] || {}),
							}}
							componentMap={components}
						/>
					</GridItem>
				))}
			</Grid>
		</Section>
	)
}

export default RenderGrid
