import React, {useCallback, useEffect, useRef, useState} from 'react';
import {createPortal, unstable_batchedUpdates} from 'react-dom';
import {
  CancelDrop,
  closestCenter,
  pointerWithin,
  rectIntersection,
  CollisionDetection,
  DndContext,
  DragOverlay,
  DropAnimation,
  getFirstCollision,
  KeyboardSensor,
  MouseSensor,
  TouchSensor,
  Modifiers,
  useDroppable,
  UniqueIdentifier,
  useSensors,
  useSensor,
  MeasuringStrategy,
  KeyboardCoordinateGetter,
  defaultDropAnimationSideEffects,
} from '@dnd-kit/core';
import {
  AnimateLayoutChanges,
  useSortable,
  arrayMove,
  defaultAnimateLayoutChanges,
  verticalListSortingStrategy,
  SortingStrategy,
} from '@dnd-kit/sortable';
import {coordinateGetter as multipleContainersCoordinateGetter} from '../multipleContainersKeyboardCoordinates'
import {Item, Container, ContainerProps, Droppable} from '../components';
import {
  findNode,
  moveNode,
  isDescendant,
  findSiblingNodes,
  findParentNode,
  findRootParent
} from '../../../helpers'
import { cn } from 'frontend-shadcn';

export default {
  title: 'Presets/Sortable/Multiple Containers',
};

const dropAnimation: DropAnimation = {
  sideEffects: defaultDropAnimationSideEffects({
    styles: {
      active: {
        opacity: '0.5',
      },
    },
  }),
};

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
  items: Items;
  setItems: (items: Items) => void | Promise<void>;
  handle?: boolean;
  renderItem?: any;
  strategy?: SortingStrategy;
  modifiers?: Modifiers;
  minimal?: boolean;
  trashable?: boolean;
  scrollable?: boolean;
  vertical?: boolean;
}

export const TRASH_ID = 'void';
export const ROOT_ID = 'root';
const PLACEHOLDER_ID = 'placeholder';

type DroppableRootProps = {
  id: UniqueIdentifier;
  children: React.ReactNode;
  className?: string;
};

function DroppableRoot(props: DroppableRootProps) {
  
  const { id, children, className } = props;
  const {setNodeRef, isOver} = useDroppable({
    id,
  });

  return (
    <div
      ref={setNodeRef}
      style={{
        height: '100%',
        width: '100%',
      }}
      className={cn(
        isOver && 'bg-blue-100',
        className 
      )}
    >
      { children }
    </div>
  );
}

export function MultipleDragDrop({
  items,
  setItems,
  children,
  activeItem,
  setActiveItem,
  adjustScale = false,
  cancelDrop,
  columns,
  handle = false,
  coordinateGetter = multipleContainersCoordinateGetter,
  getItemStyles = () => ({}),
  wrapperStyle = () => ({}),
  modifiers,
  renderItem,    
  strategy = verticalListSortingStrategy,
}: Props) {

  const lastOverId = useRef<UniqueIdentifier | null>(null);
  const recentlyMovedToNewContainer = useRef(false);

  /**
   * Custom collision detection strategy optimized for multiple containers
   *
   * - First, find any droppable containers intersecting with the pointer.
   * - If there are none, find intersecting containers with the active draggable.
   * - If there are no intersecting containers, return the last matched intersection
   *
   */
  const collisionDetectionStrategy: CollisionDetection = useCallback(
    (args) => {

      if (activeItem) {
        return closestCenter({
          ...args,
          droppableContainers: args.droppableContainers
        });
      }

      // Start by finding any intersecting droppable
      const pointerIntersections = pointerWithin(args);
      const intersections =
        pointerIntersections.length > 0
          ? // If there are droppables intersecting with the pointer, return those
            pointerIntersections
          : rectIntersection(args);
      let overId = getFirstCollision(intersections, 'id');

      if (overId != null) {
       
        if (findNode(overId, items)) {
          const containerItems = findNode(overId, items)?.children || [];

          // If a container is matched and it contains items (columns 'A', 'B', 'C')
          if (containerItems.length > 0) {
            // Return the closest droppable within that container
            overId = closestCenter({
              ...args,
              droppableContainers: args.droppableContainers.filter(
                (container) => container.id !== overId 
              ),
            })[0]?.id;
          }
        }

        lastOverId.current = overId;

        return [{id: overId}];
      }

      // When a draggable item moves to a new container, the layout may shift
      // and the `overId` may become `null`. We manually set the cached `lastOverId`
      // to the id of the draggable item that was moved to the new container, otherwise
      // the previous `overId` will be returned which can cause items to incorrectly shift positions
      if (recentlyMovedToNewContainer.current) {
        lastOverId.current = activeItem?.id;
      }

      // If no droppable is matched, return the last match
      return lastOverId.current ? [{id: lastOverId.current}] : [];
    },
    [activeItem?.id, items]
  );
  const [clonedItems, setClonedItems] = useState<Items | null>(null);
  const sensors = useSensors(
    useSensor(MouseSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter,
    })
  );

  const getIndex = (id: UniqueIdentifier) => {
    const container = findNode(id, items);

    if (!container) {
      return -1;
    }

    const index = container?.children?.findIndex(child => child.id == id) 

    return index;
  };

  const onDragCancel = () => {
    if (clonedItems) {
      // Reset items to their original state in case items have been
      // Dragged across containers
      setItems(clonedItems);
    }

    setActiveItem(null);
    setClonedItems(null);
  };

  const findContainer = (id: string) => {
    return findNode(id, items)?.id
  }

  useEffect(() => {
    requestAnimationFrame(() => {
      recentlyMovedToNewContainer.current = false;
    });
  }, [items]);

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={collisionDetectionStrategy}
      measuring={{
        droppable: {
          strategy: MeasuringStrategy.Always,
        },
      }}
      onDragStart={({active}) => {
        setActiveItem(findNode(active.id, items));
        setClonedItems(items);
      }}
      onDragOver={({active, over}) => {
        const overId = over?.id;

        if (overId == null || overId === TRASH_ID || findNode(active.id, items)) {
          return;
        }

        const overContainer = findNode(overId, items);
        const activeContainer = findNode(active.id, items);

        if (!overContainer || !activeContainer) {
          return;
        }

        if (activeContainer?.id !== overContainer?.id) {
          setItems((items) => {
            const activeItems = activeContainer?.children;
            const overItems = overContainer?.children;
            const overIndex = overItems.findIndex((item) => item.id === overId);
            const activeIndex = activeItems.findIndex((item) => item.id === active.id);

            let newIndex: number;

            const isBelowOverItem =
              over &&
              active.rect.current.translated &&
              active.rect.current.translated.top >
                over.rect.top + over.rect.height;

            const modifier = isBelowOverItem ? 1 : 0;

            newIndex =
              overIndex >= 0 ? overIndex + modifier : overItems.length + 1;            

            recentlyMovedToNewContainer.current = true;            
            let updatedItems = moveNode(active.id, overContainer.id, [ ...items ], newIndex)                        
            return updatedItems;
          });
        }
      }}
      onDragEnd={({ active, over }) => {
        if (!over) return; // If there's no drop target, exit early.
      
        const activeNode = findNode(active.id, items);
        const overNode = findNode(over.id, items);
      
        const activeParent = findParentNode(active.id, items);
        const overParent = findParentNode(over.id, items);

        const siblingNodes = overParent ? findSiblingNodes(over.id, items) : [];
      
      
        if (active.id === over.id || !over.id) {
          return;
        }

        // If the over node is a descendant of the active node, exit early
        if (isDescendant(over.id, active.id, items)) {
          return;
        }
      
        setItems((prevItems) => {
          let updatedItems = [...prevItems];
          let index = 0;

          if(overNode?.isDroppable && activeNode?.isDroppable){
            index = prevItems?.findIndex(node => node.id == overNode.id)
            updatedItems = moveNode(active.id, null, updatedItems, index);
          }

          // Disable nested droppable containers
          else if(activeNode?.isDroppable && !overNode?.isDroppable){
            if(overParent){
              index = prevItems.findIndex((node) => node.id === overParent.id);
            }
            updatedItems = moveNode(active.id, null, updatedItems, index);
          }

          else if(overNode?.isDroppable && !activeNode.isDroppable){
            index = overNode?.children?.length || 0;
            updatedItems = moveNode(active.id, overNode.id, updatedItems, index);
          } 

          // Scenario 2: If over node is not a droppable container, but its parent is, move the active node into the parent
          else if(!overNode?.isDroppable && overParent && overParent?.isDroppable){
            index = siblingNodes.findIndex((node) => node.id === over.id);
            updatedItems = moveNode(active.id, overParent.id, updatedItems, index);
          }

          // Scenario 3: If the overnode is a root node          
          else if(!overNode?.isDroppable && !overParent){
            index = prevItems.findIndex((node) => node.id === over.id);
            updatedItems = moveNode(active.id, null, updatedItems, index);
          }          
      
          return updatedItems;
        });
      
        // Reset the active item after the drag-and-drop operation
        setActiveItem(null);
      }}
      
      
      cancelDrop={cancelDrop}
      onDragCancel={onDragCancel}
      modifiers={modifiers}
    >
    
        <div 
          className='flex flex-col md:flex-row gap-4 border-2 border-green-500'          
        >
          { children }
        </div>
      {createPortal(
        <DragOverlay adjustScale={adjustScale} dropAnimation={dropAnimation}>
          {activeItem && (
            activeItem?.type == 'Flex' ? 
              renderContainerDragOverlay(activeItem?.id) : 
              renderSortableItemDragOverlay(activeItem?.id)
          )}             
        </DragOverlay>,
        document.body
      )}
    </DndContext>
  );

  function renderSortableItemDragOverlay(id: UniqueIdentifier) {
    return (
      <Item
        value={id}
        handle={handle}
        style={getItemStyles({
          containerId: findContainer(id) as UniqueIdentifier,
          overIndex: -1,
          index: getIndex(id),
          value: id,
          isSorting: true,
          isDragging: true,
          isDragOverlay: true,
        })}
        wrapperStyle={wrapperStyle({index: 0})}
        renderItem={renderItem}
        dragOverlay
      />
    );
  }

  function renderContainerDragOverlay(containerId: UniqueIdentifier) {

    let flexContainer = findNode(containerId, items);

    return (
      <Container
        label={`Column ${flexContainer.id}`}
        columns={columns}
        style={{
          height: '100%',
        }}
        shadow
        unstyled={false}
      >
        {flexContainer?.children?.map((child, index) => (
          <Item
            key={child.id}
            value={child?.id}
            handle={handle}
            style={getItemStyles({
              containerId,
              overIndex: -1,
              index: getIndex(child),
              value: child,
              isDragging: false,
              isSorting: false,
              isDragOverlay: false,
            })}
            wrapperStyle={wrapperStyle({index})}
            renderItem={renderItem}
          />
        ))}
      </Container>
    );
  }
}
