'use client'

import React, { useRef, useState, useEffect, useMemo } from 'react'
import {
	ResponsiveGridLayout as RGL,
	WidthProvider,
	LayoutItem,
} from '../../react-grid-layout'
import './react-grid-layout.css'
import 'react-resizable/css/styles.css'
import { Button } from '@nextui-org/react'
import { RenderDOMComponent } from '../../components'
import { GripVertical, Trash2 } from 'lucide-react'
import { ReactGridLayoutsType } from '../../types'
import copy from 'copy-to-clipboard'

const ResponsiveGridLayout = WidthProvider(RGL)

type LayoutItemType = LayoutItem & {
  name: string
	props: Record<string, any>
	classNames?: string[]
	innerHTML?: string
  layouts: ReactGridLayoutsType 
}

type ResponsiveLayout = LayoutItemType[]

type ReactGridLayoutProps = {
	nodes: LayoutItemType[]
	onDrop: (layout: ResponsiveLayout) => void
  handleDelete: (node: LayoutItemType) => void
	componentMap: Record<string, React.FC>
}

const ReactGridLayout: React.FC<ReactGridLayoutProps> = (props) => {
	const { nodes = [], onDrop, handleDelete, componentMap } = props || {}

  //const cols={ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }
  const breakpoints = { md: 680, sm: 0 }
  const cols={ md: 12, sm: 1 }
  
  const formatLayout = (nodes) => {
    if(!Array.isArray(nodes)) return [];
    const layout = { sm: [], md: [] }
    nodes.forEach((node) => {
      //@ts-ignore
      layout.sm.push({ i: node.id, id: node.id, ...node.layouts.sm })
      //@ts-ignore
      layout.md.push({ i: node.id, id: node.id, ...node.layouts.md })
    })    
    return layout
  }
  
  const [layouts, setLayouts] = useState(formatLayout(nodes))
  useEffect(() => {
    setLayouts(formatLayout(nodes))
  }, [nodes])

	const onLayoutChange = ({ layout, layouts, breakpoint }) => {
    setLayouts(layouts)
    let newNodes = [ ...nodes ]    
    newNodes = newNodes.map((node) => {            
      const sm = layouts.sm.find(l => l.i === node.id)
      const md = layouts.md.find(l => l.i === node.id)      
      return {
        ...node,
        layouts: {
          sm: { x: sm.x, y: sm.y, w: sm.w, h: sm.h },
          md: { x: md.x, y: md.y, w: md.w, h: md.h },
        },
      }
    }) 
    copy(JSON.stringify(newNodes))
    onDrop(newNodes)    		
	}

	const handleClick = (component: LayoutItemType, ev: React.MouseEvent) => {
		ev.stopPropagation()
		window.parent.postMessage(
			{
				event: 'click_component',
				data: component,
			},
			'*'
		)
	}

	return (
		<div className="w-full h-full min-h-[200px]">
			<ResponsiveGridLayout				
				className="layout"
				rowHeight={50}
        breakpoints={breakpoints}
				cols={cols}
				layouts={ layouts }
				onLayoutChange={ onLayoutChange }
				compactType={'vertical'}
			>
				{nodes?.map((node) => (
					<div
						onClick={(ev) => handleClick(node, ev)}
						key={node.id}
						className="py-2 px-7 relative flex flex-row w-full h-full"
					>
						<div className="cursor-grab active:cursor-grabbing w-8 h-8 z-50 flex items-center justify-center absolute top-2 left-0">
							<GripVertical className="w-4 h-4 text-foreground/70" />
						</div>
						<RenderDOMComponent
							name={node.name}
							props={node.props}
							innerHTML={node.innerHTML}
							classNames={node.classNames}
							components={componentMap}
						/>
            <div className="cursor-grab active:cursor-grabbing w-8 h-8 z-50 flex items-center justify-center absolute top-2 right-0">
              <Button 
                isIconOnly
                variant="light"
                onPress={() => handleDelete(node)}
              >
							  <Trash2 className="w-4 h-4 text-foreground/70" />
              </Button>
						</div>
					</div>
				))}
			</ResponsiveGridLayout>
		</div>
	)
}

export default ReactGridLayout
