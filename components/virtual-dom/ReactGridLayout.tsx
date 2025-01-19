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
import { RenderDOMNode } from '../../components'
import { GripVertical } from 'lucide-react'
import { ReactGridLayoutsType } from '../../types'
import { RiCloseLine, RiPencilLine, RiSettings2Line } from '@remixicon/react'
import { cn } from 'frontend-shadcn'
import { useDebounce } from 'use-debounce'
import { isEqual } from 'lodash'
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

  // Match breakpoints with tailwindcss
  const breakpoints = { md: 640, sm: 0 }
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
  const [debouncedLayouts] = useDebounce(layouts, 250)

  useEffect(() => {
    setLayouts(formatLayout(nodes))
  }, [nodes])

	const onLayoutChange = ({ layout, layouts: newLayouts, breakpoint }) => {    
    const responsiveLayouts = { 
      ...layouts,
      [breakpoint]: layout.map((l) => ({ i: l.i, ...l }))
    }
    if(!isEqual(layouts, responsiveLayouts)){
      setLayouts(responsiveLayouts)    
    }
	}

  useEffect(() => {
    let newNodes = [ ...nodes ]    
    newNodes = newNodes.map((node) => {            
      const sm = debouncedLayouts.sm.find(l => l.i === node.id)
      const md = debouncedLayouts.md.find(l => l.i === node.id)      
      return {
        ...node,
        layouts: {
          sm: { x: sm.x, y: sm.y, w: sm.w, h: sm.h },
          md: { x: md.x, y: md.y, w: md.w, h: md.h },
        },
      }
    }) 
    copy(JSON.stringify(newNodes, null, 2))
    onDrop(newNodes)    		
  }, [debouncedLayouts])

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
				layouts={layouts}
				onLayoutChange={ onLayoutChange }
				compactType={'vertical'}
			>
				{nodes?.map((node) => (
					<div
						onClick={(ev) => handleClick(node, ev)}
						key={node.id}
						className={cn(
              "grid-controls",
              "outline-dashed rounded-md outline-1 outline-transparent hover:outline-blue-500",
              "p-1 relative flex flex-row w-full h-full"
            )}
					>
						<div className="invisible grid-controls cursor-grab active:cursor-grabbing w-8 h-8 z-50 flex items-center justify-center absolute top-2 left-0">
							<GripVertical className="w-4 h-4 text-foreground/70" />
						</div>
						<RenderDOMNode
							name={node.name}
							props={node.props}
							innerHTML={node.innerHTML}
							classNames={node.classNames}
							components={componentMap}
						/>
            <div className="invisible grid-controls z-50 flex flex-row items-center justify-center absolute top-2 right-2">
              <Button 
                isIconOnly
                variant="light"
                size="sm"
                className="rounded-full"
                onPress={(ev) => handleClick(node, ev)}
              >
							  <RiPencilLine className="w-4 h-4 text-foreground/70" />
              </Button>
              <Button 
                isIconOnly
                variant="light"
                size="sm"
                className="rounded-full"
                onPress={() => handleDelete(node)}
              >
							  <RiCloseLine className="w-4 h-4 text-foreground/70" />
              </Button>
						</div>
					</div>
				))}
			</ResponsiveGridLayout>
		</div>
	)
}

export default ReactGridLayout
