'use client'

import React, { useState } from 'react'
import {
	ResponsiveGridLayout as RGL,
	WidthProvider,
	LayoutItem,
} from 'packages/react-grid-layout'
//import './react-grid-layout.css'
import { RenderDOMNode } from '..'
import { ReactGridLayoutsType } from '../../types'
import { 
  ROW_HEIGHT,
  MARGIN,
  COLS,
  BREAKPOINTS
} from './ReactGridLayout'

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
		<div className="w-full h-full min-h-[200px]">
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
						className="p-1 px-3 relative flex flex-row w-full h-full"
					>
						<RenderDOMNode
							component={node.name}
							props={node.props}
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
