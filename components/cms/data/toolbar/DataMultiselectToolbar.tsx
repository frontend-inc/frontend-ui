
import React from 'react'
import { 
  DataToolbarModal,
  DataMultiselectButton,
  DataMultiselectUpdateButton, 
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
      { buttons?.map((button, index) => 
        <DataMultiselectButton 
          key={ index }
          button={ button }
        />
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

export default DataMultiselectToolbar