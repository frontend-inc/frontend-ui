import React from 'react';
import { useDroppable } from '@dnd-kit/core';
import { Typography, Stack } from '@mui/material'
import { Icon } from '../../../components'

const Droppable = ({ id }) => {
  const { isOver, setNodeRef } = useDroppable({
    id,
  });

  return (
    <Stack 
      direction="row"
      spacing={1}
      sx={{
        ...sx.root,
        ...(isOver && sx.isOver)
      }}
      ref={setNodeRef}       
    >
    </Stack>
  );
};

export default Droppable;

const sx = {
  root: {
    borderRadius: 1,
    width: 320,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    p: 2,
    height: '100%'
  },
  isOver: {
    borderColor: 'primary.main'
  }
};
