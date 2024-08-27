import React from 'react'
import { 
  DataToolbarModal, 
  DataMultiselectButton,
  DataMultiselectUpdateButton 
} from '../../../components'
import { useResourceContext } from 'frontend-js'
import { MultiselectButtonType, ToolbarButtonType } from '../../../types'

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

  const buttons: MultiselectButtonType[] = []

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
      { buttons.map((button, index) =>  (
        <DataMultiselectButton 
          key={ index }
          button={ button }
        />
      ))}      
      { toolbarButtons?.map((button, index) => (
        <DataMultiselectUpdateButton 
          key={ index }
          icon={ button?.icon }
          buttonText={ button?.buttonText }
          fields={[
            {
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