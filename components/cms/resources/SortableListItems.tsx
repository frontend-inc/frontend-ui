import React from 'react'
import { Stack } from '@mui/material'
import { SortableList, LoadMore } from '../..'
import { ResourceListItemsProps } from './ResourceListItems'

type SortableListItemsProps = ResourceListItemsProps & {
  droppableId: string
  handleDrop: (sorted: any[]) => void
  slots?: {
    list?: any
    pagination?: any
  }
}

const SortableListItems: React.FC<SortableListItemsProps> = (props) => {

  const {
    droppableId="sortable",
    resources,
    page,
    numPages,    
    handlePaginate,
    handleDrop,
    renderItem,
    slots={
      list: {},
      pagination: {}
    } 
  } = props || {}

  return(
    <Stack spacing={2}>
      <SortableList
        droppableId={droppableId}
        items={resources}
        handleDrop={handleDrop}
        renderItem={ renderItem }
        { ...slots.list }
      />
      <LoadMore 
        page={ page }
        numPages={ numPages }
        handlePaginate={() => handlePaginate(page + 1)}
        { ...slots.pagination }
      />
    </Stack>
  )
}            

export default SortableListItems
