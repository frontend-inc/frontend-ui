'use client'

import React, { FC, useState, useCallback, forwardRef, HTMLAttributes, CSSProperties } from 'react';
import {
    DndContext,
    closestCenter,
    MouseSensor,
    TouchSensor,
    DragOverlay,
    useSensor,
    useSensors,
    DragStartEvent,
    DragEndEvent,
} from '@dnd-kit/core';
import { arrayMove, SortableContext, rectSortingStrategy } from '@dnd-kit/sortable';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

type SortableGridProps = {
    items: { id: string; position?: number }[];
    onDrop: (items: { id: string; position: number }[]) => void;
};

const SortableGrid: FC<SortableGridProps> = (props) => {
    const { items, onDrop } = props;
    const [activeId, setActiveId] = useState<string | null>(null);
    const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor));

    const handleDragStart = useCallback((event: DragStartEvent) => {
        setActiveId(event.active.id);
    }, []);

    const handleDragEnd = useCallback(
        (event: DragEndEvent) => {
            const { active, over } = event;

            if (active.id !== over?.id) {
                const oldIndex = items.findIndex((item) => item.id === active.id);
                const newIndex = items.findIndex((item) => item.id === over!.id);

                const newItems = arrayMove(items, oldIndex, newIndex).map((item, index) => ({
                    ...item,
                    position: index + 1, // Assign position starting from 1
                }));

                onDrop(newItems);
            }

            setActiveId(null);
        },
        [items, onDrop]
    );

    const handleDragCancel = useCallback(() => {
        setActiveId(null);
    }, []);

    return (
        <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            onDragCancel={handleDragCancel}
        >
            <SortableContext items={items.map((item) => item.id)} strategy={rectSortingStrategy}>
                <Grid columns={5}>
                    {items.map(({ id }) => (
                        <SortableItem key={id} id={id} />
                    ))}
                </Grid>
            </SortableContext>
            <DragOverlay adjustScale style={{ transformOrigin: '0 0 ' }}>
                {activeId ? <Item id={activeId} isDragging /> : null}
            </DragOverlay>
        </DndContext>
    );
};

// Grid Component
type GridProps = {
    columns: number;
};

const Grid: FC<GridProps> = ({ children, columns }) => {
    return (
        <div
            style={{
                display: 'grid',
                gridTemplateColumns: `repeat(${columns}, 1fr)`,
                gridGap: 10,
                maxWidth: '800px',
                margin: '100px auto',
            }}
        >
            {children}
        </div>
    );
};

// Item Component
export type ItemProps = HTMLAttributes<HTMLDivElement> & {
    id: string;
    withOpacity?: boolean;
    isDragging?: boolean;
};

const Item = forwardRef<HTMLDivElement, ItemProps>(({ id, withOpacity, isDragging, style, ...props }, ref) => {
    const inlineStyles: CSSProperties = {
        opacity: withOpacity ? '0.5' : '1',
        transformOrigin: '50% 50%',
        height: '140px',
        width: '140px',
        borderRadius: '10px',
        cursor: isDragging ? 'grabbing' : 'grab',
        backgroundColor: '#ffffff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: isDragging
            ? 'rgb(63 63 68 / 5%) 0px 2px 0px 2px, rgb(34 33 81 / 15%) 0px 2px 3px 2px'
            : 'rgb(63 63 68 / 5%) 0px 0px 0px 1px, rgb(34 33 81 / 15%) 0px 1px 3px 0px',
        transform: isDragging ? 'scale(1.05)' : 'scale(1)',
        ...style,
    };

    return (
        <div ref={ref} style={inlineStyles} {...props}>
            {id}
        </div>
    );
});

// SortableItem Component
const SortableItem: FC<ItemProps> = (props) => {
    const { isDragging, attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: props.id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition: transition || undefined,
    };

    return (
        <Item
            ref={setNodeRef}
            style={style}
            withOpacity={isDragging}
            {...props}
            {...attributes}
            {...listeners}
        />
    );
};

export default SortableGrid;
