import React from 'react';
import { DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { arrayMove, SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy, horizontalListSortingStrategy } from '@dnd-kit/sortable';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

// Sortable Card Component
function SortableCard({ id, title }) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners} className="p-4 m-2 bg-white shadow rounded">
      {title}
    </div>
  );
}

// Flex Container Component
function FlexContainer({ id, direction, children, onDragEnd }) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const sortingStrategy = direction === 'flex-row' ? horizontalListSortingStrategy : verticalListSortingStrategy;

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners} className={`flex ${direction} p-4 bg-gray-100 rounded`}>
      <SortableContext items={children.map(child => child.id)} strategy={sortingStrategy}>
        {children.map(child => (
          child.type === 'Card' ? (
            <SortableCard key={child.id} id={child.id} title={child.props.title} />
          ) : (
            <FlexContainer
              key={child.id}
              id={child.id}
              direction={child.props.direction}
              children={child.children}
              onDragEnd={onDragEnd}
            />
          )
        ))}
      </SortableContext>
    </div>
  );
}

// Recursive function to find and update nested items
function updateNestedItems(items, activeId, overId) {
  return items.map(item => {
    if (item.children) {
      return {
        ...item,
        children: updateNestedItems(item.children, activeId, overId),
      };
    }
    return item;
  });
}

// Main Component
export default function VirtualDOMDragAndDrop({ virtualDOM }) {
  const [items, setItems] = React.useState(virtualDOM.children);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.findIndex(item => item.id === active.id);
        const newIndex = items.findIndex(item => item.id === over.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  return (
    <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <FlexContainer
        id={virtualDOM.id}
        direction={virtualDOM.props.direction}
        children={items}
        onDragEnd={handleDragEnd}
      />
    </DndContext>
  );
}