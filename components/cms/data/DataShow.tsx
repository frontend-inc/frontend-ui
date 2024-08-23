import React, { useEffect } from 'react' 
import { ResourceDetails } from '../../../components'
import { useResourceContext } from 'frontend-js'

export type DataShowProps = {
  open: boolean
  handleClose: () => void
  loading: boolean
  errors: any
  resource: any
  enableEdit?: boolean
  enableDelete?: boolean
  handleEdit?: () => void
  handleDelete?: () => void
  fields: any[]
}

const DataShow: React.FC<DataShowProps> = (props) => {

  const { 
    findOne,
    openShow, 
    setOpenShow, 
    resource 
  } = useResourceContext()

  const { 
    loading,
    enableEdit,
    enableDelete,
    handleEdit,
    handleDelete,    
    fields=[],     
  } = props || {}

  useEffect(() => {
    if(openShow){
      findOne(resource?.handle)
    }
  }, [openShow])

  return (    
    <ResourceDetails
      loading={loading}
      open={ openShow }
      handleClose={() => setOpenShow(false) }
      label={ resource?.label }
      image={ resource?.image?.url }
      primary={ resource?.title }
      secondary={ resource?.description }        
      enableEdit={ enableEdit }
      enableDelete={ enableDelete }
      handleEdit={ handleEdit }
      handleDelete={ handleDelete }
      resource={ resource }
      fields={ fields }
    />
  )
}

export default DataShow