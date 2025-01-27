'use client'

import React, { useRef, useState, useEffect, useMemo } from 'react'
import {
	ResponsiveGridLayout as RGL,
	WidthProvider,
	LayoutItem,
} from '../../react-grid-layout'
import './react-grid-layout.css'
import 'react-resizable/css/styles.css'
import { Button, ButtonGroup } from '@nextui-org/react'
import { RenderDOMNode } from '../../components'
import { GripVertical } from 'lucide-react'
import { ReactGridLayoutsType } from '../../types'
import { RiCloseLine } from '@remixicon/react'
import { cn } from '@nextui-org/react'
import { useDebounce } from 'use-debounce'
import { isEqual } from 'lodash'
import { useEditor } from 'hooks'
import { SyntheticEventType } from '../../types'
import { VirtualDomType } from 'types'

export const ROW_HEIGHT = 48
export const MARGIN = [8, 8]
export const COLS = { md: 12, sm: 4 }
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
}

const ReactGridLayout: React.FC<ReactGridLayoutProps> = (props) => {
	const {
		nodes = [],
		onDrop,
		handleDelete,
		handleUpdate,
		componentMap,
	} = props || {}

  const { activeComponent, setActiveComponent } = useEditor()
	const ResponsiveGridLayout = useMemo(() => WidthProvider(RGL), [])


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
    ev.stopPropagation()
    setActiveComponent(node)
		window.parent.postMessage(
			{
				event: 'click_component',
				data: node,
			},
			'*'
		)
  }

	return (
		<div className="w-full h-full min-h-[200px]">
			<ResponsiveGridLayout
				className="react-grid-layout"
				rowHeight={ROW_HEIGHT}
				breakpoints={BREAKPOINTS}
				cols={COLS}
				layouts={layouts}
        margin={MARGIN}
				onLayoutChange={onLayoutChange}
				compactType={'vertical'}
				draggableHandle=".draggable-handle"
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
          const disablePointerEvents = !['RichText','Text','Paragraph'].includes(node.name)

					return (
						<div
							onClick={(ev) => handleClick(node, ev)}
							key={node.id}
              data-id={node.id}
							className={cn(                
								'grid-controls',
                'flex flex-row w-full h-full justify-center',
								'border-2 rounded-md border-transparent hover:border-dashed-2 hover:border-blue-500 hover:bg-blue-500 hover:bg-opacity-10',                
                isSelected && 'border-blue-500 relative',								
							)}
						>
              <div 
                className={ cn(
                  'flex flex-row w-full h-full justify-center',
                  disablePointerEvents && 'pointer-events-none'
                )}>
                  <RenderDOMNode
                    isEditing
                    handleChange={handleChange}
                    component={node.name}
                    props={node.props}
                    classNames={node.classNames}
                    components={componentMap}
                  />             
                </div>   
							  <div 
                  className={ cn(
                    "hidden rounded-lg grid-controls z-50 shadow-sm bg-background flex-row items-center space-x-1 justify-center absolute top-[3px] right-[3px]",
                    isSelected && 'flex'
                  )}>      
                  <Button
                    isIconOnly
                    variant="light"
                    size="sm"                    
                    onPress={() => handleDelete(node)}
                  >
                    <RiCloseLine className="w-4 h-4 text-foreground" />
                  </Button>                   
                  <div className="draggable-handle rounded-lg shadow-sm h-8 w-8 flex items-center justify-center">
                    <GripVertical className="w-5 h-5 text-foreground" />         
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
