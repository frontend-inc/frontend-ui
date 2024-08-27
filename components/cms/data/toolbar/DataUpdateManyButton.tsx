import React, { useState } from 'react'
import { Box, Button } from '@mui/material'
import { FormFields, Modal } from '../../..'
import { useResourceContext } from 'frontend-js'
import { FormFieldType } from '../../../../types'

type DataUpdateManyProps = {
  buttonText?: string
  fields: FormFieldType[] 
}

const DataUpdateMany: React.FC<DataUpdateManyProps> = (props) => {

  const {
    buttonText='Update',
    fields=[] 
  } = props || {}

  const [open, setOpen] = useState(false)
  const handleClose = () => setOpen(false)

  const { 
    loading,
    errors,
    selectedIds,
    resource,
    handleChange,
    updateMany,
    reloadMany 
  } = useResourceContext()

  const handleSubmit = async () => {
    await updateMany(selectedIds, resource)
    await reloadMany()
    handleClose()
  }

  const handleRemove = () => null;

  return(
    <>
      <Button
        variant='contained'
        color='secondary'
        onClick={() => setOpen(true) }
      >
        { buttonText }
      </Button>
      <Modal 
        open={ open }
        handleClose={ handleClose }
        title="Update"
        loading={ loading }
      >
        <Box py={2}>
          <FormFields 
            errors={ errors }
            fields={ fields }
            resource={ resource }
            handleChange={ handleChange }
            buttonText="Update All"
            handleRemove={ handleRemove }
            handleSubmit={ handleSubmit }
          />
        </Box>
      </Modal>
    </>
  )
}

export default DataUpdateMany