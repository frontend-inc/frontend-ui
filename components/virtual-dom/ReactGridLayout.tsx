'use client'

import React, { useState, useEffect } from "react";
import _ from "lodash";
import { GridLayout as RGL, WidthProvider, LayoutItem, mergeLayouts } from "../../react-grid-layout";
import './react-grid-layout.css';
import 'react-resizable/css/styles.css'
import { useMediaQuery } from 'react-responsive'
import { RenderDOMComponent } from "../../components"
import { GripVertical } from "lucide-react";

const ResponsiveGridLayout = WidthProvider(RGL);

type LayoutItemType =  LayoutItem & {
  name: string 
  props: Record<string, any>
  classNames?: string[]
  innerHTML?: string 
}

type Layout = LayoutItemType[]

type ReactGridLayoutProps = {
  layout: Layout
  setLayout: (layout: Layout) => void
  onDrop: (layout: Layout) => void
  componentMap: Record<string, React.FC>
}

const ReactGridLayout: React.FC<ReactGridLayoutProps> = (props) => {
	
  const {		
    layout=[],
    setLayout,
    onDrop,
    componentMap    
	} = props || {}

  const calcMobileLayout = (layout: Layout) => {
    return layout.map((item) => {
      return {
        ...item,
        i: `mobile-${item.i}`, // Assign a uniq mobile id
        w: 1,
        x: 0, 
        static: true,
        isResizable: false,
        isDraggable: false               
      }
    })
  }

  const [mobileLayout, setMobileLayout] = useState<Layout>(calcMobileLayout(layout))

  const [cols, setCols] = useState(12)
	const isMobile = useMediaQuery({ maxWidth: 640 })

  useEffect(() => {
    if(isMobile){
      setCols(1)      
    }else{
      setCols(12)
    }
  }, [isMobile])

  const onLayoutChange = (newLayout: Layout) => {
    // @ts-ignore 
    const mergedLayout = mergeLayouts(layout, newLayout)
    setMobileLayout(calcMobileLayout(mergedLayout))
    if(!isMobile){
      // Mobile view is for presentation only
      setLayout(mergedLayout)
      onDrop(mergedLayout)
    }     
  }
	
  return (      
    <div className="w-full h-full min-h-[200px]">
      <ResponsiveGridLayout
        className='grid'          
        rowHeight={50}
        cols={cols}
        layout={isMobile ? mobileLayout : layout}                    
        onLayoutChange={ onLayoutChange }
        //@ts-ignore
        compactType={'vertical'}
        measureBeforeMount
        useCSSTransforms
      >
        { layout?.map((item) => (
          <div 
            key={ isMobile ? `mobile-${item.i}` : item.i } 
            className='max-w-[calc(100vw)] relative flex flex-row items-center justify-center w-full h-full'
          >
            <div className="cursor-grab active:cursor-grabbing w-8 h-8 z-50 flex items-center justify-center absolute top-2 left-0">
              <GripVertical className='w-4 h-4 text-foreground/70' />
            </div>
            <RenderDOMComponent 
              name={ item.name }
              props={ item.props }
              innerHTML={ item.innerHTML }
              classNames={ item.classNames }
              components={ componentMap }
            />            
          </div>
        ))}
      </ResponsiveGridLayout>      
    </div>
  )
}

export default ReactGridLayout