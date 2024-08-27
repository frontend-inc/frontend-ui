
import React from 'react'
import { 
  DataToolbarModal,
  DataToolbarButtons 
} from '../../../components'
import { ResourceButtonType } from '../../../types'

type DataSelectedToolbarProps = {
  buttons: ResourceButtonType[]
}

const DataSelectedToolbar: React.FC<DataSelectedToolbarProps> = (props) => {

  const { buttons=[] } = props || {}
  
  return(
    <DataToolbarModal>
      <DataToolbarButtons 
        buttons={ buttons }
      />
    </DataToolbarModal>
  )
}

export default DataSelectedToolbar