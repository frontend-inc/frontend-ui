import React, {useEffect, useRef, useState} from 'react';
import {unstable_batchedUpdates} from 'react-dom';
import { cn } from '@nextui-org/react'
import {
  CancelDrop,
  DropAnimation,
  Modifiers,
  useDroppable,
  UniqueIdentifier,
  KeyboardCoordinateGetter,
  defaultDropAnimationSideEffects,
} from '@dnd-kit/core';
import {
  AnimateLayoutChanges,
  SortableContext,
  useSortable,
  defaultAnimateLayoutChanges,
  verticalListSortingStrategy,
  SortingStrategy,
  horizontalListSortingStrategy,
  rectSortingStrategy,
} from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';
import {Item, Container, ContainerProps} from '../components'
import { DraggableItem } from './DraggableItem';
import {
  findNode,
  deleteNode,
  insertNode,
} from '../../../helpers'
import { Resizable } from 'react-resizable';

export default {
  title: 'Presets/Sortable/Multiple Containers',
};

const animateLayoutChanges: AnimateLayoutChanges = (args) =>
  defaultAnimateLayoutChanges({...args, wasDragging: true});

function DroppableContainer({
  children,
  columns = 1,
  disabled,
  id,
  items,
  style,
  className,
  ...props
}: ContainerProps & {
  disabled?: boolean;  
  id: UniqueIdentifier;
  items: UniqueIdentifier[];
  style?: React.CSSProperties;
  className?: string;
}) {
  const {
    active,
    attributes,
    isDragging,
    listeners,
    over,
    setNodeRef,
    transition,
    transform,
  } = useSortable({
    id,
    data: {
      type: 'container',
      children: items,
    },
    animateLayoutChanges,
  });
  const isOverContainer = over
    ? (id === over.id && active?.data.current?.type !== 'container') ||
      items.includes(over.id)
    : false;

  return (
    <Container
      ref={disabled ? undefined : setNodeRef}
      style={{
        ...style,
        transition,
        transform: CSS.Translate.toString(transform),
        opacity: isDragging ? 0.5 : undefined,
      }}
      hover={isOverContainer}
      handleProps={{
        ...attributes,
        ...listeners,
      }}
      columns={columns}
      className={className}
      {...props}
    >
      {children}
    </Container>
  );
}


const SortableList = (props) => {
  const { 
    items,
    strategy,
    handle,
    renderItem,
    containerId,
    minimal,
    columns,
    scrollable,
    containerStyle,
    handleRemove,
    getIndex,
    getItemStyles,
    wrapperStyle,
    className
  } = props;       

  return(
      <SortableContext 
        items={items || []} 
        strategy={ verticalListSortingStrategy }
      >
        {items?.map((child, index) => {
          return (
            child.isDroppable == true ? 
            <RenderSortable 
              key={ child.id }
              scrollable={scrollable}
              containerStyle={containerStyle}
              item={child}
              strategy={ strategy }
              handle={handle}
              renderItem={renderItem}
              containerId={child.id}
              getIndex={getIndex}
              getItemStyles={getItemStyles}
              wrapperStyle={wrapperStyle}
              className={cn(
                'w-full flex-1'
              )}
            /> : 
            <SortableItem
              //disabled={isSortingContainer}
              key={child.id}
              id={child.id}
              index={index}
              handle={handle}
              style={getItemStyles}
              wrapperStyle={wrapperStyle}
              item={ child }
              renderItem={renderItem}
              containerId={containerId}
              getIndex={getIndex}                      
              className={cn(
                'w-full flex-1'
              )}
            />
          );
        })}
    </SortableContext>
  )
}

const RenderSortable = (props) => {
  const { 
    item,
    strategy,
    handle,
    renderItem,
    containerId,
    minimal,
    columns,
    scrollable,
    containerStyle,
    handleRemove,
    getIndex,
    getItemStyles,
    wrapperStyle,
    className
  } = props;       

  return(
    item.isDroppable ?     
      <DroppableContainer
        key={item.id}
        id={item.id}
        label={minimal ? undefined : `Column ${item.id}`}
        columns={item.props.cols}
        items={item?.children || [] }
        scrollable={scrollable}
        style={containerStyle}
        unstyled={minimal}
        onRemove={() => handleRemove(item?.id)}
      >         
        <SortableList 
          items={ item?.children || [] }
          strategy={ strategy }
          getItemStyles={ getItemStyles }
          wrapperStyle={ wrapperStyle }
          renderItem={ renderItem }
          containerId={ item.id }
          getIndex={ getIndex }
          className={cn(
            'w-full flex-1'
          )}
      /> 
    </DroppableContainer> 
    : 
     <SortableList 
        key={ item.id }
        items={ item?.children || [] }
        strategy={ strategy }
        getItemStyles={ getItemStyles }
        wrapperStyle={ wrapperStyle }
        renderItem={ renderItem }
        containerId={ item.id }
        getIndex={ getIndex }
        className={cn(
          'w-full flex-1'
        )}
    /> 
  )
}

type Items = Record<UniqueIdentifier, UniqueIdentifier[]>;

interface Props {
  adjustScale?: boolean;
  cancelDrop?: CancelDrop;
  columns?: number;
  containerStyle?: React.CSSProperties;
  coordinateGetter?: KeyboardCoordinateGetter;
  getItemStyles?(args: {
    value: UniqueIdentifier;
    index: number;
    overIndex: number;
    isDragging: boolean;
    containerId: UniqueIdentifier;
    isSorting: boolean;
    isDragOverlay: boolean;
  }): React.CSSProperties;
  wrapperStyle?(args: {index: number}): React.CSSProperties;
  itemCount?: number;
  items?: Items;
  handle?: boolean;
  renderItem?: any;
  strategy?: SortingStrategy;
  modifiers?: Modifiers;
  minimal?: boolean;
  trashable?: boolean;
  scrollable?: boolean;
  vertical?: boolean;
}


export function Sortable({
  items,
  handle = false,
  containerStyle,
  getItemStyles = () => ({}),
  wrapperStyle = () => ({}),
  minimal = false,
  renderItem,
  scrollable,
}: Props) {

  const recentlyMovedToNewContainer = useRef(false);

  const getIndex = (id: UniqueIdentifier) => {
    const container = findNode(id, items);

    if (!container) {
      return -1;
    }

    if(!container?.children || container?.children?.length === 0){
      return -1
    }

    const index = container?.children?.findIndex((childId) => childId === id);

    return index;
  };

  useEffect(() => {
    requestAnimationFrame(() => {
      recentlyMovedToNewContainer.current = false;
    });
  }, [items]);

  return (
      <SortableContext
        items={[...items]}
        strategy={
          rectSortingStrategy
        }
      >          
        {items.map((item) => {                                    
          return(           
            <RenderSortable 
              key={ item.id }
              scrollable={scrollable}
              containerStyle={containerStyle}

              item={item}
              strategy={ verticalListSortingStrategy }
              handle={handle}
              renderItem={renderItem}
              containerId={item.id}
              getIndex={getIndex}
              getItemStyles={getItemStyles}
              wrapperStyle={wrapperStyle}
              className={cn(
                'w-full flex-1'
              )}
            />
        )})}          
    </SortableContext>
  );
}

interface SortableItemProps {
  containerId: UniqueIdentifier;
  id: UniqueIdentifier;
  index: number;
  handle: boolean;
  disabled?: boolean;
  style(args: any): React.CSSProperties;
  getIndex(id: UniqueIdentifier): number;
  renderItem(): React.ReactElement;
  wrapperStyle({index}: {index: number}): React.CSSProperties;
  className?: string;
}

function SortableItem({
  disabled,
  id,
  index,
  handle,
  item,
  renderItem,
  style,
  containerId,
  getIndex,
  wrapperStyle,
  className
}: SortableItemProps) {

  const {
    setNodeRef,
    setActivatorNodeRef,
    listeners,
    isDragging,
    isSorting,
    over,
    overIndex,
    transform,
    transition,
  } = useSortable({
    id,
  });
  const mounted = useMountStatus();
  const mountedWhileDragging = isDragging && !mounted;

  return (
    <Item
      ref={disabled ? undefined : setNodeRef}
      value={id}
      dragging={isDragging}
      sorting={isSorting}
      handle={handle}
      handleProps={handle ? {ref: setActivatorNodeRef} : undefined}
      index={index}
      wrapperStyle={wrapperStyle({index})}
      style={style({
        index,
        value: id,
        isDragging,
        isSorting,
        overIndex: over ? getIndex(over.id) : overIndex,
        containerId,
      })}
      transition={transition}
      transform={transform}
      fadeIn={mountedWhileDragging}
      listeners={listeners}
      className={className}
      value={ item.id}
    />          
  );
}

function useMountStatus() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 500);

    return () => clearTimeout(timeout);
  }, []);

  return isMounted;
}
