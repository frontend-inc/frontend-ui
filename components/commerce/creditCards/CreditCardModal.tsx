import React, { useContext } from 'react'
import { AppContext } from '../../../context'
import { Box } from '@mui/material'
import { 
  Modal, 
  CreditCards  
} from '../../../components'

const CreditCardModal = () => {

  const { creditCardOpen, setCreditCardOpen } = useContext(AppContext) as any 

  return (
    <Modal
      title="Payment Methods"
      open={creditCardOpen}
      handleClose={() => setCreditCardOpen(false)}
    >
      <CreditCards />
    </Modal>
  )
}

export default CreditCardModal
