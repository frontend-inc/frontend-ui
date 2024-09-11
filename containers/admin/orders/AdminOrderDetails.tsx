import React, { useEffect } from 'react'
import { Button, Paper, Box, Stack, Typography } from '@mui/material'
import { Icon, UserChip, Label, PrimaryButton } from '../../../components'
import { OrderType } from '../../../types'
import copy from 'copy-to-clipboard'
import { useAlerts } from '../../../hooks'

type AdminOrderDetailsProps = {
  loading?: boolean
  order: OrderType
  handleEdit: () => void
}


const AdminOrderDetails: React.FC<AdminOrderDetailsProps> = (props) => {
  const { order, handleEdit, loading } = props || {}

  const { showAlertSuccess, showAlertError } = useAlerts()

  const handleCopyEmail = () => {
    if(order.customer_email){
      copy(order.customer_email)
      showAlertSuccess("Email copied to clipboard")
    }else{
      showAlertError("No email to copy")
    }
  }

  return(
      <Box sx={{ ...sx.grid, ...(loading && sx.loading) }}>
        <Stack spacing={1} direction='row'>
          <Typography variant="subtitle1" color="text.primary">
            Order {order.display_number}
          </Typography>
          <Label label={ order?.status } />
        </Stack>        
        <Box sx={ sx.actions }>
          <PrimaryButton 
            onClick={ handleEdit }
          >
            Edit 
          </PrimaryButton>
        </Box>
        <Paper sx={ sx.paper }>
          <Stack direction="column" spacing={0}>    
            <Box sx={ sx.user }>
              <UserChip 
                user={ order?.user } 
                size={44}
                enableUsername 
                enableEmail 
              />
            </Box>  
            <Box>
              <Button 
                startIcon={
                  <Icon name="Mail" size={20} />
                }
                sx={ sx.emailButton } onClick={ handleCopyEmail }>
                {order.customer_name}
              </Button>
            </Box>    
            <Typography variant="overline" color="text.secondary" sx={ sx.address }>{order.shipping_address}</Typography>      
          </Stack>
        </Paper>
        <Paper sx={ sx.paper }>
          <Stack direction="column" spacing={0}>          
            <Typography variant="overline" color="text.secondary">Subtotal: {order.display_subtotal}</Typography>
            <Typography variant="overline" color="text.secondary">Taxes: {order.total_amount}</Typography>
            <Typography variant="overline" color="text.secondary">Discounts: {order.discount_amount}</Typography>
            <Typography variant="overline" color="text.secondary">Shipping: {order.shipping_amount}</Typography>
            <Typography variant="overline" color="text.secondary">Total: {order.display_total}</Typography>
          </Stack>
        </Paper>
      </Box>
  )
}

export default AdminOrderDetails

const sx = {
  root: {
    width: '100%',
    padding: 2,    
  },
  loading: {
    opacity: 0.5,
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '16px',        
  },
  paper: {
    p: 2
  },
  actions: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  user: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    pb: 1,
    borderBottom: '1px solid',
    borderColor: 'divider'
  },
  emailButton: {
    mt: 1,
    p: '2px',
    color: 'text.primary'
  },
  address: {
    whiteSpace: 'pre-line'
  }
}