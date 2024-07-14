import React from 'react'
import { AlertModal } from '../..'
import { useForms } from '../../../hooks'
import { useList } from 'frontend-js'

const DeleteModal: React.FC = () => {

    const {
      openDelete,
      setOpenDelete,
    } = useList()

    const {
      handleDelete
    } = useForms()    

  return(
    <AlertModal
      open={openDelete}
      handleClose={() => setOpenDelete(false)}
      title="Are you sure you want to delete this item?"
      description="This action cannot be reversed."
      handleConfirm={handleDelete}
    />
  )
}

export default DeleteModal 