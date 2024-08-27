import React from 'react'
import { 
  DataToolbarModal, 
  DataToolbarButtons,
  DataUpdateManyButton 
} from '../../../components'
import { useResourceContext } from 'frontend-js'
import { ResourceButtonType, ToolbarButtonType } from '../../../types'

type CollectionToolbarModalProps = {
  enableAddToList?: boolean
  toolbarButtons?: ToolbarButtonType[]
}

const CollectionToolbarModal: React.FC<CollectionToolbarModalProps> = (props) => {

  const { 
    enableAddToList,
    toolbarButtons=[]
  } = props || {}

  const { setOpenReferences } = useResourceContext()

  const handleAddReference = (selected: any) => {
    setOpenReferences(true)
  }

  const buttons: ResourceButtonType[] = []

  if(enableAddToList){
    buttons.push({
      label: 'Add to List',
      icon: 'ListPlus',
      color: 'secondary',
      variant: 'contained',
      onClick: handleAddReference
    })
  }

  return(
    <DataToolbarModal>
      <DataToolbarButtons 
        buttons={ buttons }
      />
      { toolbarButtons?.map((button, index) => (
        <DataUpdateManyButton 
          key={ index }
          buttonText={ button?.buttonText }
          fields={[
            {
              icon: button.icon,
              label: button.label,
              name: button.name,
              variant: button.variant 
            }
          ]}
        />
      ))}      
    </DataToolbarModal>
  )
}

export default CollectionToolbarModal