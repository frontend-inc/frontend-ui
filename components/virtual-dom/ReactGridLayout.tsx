// @ts-nocheck

'use client'

import React, { useMemo } from "react";
import { GridLayout as RGL, WidthProvider, LayoutItem } from "../../react-grid-layout";
import { combineLayouts, mergeLayouts } from "../../react-grid-layout";
import './react-grid-layout.css';
import 'react-resizable/css/styles.css';
import { useMediaQuery } from 'react-responsive';
import { RenderDOMComponent } from "../../components";
import { GripVertical } from "lucide-react";

const ResponsiveGridLayout = WidthProvider(RGL);

type LayoutItemType = LayoutItem & {
  w: { xs: number, md: number },
  h: { xs: number, md: number },
  x: { xs: number, md: number },
  y: { xs: number, md: number },
  name: string;
  props: Record<string, any>;
  classNames?: string[];
  innerHTML?: string;
};

type ResponsiveLayout = LayoutItemType[];

type ReactGridLayoutProps = {
  layout: ResponsiveLayout;  
  onDrop: (layout: ResponsiveLayout) => void;
  componentMap: Record<string, React.FC>;
};

const ReactGridLayout: React.FC<ReactGridLayoutProps> = (props) => {
  const {
    layout = [],
    onDrop,
    componentMap
  } = props || {};

  const calcMobileLayout = (layout: ResponsiveLayout) => {
    return layout.map((item) => ({
      ...item,
      w: 12,
      x: 0,
      y: item?.y?.xs,
      h: item?.h?.xs,
      isResizable: true,
      isDraggable: true
    }));
  };

  const calcDesktopLayout = (layout: ResponsiveLayout) => {
    return layout.map((item) => ({
      ...item,
      w: item?.w?.md,
      x: item?.x?.md,
      y: item?.y?.md,
      h: item?.h?.md,
      isResizable: true,
      isDraggable: true
    }));
  };

  const isMobile = useMediaQuery({ maxWidth: 640 });

  const mobileLayout = useMemo(() => calcMobileLayout(layout), [layout]);
  const desktopLayout = useMemo(() => calcDesktopLayout(layout), [layout]);

  const onLayoutChange = (newLayout: ResponsiveLayout) => {
    let mergedLayout;
    let responsiveLayout;
    if (isMobile) {
      mergedLayout = mergeLayouts(mobileLayout, newLayout);
      responsiveLayout = combineLayouts(mergedLayout, desktopLayout);
    } else {
      mergedLayout = mergeLayouts(desktopLayout, newLayout);
      responsiveLayout = combineLayouts(mobileLayout, mergedLayout);
    }    
    onDrop(responsiveLayout);
  };

  const handleClick = (component: LayoutItemType, ev: React.MouseEvent) => {
    ev.stopPropagation();
    window.parent.postMessage(
      {
        event: 'click_component',
        data: component,
      },
      '*'
    );
  };

  return (
    <div className="w-full h-full min-h-[200px]">
      <ResponsiveGridLayout
        autoSize
        className="grid"
        rowHeight={50}
        cols={12}
        layout={isMobile ? mobileLayout : desktopLayout}
        onLayoutChange={onLayoutChange}
        compactType="vertical"
        measureBeforeMount
        useCSSTransforms
      >
        {layout?.map((item) => (
          <div
            onClick={(ev) => handleClick(item, ev)}
            key={item.i}
            className="relative flex flex-row items-center justify-center w-full h-full"
          >
            <div className="cursor-grab active:cursor-grabbing w-8 h-8 z-50 flex items-center justify-center absolute top-2 left-0">
              <GripVertical className="w-4 h-4 text-foreground/70" />
            </div>
            <RenderDOMComponent
              name={item.name}
              props={item.props}
              innerHTML={item.innerHTML}
              classNames={item.classNames}
              components={componentMap}
            />
          </div>
        ))}
      </ResponsiveGridLayout>
    </div>
  );
};

export default ReactGridLayout;
