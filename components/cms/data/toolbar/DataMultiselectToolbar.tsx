
import React from 'react'
import { 
  DataToolbarModal,
  DataMultiselectAddToListButton,
  DataMultiselectUpdateButton,
  DataMultiselectDeleteButton, 
} from '../../..'
import { MultiselectButtonType, ToolbarButtonType } from '../../../../types'

type DataMultiselectToolbarProps = {
  buttons: MultiselectButtonType[]
  toolbarButtons?: ToolbarButtonType[]
}

const DataMultiselectToolbar: React.FC<DataMultiselectToolbarProps> = (props) => {

  const { 
    buttons=[],
    toolbarButtons=[] 
  } = props || {}
  
  return(
    <DataToolbarModal>
      <DataMultiselectAddToListButton />
      <DataMultiselectDeleteButton />
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

export default DataMultiselectToolbar