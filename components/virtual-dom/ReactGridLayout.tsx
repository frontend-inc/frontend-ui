'use client'

import React, { useRef, useState, useEffect, useMemo } from 'react'
import {
  EventCallback,
	ResponsiveGridLayout as RGL,
	WidthProvider,
	LayoutItem,
} from 'packages/react-grid-layout'
import './react-grid-layout.css'
import 'react-resizable/css/styles.css'
import { Button } from '@nextui-org/react'
import { RenderNode } from '../../components'
import { GripVertical } from 'lucide-react'
import { ReactGridLayoutsType } from '../../types'
import { RiCloseLine, RiDeleteBin7Line, RiFileCopyLine, RiSquareFill } from '@remixicon/react'
import { cn } from '@nextui-org/react'
import { useDebounce } from 'use-debounce'
import { isEqual } from 'lodash'
import { useEditor } from 'hooks'
import { SyntheticEventType } from '../../types'
import { VirtualDomType } from 'types'

export const ROW_HEIGHT = 50
export const MARGIN = [4, 4]
export const COLS = { md: 24, sm: 8 }
export const BREAKPOINTS = { md: 640, sm: 0 }

type LayoutItemType = LayoutItem & {
	name: string
	props: Record<string, any>
	classNames?: string[]
	layouts: ReactGridLayoutsType
}

type ResponsiveLayout = LayoutItemType[]

type ReactGridLayoutProps = {
	nodes: LayoutItemType[]
	onDrop: (layout: ResponsiveLayout) => void
	handleDelete: (node: LayoutItemType) => void
	componentMap: Record<string, React.FC>
	handleUpdate: (component: any) => void
  handleDuplicate: (component: any) => void
}

// https://github.com/react-grid-layout/react-grid-layout
const ReactGridLayout: React.FC<ReactGridLayoutProps> = (props) => {
	const {
		nodes = [],
		onDrop,
		handleDelete,
		handleUpdate,
    handleDuplicate,
		componentMap,
	} = props || {}

  const { 
    postIframeMessage,
    activeComponent, 
    setActiveComponent 
  } = useEditor()

	const ResponsiveGridLayout = useMemo(() => WidthProvider(RGL), [])

  const [isDragging, setIsDragging] = useState(false)

  const handleDragStart = ({ event }: any ) => {
    setIsDragging(true)
    if(event){
      event.stopPropagation()
    }    
  }

  const handleDragStop = ({ event }: any) => {
    setIsDragging(false)
    if(event){
      event.stopPropagation()
    }
  }

	const formatLayout = (nodes) => {
		if (!Array.isArray(nodes)) return []
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

	// Only update the layout if the nodes change
	useEffect(() => {
		if (!isEqual(layouts, formatLayout(nodes))) {
			setLayouts(formatLayout(nodes))
		}
	}, [nodes])

	const onLayoutChange = ({ layout, layouts: newLayouts, breakpoint }) => {
		const responsiveLayouts = {
			...layouts,
			[breakpoint]: layout.map((l) => ({ i: l.i, ...l })),
		}
		if (!isEqual(layouts, responsiveLayouts)) {
			setLayouts(responsiveLayouts)
		}
	}

	const mounted = useRef(false)
	useEffect(() => {
		// Don't run on first render
		if (mounted.current) {
			let newNodes = [...nodes]
			newNodes = newNodes.map((node) => {
				const sm = debouncedLayouts.sm.find((l) => l.i === node.id)
				const md = debouncedLayouts.md.find((l) => l.i === node.id)
				return {
					...node,
					layouts: {
						sm: { x: sm.x, y: sm.y, w: sm.w, h: sm.h },
						md: { x: md.x, y: md.y, w: md.w, h: md.h },
					},
				}
			})
			onDrop(newNodes)
		}
		if (debouncedLayouts) {
			mounted.current = true
		}
	}, [debouncedLayouts])

	const handleClick = (node: VirtualDomType, ev: React.MouseEvent) => {
    setActiveComponent(node)
		window.parent.postMessage(
			{
				event: 'click_component',
				data: node,
			},
			'*'
		)
    ev.stopPropagation()
  }

	return (
		<div 
      className={cn(
        "relative w-full",
        isDragging && 'display-grid-columns'
      )}>    
      {isDragging && (
        <div className="absolute top-3 left-3 grid-container" />    
      )}
			<ResponsiveGridLayout
				className="react-grid-layout"
				rowHeight={ROW_HEIGHT}
				breakpoints={BREAKPOINTS}
				cols={COLS}
        //@ts-ignore
				layouts={layouts}
        //@ts-ignore
        margin={MARGIN}
        measureBeforeMount
        onDragStart={handleDragStart}
        onDragStop={handleDragStop}
        onResizeStart={handleDragStart}
        onResizeStop={handleDragStop}
				onLayoutChange={onLayoutChange}
        //@ts-ignore
				compactType={null}
        preventCollision
				draggableHandle=".draggable-handle"
        resizeHandles={['se','sw','nw']}
				isDroppable={false}
			>
				{nodes?.map((node) => {
					
          const handleChange = (ev: SyntheticEventType) => {
						const { name, value } = ev.target						
            let newComponent = {
              ...node,
              props: {
                ...node.props,
                [name]: value,
              },
            }
						handleUpdate(newComponent)
					}

          const isSelected = activeComponent?.id && (activeComponent?.id === node.id)

          // Support live editing for typography components
          const disablePointerEvents = !['RichText'].includes(node.name)

					return (
						<div
							onClick={(ev) => handleClick(node, ev)}
							key={node.id}
              data-id={node.id}
							className={cn(                
                'flex flex-row w-full h-full justify-center',
								'outline outline-2 outline-transparent hover:outline-blue-500 ',                
                isSelected && 'outline-blue-500',								
							)}
						>
              <div 
                className={ cn(
                  'flex flex-row w-full h-full justify-center',
                  disablePointerEvents && 'pointer-events-none'
                )}>
                  <RenderNode
                    isEditing
                    handleChange={handleChange}
                    type={node.name}
                    props={node.props}
                    classNames={node.classNames}
                    componentMap={componentMap}
                  />             
                </div>   
                <div className='grid-controls absolute top-1 right-1 justify-end'>
							  <div                 
                  className={ cn(
                    "hidden rounded-lg grid-controls z-50 shadow-sm bg-background",
                    isSelected && 'flex flex-row justify-end space-x-1',
                  )}>      
                  <Button
                    isIconOnly
                    variant="light"
                    size="sm"                    
                    onPress={() => handleDelete(node)}
                  >
                    <RiDeleteBin7Line className="w-4 h-4 text-foreground" />
                  </Button>    
                  <Button
                    isIconOnly
                    variant="light"
                    size="sm"                    
                    onPress={() => handleDuplicate(node)}
                  >
                    <RiFileCopyLine className="w-4 h-4 text-foreground" />
                  </Button>
                  <div className="draggable-handle rounded-lg h-8 w-8 flex items-center justify-center">
                    <GripVertical className="w-5 h-5 text-foreground" />         
                  </div>                                 
                </div>
							</div>
				    </div>
					)
				})}
			</ResponsiveGridLayout>
		</div>
	)
}

export default ReactGridLayout
