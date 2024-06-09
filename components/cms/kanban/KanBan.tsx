import React, { useState, useEffect } from 'react'
import { CollectionListProps } from '../../../components/cms/collections/CollectionList'
import { TableHeaderType } from '../../../types'
import { 
  Stack, 
  Box 
} from '@mui/material'
import { Card } from '../../../components'
import { flattenDocuments } from 'frontend-js'

export type KanBanProps = CollectionListProps & {	
	resources: any
  fieldName: string
  headers: TableHeaderType[]
  handleDrop: (resource: any) => void
  handleClick: () => void
}

const KanBan: React.FC<KanBanProps> = (props) => {
	
  const KANBAN_HEADERS = [
    { label: "To Do", value: "todo" },
    { label: "Doing", value: "doing" },
    { label: "Done", value: "done" },
  ]

	const {
		resources,
		handleClick,
    handleDrop,
    displayFields=[],
    ...rest
	} = props

  const headers = KANBAN_HEADERS;
  const fieldName="status";

  const [groupedResources, setGroupedResources] = useState({})

  const groupBy = (resources, name) => {
    const grouped = {}
    resources.forEach((item) => {
      if (!item) return
      let groupBy = item[name]
      if(!groupBy){
        groupBy = headers[0].value
      }

      if (!grouped[groupBy]) {
        grouped[groupBy] = []
      }

      grouped[groupBy].push(item)
    })    
    return grouped
  }

  useEffect(() => {
    if(resources && headers && fieldName){
      let grouped = groupBy(flattenDocuments(resources), fieldName)      
      setGroupedResources(grouped)
    }
  }, [resources, headers, fieldName])
  
  if(!groupedResources) return null;
	return (
    <Stack direction="row" spacing={1}>
      { Object.keys(groupedResources)?.map((key) => (
        <Stack 
          key={ key }
          direction="column" 
          spacing={1}
          sx={ sx.column }
        >
          { groupedResources[key]?.map((resource) => (
            <Card 
              key={resource.id}
              enableBorder
              resource={resource}          
              displayFields={displayFields}
              actions={[]}
              handleClick={handleClick}          
              variant="grid"
            />
          ))}
        </Stack>
      ))}
    </Stack>
	)
}

export default KanBan

const sx = {
  board: {
    width: "100%",
    overflowX: "scroll",    
    '&::-webkit-scrollbar': {
      display: 'none'
    }
  },
  column: {
    width: 320,
    height: "100%",
    overflowY: "scroll",
    overflowX: "hidden",
    '&::-webkit-scrollbar': {
      display: 'none'
    }
  }
}