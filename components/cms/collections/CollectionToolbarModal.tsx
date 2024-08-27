import React from 'react'
import { 
  DataToolbarModal, 
  DataMultiselectButton,
  DataMultiselectUpdateButton,
  DataMultiselectAddToListButton,
  DataMultiselectDeleteButton 
} from '../../../components'
import { ToolbarButtonType } from '../../../types'

type CollectionToolbarModalProps = {
  enableDelete?: boolean
  enableAddToList?: boolean
  toolbarButtons?: ToolbarButtonType[]
}

const CollectionToolbarModal: React.FC<CollectionToolbarModalProps> = (props) => {

  const { 
    enableDelete,
    enableAddToList,
    toolbarButtons=[]
  } = props || {}

  return(
    <DataToolbarModal>
      { enableAddToList && (
        <DataMultiselectAddToListButton
          query={{
            current_user: true
          }}
        />
      )}
      { enableDelete && (
        <DataMultiselectDeleteButton />
      )}
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