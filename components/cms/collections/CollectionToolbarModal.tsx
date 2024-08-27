import React from 'react'
import { 
  DataToolbarModal, 
  DataToolbarButtons 
} from '../../../components'
import { useResourceContext } from 'frontend-js'
import { ResourceButtonType } from '../../../types'

const CollectionToolbarModal: React.FC = () => {

  const { setOpenReferences } = useResourceContext()

  const handleAddReference = (selected: any) => {
    setOpenReferences(true)
  }

  const buttons: ResourceButtonType[] = [
    {
      label: 'Add to List',
      icon: 'ListPlus',
      color: 'secondary',
      variant: 'contained',
      onClick: handleAddReference
    }
  ]  

  return(
    <DataToolbarModal>
      <DataToolbarButtons 
        buttons={ buttons }
      />
    </DataToolbarModal>
  )
}

export default CollectionToolbarModal