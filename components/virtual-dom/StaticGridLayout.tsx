'use client'

import React, { useState } from 'react'
import {
	ResponsiveGridLayout as RGL,
	WidthProvider,
	LayoutItem,
} from 'packages/react-grid-layout'
//import './react-grid-layout.css'
import RenderNode  from './RenderNode'

export const ROW_HEIGHT = 50
export const MARGIN = [4, 4]
export const COLS = { md: 24, sm: 8 }
export const BREAKPOINTS = { md: 640, sm: 0 }

const ResponsiveGridLayout = WidthProvider(RGL)

type LayoutItemType = LayoutItem & {
	name: string
	props: Record<string, any>
	classNames?: string[]
	layouts: ReactGridLayoutsType
}

type StaticReactGridLayoutProps = {
	nodes: LayoutItemType[]
	componentMap: Record<string, React.FC>
}

const StaticReactGridLayout: React.FC<StaticReactGridLayoutProps> = (props) => {
	const { nodes = [], componentMap } = props || {}

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
		<div className="w-full">
			<ResponsiveGridLayout
				className="static-grid"
				rowHeight={ROW_HEIGHT}
        margin={MARGIN}
				breakpoints={BREAKPOINTS}
				cols={COLS}
				layouts={layouts}
        measureBeforeMount
				compactType={'vertical'}
			>
				{nodes?.map((node) => (
					<div
						key={node.id}
            id={`component-${node.id}`}
						className="p-1 px-3 relative flex flex-row w-full h-full"
					>
						<RenderNode
							type={node.name}
							props={node.props}
							classNames={node.classNames}
							componentMap={componentMap}
						/>
					</div>
				))}
			</ResponsiveGridLayout>
		</div>
	)
}

export default StaticReactGridLayout
