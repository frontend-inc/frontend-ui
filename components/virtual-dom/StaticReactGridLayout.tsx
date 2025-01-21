'use client'

import React, { useState } from 'react'
import {
	ResponsiveGridLayout as RGL,
	WidthProvider,
	LayoutItem,
} from '../../react-grid-layout'
//import './react-grid-layout.css'
import { RenderDOMNode } from '..'
import { ReactGridLayoutsType } from '../../types'

const ResponsiveGridLayout = WidthProvider(RGL)

type LayoutItemType = LayoutItem & {
	name: string
	props: Record<string, any>
	classNames?: string[]
	innerHTML?: string
	layouts: ReactGridLayoutsType
}

type StaticReactGridLayoutProps = {
	nodes: LayoutItemType[]
	componentMap: Record<string, React.FC>
}

const StaticReactGridLayout: React.FC<StaticReactGridLayoutProps> = (props) => {
	const { nodes = [], componentMap } = props || {}

	// Match breakpoints with tailwindcss
	const breakpoints = { md: 640, sm: 0 }
	const cols = { md: 12, sm: 1 }

	const formatLayout = (nodes) => {
		if (!Array.isArray(nodes)) return []
		const layout = { sm: [], md: [] }
		nodes.forEach((node) => {
			//@ts-ignore
			layout.sm.push({
				static: true,
				i: node.id,
				id: node.id,
				...node.layouts.sm,
			})
			//@ts-ignore
			layout.md.push({
				static: true,
				i: node.id,
				id: node.id,
				...node.layouts.md,
			})
		})
		return layout
	}

	const [layouts] = useState(formatLayout(nodes))

	if (!nodes || !Array.isArray(nodes)) return null
	return (
		<div className="w-full h-full min-h-[200px]">
			<ResponsiveGridLayout
				className="static-grid"
				rowHeight={50}
				breakpoints={breakpoints}
				cols={cols}
				layouts={layouts}
				compactType={'vertical'}
			>
				{nodes?.map((node) => (
					<div
						key={node.id}
						className="p-1 px-3 relative flex flex-row w-full h-full"
					>
						<RenderDOMNode
							component={node.name}
							props={node.props}
							innerHTML={node.innerHTML}
							classNames={node.classNames}
							components={componentMap}
						/>
					</div>
				))}
			</ResponsiveGridLayout>
		</div>
	)
}

export default StaticReactGridLayout
