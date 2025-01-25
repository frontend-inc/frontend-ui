import React from "react";
import {
  DndContext,
  closestCenter,
  DragOverlay,
  useDraggable,
  useDroppable,
} from "@dnd-kit/core";
import {
  SortableContext,
  useSortable,
  arrayMove,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export const RenderTree = ({ tree, onMove }) => {
  const renderNode = (node, path) => {
    if (node.type === "Stack") {
      return (
        <SortableStack key={path} node={node} path={path} onMove={onMove} />
      );
    }

    if (node.type === "Card") {
      return <Card key={path} id={path} />;
    }

    return null;
  };

  return <>{tree.children.map((child, index) => renderNode(child, `${index}`))}</>;
};

const SortableStack = ({ node, path, onMove }) => {
  return (
    <SortableContext
      items={node.children.map((_, index) => `${path}-${index}`)}
      strategy={verticalListSortingStrategy}
    >
      <div className="stack">
        {node.children.map((child, index) =>
          child.type === "Card" ? (
            <SortableCard
              key={`${path}-${index}`}
              id={`${path}-${index}`}
              onMove={(from, to) =>
                onMove(
                  path,
                  node.children,
                  from.replace(`${path}-`, ""),
                  to.replace(`${path}-`, "")
                )
              }
            />
          ) : (
            <RenderTree
              key={`${path}-${index}`}
              tree={child}
              onMove={(from, to) =>
                onMove(path, node.children, from, to, `${path}-${index}`)
              }
            />
          )
        )}
      </div>
    </SortableContext>
  );
};

function SortableCard({ id }) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } =
    useSortable({
      id,
      onDragEnd: ({ active, over }) => {
        // You can handle the reorder logic right here if you prefer
      },
    });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="card"
    >
      Card {id}
    </div>
  );
}

const Card = ({ id }) => {
  return <div className="card">Card {id}</div>;
};

export const Tree = ({ data, setData }) => {
  const handleMove = (path, children, fromIndex, toIndex) => {
    const newChildren = arrayMove(children, parseInt(fromIndex), parseInt(toIndex));
    const newData = JSON.parse(JSON.stringify(data)); // Deep copy to ensure immutability

    let target = newData;
    path.split("-").forEach((key) => {
      if (key !== "") target = target.children[parseInt(key)];
    });

    target.children = newChildren;
    setData(newData);
  };

  function parseIndexFromId(id) {
    // If the ID is “2-1” meaning “stack at index 2, item at index 1”
    // you might do something like this:
    const parts = id.split("-");
    return parseInt(parts[parts.length - 1]);
  }
  
  function handleDragEnd(event) {
    const { active, over } = event;
  
    // `active.id` is the id of the item we dragged
    // `over?.id` is the id of the item the dragged item was dropped on
  
    if (!over || active.id === over.id) {
      return; // Nothing changed
    }
    
    // Extract indices from IDs, or keep them in a map somewhere
    const fromIndex = parseIndexFromId(active.id);
    const toIndex = parseIndexFromId(over.id);
  
    // If your IDs are "stackId-index", you'll parse out the portion after the dash
    handleMove(stackPath, stackChildren, fromIndex, toIndex);
  }
  
  return (
    <DndContext 
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <RenderTree tree={data} onMove={handleMove} />
      <DragOverlay>{/* Placeholder for overlay rendering */}</DragOverlay>
    </DndContext>
  );
};

export default Tree;
