import React, { useState } from 'react';
import { MultipleDragDrop } from './MultipleDragDrop'
import { createRange } from '../components'
import { UniqueIdentifier } from '@dnd-kit/core';
import { unstable_batchedUpdates } from 'react-dom';
import { Sortable } from './Sortable';
import { Typography } from '../../../components';
import { DraggableItem } from './DraggableItem';
import {
  deleteNode,
} from '../../../helpers'
import { TestimonialCard } from '../../../components'

type Items = Record<UniqueIdentifier, UniqueIdentifier[]>;

const CustomItem = (props: any) => {
  const { value, id, props: componentProps } = props;
  return (
    <div className="w-[200px] h-[64px] shadow-lg bg-white rounded-lg p-4 flex items-center justify-center">      
      <Typography variant="body1">
        Props: { componentProps.value }        
      </Typography>
    </div>
  )
}

const DragDrop = () => {

  const itemCount = 14 
  const [activeItem, setActiveItem] = useState<UniqueIdentifier | null>(null);
  const [items, setItems] = useState([
        {
          id: 'A',
          props: { 
            cols: 4,
            value: 'A' 
          },
          isDroppable: true,
          type: 'Flex',
          children: [     
            { id:'A1', 
              props: { value: 'A1' },
              children: [],
              isDroppable: false,
            }, 
            { 
              id: 'A2', 
              props: { value: 'A2' },
              children: [],
              isDroppable: false,
            }, 
            { 
              id: 'A3', 
              props: { value: 'A3' },
              children: [],
              isDroppable: false
            }, 
            { 
              id: 'A4', 
              props: {
                value: 'A4'
              },
              children: [],
             isDroppable: false          
            }
          ]
        },
        {
          id: 'B',
          isDroppable: true,
          type: 'Flex',
          props: { 
            value: 'B',
            cols: 2, 
          },
          children: [ 
            { id:'B1', 
              props: { value: 'B1' },
              children: [],
              isDroppable: false
            }, 
            { 
              id: 'B2', 
              props: { value: 'B2' },
              children: [],
              isDroppable: false
            }, 
            { 
              id: 'B3', 
              props: { value: 'B3' },
              children: [],
              isDroppable: false
            }, 
            { 
              id: 'B4', 
              props: {
                value: 'B4'
              },
              children: [],
              isDroppable: false          
            }
            ]
          },
          {
            id: 'C',
            isDroppable: true,
            type: 'Flex',
            props: { 
              value: 'C',
              cols: 6, 
            },
            children: [ 
              { id:'C1', 
                props: { value: 'C1' },
                children: [],
                isDroppable: false
              }, 
              { 
                id: 'C2', 
                props: { value: 'C2' },
                children: [],
                isDroppable: false
              }, 
              { 
                id: 'C3', 
                props: { value: 'C3' },
                children: [],
                isDroppable: false
              }, 
              { 
                id: 'C4', 
                props: {
                  value: 'C4'
                },
                children: [],
              isDroppable: false          
            }]
          },
          {
            id: 'D',
            type: 'Flex',
            isDroppable: true,
            props: { 
              value: 'D',
              cols: 8,  
            },
            children: [              
              {
                id: 'D1',
                type: 'Card',
                isDroppable: false,
                props: { value: 'D1' },
              },                  
              { 
                id: 'D2', 
                props: { value: 'D2' },
                children: [],
                isDroppable: false
              }, 
              { 
                id: 'D3', 
                props: { value: 'D3' },
                children: [],
                isDroppable: false
              }, 
              { 
                id: 'D4', 
                props: {
                  value: 'D4'
                },
                children: [],
              isDroppable: false          
            }]
          }    
        ]
    );
  
    function handleRemove(containerID: UniqueIdentifier) {
      let updatedItems = deleteNode({ id: containerID }, [ ...items ]);
      setItems(updatedItems)      
    }
    
    return(
      <div className="h-screen w-full border-2 border-pink-500">
      <MultipleDragDrop 
        activeItem={ activeItem }
        setActiveItem={ setActiveItem }
        items={ items }
        setItems={ setItems }
        handleRemove={ handleRemove }
      >
        <Sortable 
          items={ items }
          setItems={ setItems }
          activeItem={ activeItem }
          handleRemove={ handleRemove }     
          renderItem={ CustomItem }       
        />
        </MultipleDragDrop>    
      </div>    
    )
  }

  export { DragDrop }