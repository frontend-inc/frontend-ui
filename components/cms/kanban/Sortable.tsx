import React, {useState} from 'react';
import {
  closestCenter,
  DndContext, 
  DragOverlay,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core'
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable'
import { List, Typography, Stack } from '@mui/material'
import Droppable from './Droppable'
import { 
  ActionType, 
  DisplayFieldType 
} from '../../../types'
import { KanBanCard } from '../../../components'

type SortableProps = {
  headers: {
    label: string 
    value: string
  }[]
  actions: ActionType[]
  displayFields: DisplayFieldType[]
  handleClick: (resource: any) => void
  handleDrop: (movedItem: any, overContainer: string, columns: any[]) => void
  columns: Record<string,any>
  enableFavorites?: boolean
  enableRatings?: boolean
  enableEdit?: boolean
  enableDelete?: boolean
  handleEdit?: (resource: any) => void
  handleDelete?: (resource: any) => void
}

const Sortable: React.FC<SortableProps> = (props) => {
  
  const { 
    actions=[],
    headers=[],
    handleDrop,
    displayFields=[],
    columns: initialColumns = {},
    handleClick,
    enableFavorites,
    enableRatings,
    enableEdit,
    enableDelete,
    handleEdit,
    handleDelete,
  } = props 

  const [activeId, setActiveId] = useState(null);
  const [columns, setColumns] = useState(initialColumns);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const activeResource = activeId ? findResourceById(activeId) : null;

  if(headers.length === 0) return null;
  return (
    <DndContext 
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <Stack sx={sx.container} direction="row" spacing={1}>
        {headers?.map((header) => (
          <Stack sx={sx.column} key={header.value} direction="column" spacing={1}>
            <Typography variant="subtitle2" color='text.primary'>
              {header.label}
            </Typography>
            <SortableContext 
              key={header.value}
              items={columns[header.value]?.map(res => res.id)}
              strategy={verticalListSortingStrategy}
            >
              <List disablePadding>
                { columns[header.value].length > 0 ? 
                  columns[header.value]?.map(res => (
                  <KanBanCard 
                    key={res?.id} 
                    id={res?.id} 
                    resource={res}
                    actions={actions}
                    displayFields={displayFields}
                    handleClick={() => handleClick(res)}
                    enableFavorites={enableFavorites}
                    enableRatings={enableRatings}
                    enableEdit={enableEdit}
                    enableDelete={enableDelete}
                    handleEdit={handleEdit}
                    handleDelete={handleDelete}
                  />
                )):(
                  <Droppable 
                    id={header.value} 
                  />
                )}
              </List>
            </SortableContext>
          </Stack>
        ))}
      </Stack>
      <DragOverlay>
        {activeResource ? (
          <KanBanCard 
            enableDragging
            id={activeResource?.id} 
            resource={activeResource} 
            displayFields={displayFields}   
            actions={[]}                     
          /> 
        ): 
          null 
        }
      </DragOverlay>
    </DndContext>
  );
  
  function handleDragStart(event) {
    const {active} = event;
    setActiveId(active.id);
  }
  
  function handleDragEnd(event) {
    const { active, over } = event;

    if (over) {
      const activeContainer = findContainer(active.id);
      const overContainer = findContainer(over.id) || over.id; // Check for column id if over.id is not an item

      if (activeContainer && overContainer) {
        let newColumns;
        let movedItem;

        if (activeContainer === overContainer) {
          const items = columns[activeContainer];
          const oldIndex = items.findIndex(item => item.id === active.id);
          const newIndex = items.findIndex(item => item.id === over.id);

          newColumns = {
            ...columns,
            [activeContainer]: arrayMove(items, oldIndex, newIndex),
          };
          movedItem = items[oldIndex];
          
        } else {
          const activeItems = columns[activeContainer];
          const overItems = columns[overContainer] || []; // Handle empty columns
          const activeIndex = activeItems.findIndex(item => item.id === active.id);

          const newActiveItems = [...activeItems];
          const newOverItems = [...overItems];

          [movedItem] = newActiveItems.splice(activeIndex, 1);

          let insertIndex = 0;
          if (!String(over.id).startsWith('placeholder')) {
            const overIndex = overItems.findIndex(item => item.id === over.id);
            insertIndex = overIndex;
          }
          
          newOverItems.splice(insertIndex, 0, movedItem); // Insert at the dropped position

          newColumns = {
            ...columns,
            [activeContainer]: newActiveItems,
            [overContainer]: newOverItems,
          };
        }
        setColumns(newColumns);
        handleDrop(movedItem, overContainer, newColumns)
      }
    }
    setActiveId(null);
  }



  function findResourceById(id) {
    for (const column in columns) {
      const resource = columns[column].find(item => item.id === id);
      if (resource) {
        return resource;
      }
    }
    return null;
  }

  function findContainer(id) {
    return Object.keys(columns).find((key) => columns[key].some(item => item.id === id));
  }

}

export default Sortable;

const sx = {
  container: {
    px: 1,
    py: 2,
    width: '100%',
    overflowX: 'scroll'
  },
  column: {
    p: 1,
    borderRadius: 1,
    boxShadow: 2
  }
}
