import React, { useState, useEffect } from 'react'
import { ActionType, DisplayFieldType, TableHeaderType } from '../../../types'
import { flattenDocuments } from 'frontend-js'
import Sortable from './Sortable'
import { groupResourcesByField } from '../../../helpers/utils'

export type KanBanProps = {	
	resources: any
  fieldName: string
  headers: {
    label: string
    value: string 
  }[]
  actions: ActionType[]
  displayFields: DisplayFieldType[]
  handleDrop: (movedItem: any, overContainer: string, columns: any[]) => void
  handleClick: (resource: any) => void
  enableFavorites?: boolean
  enableRatings?: boolean
  enableEdit?: boolean
  enableDelete?: boolean
  handleEdit?: (resource: any) => void
  handleDelete?: (resource: any) => void
}

const KanBan: React.FC<KanBanProps> = (props) => {

	const {
    actions,
    headers,
    fieldName,
		resources,    
		handleClick,
    handleDrop,
    displayFields=[],
    enableFavorites,
    enableRatings,
    enableEdit,
    enableDelete,  
    handleEdit,
    handleDelete  
	} = props

  const [groupedResources, setGroupedResources] = useState({})
  
  const handleGroupResources = (resources, fieldName) => {
    let flattenedResources = flattenDocuments(resources)
    let allowedOptions = headers.map((header) => header.value)
    let grouped = groupResourcesByField(flattenedResources, fieldName, allowedOptions)      
    setGroupedResources(grouped)
  }
  
  useEffect(() => {
    if(resources?.length > 0 && fieldName){
      handleGroupResources(resources, fieldName)
    }
  }, [resources, fieldName, headers])
  
  if(Object.keys(groupedResources).length == 0) return null;
	return (
    <Sortable 
      actions={actions}
      headers={headers}
      columns={groupedResources}
      handleDrop={handleDrop}
      handleClick={handleClick}
      displayFields={displayFields}
      enableFavorites={enableFavorites}
      enableRatings={enableRatings}
      enableEdit={enableEdit}
      enableDelete={enableDelete}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
	)
}

export default KanBan
