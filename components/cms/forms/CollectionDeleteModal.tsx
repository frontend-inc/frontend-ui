import React from 'react'
import { AlertModal } from '../../../components'
import { useForms } from '../../../hooks'
import { useCollection } from 'frontend-js'

const CollectionDeleteModal: React.FC = () => {

    const {
      openDelete,
      setOpenDelete,
    } = useCollection()

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

export default CollectionDeleteModal 