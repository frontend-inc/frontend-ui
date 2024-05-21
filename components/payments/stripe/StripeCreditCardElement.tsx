import React from 'react'
import {
	Button,
  Stack,
  Box,
	Typography,
  useTheme,
} from '@mui/material'
import {
  CardElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js'
import { useAlerts } from '../../../hooks'
import { Icon, Label } from '../..'

type StripeCreditCardElementProps = {
  handleSubmit: (stripeToken: string, last4: string) => void
  handleCancel: () => void
}

const StripeCreditCardElement: React.FC<StripeCreditCardElementProps> = (props) => {

  const { handleSubmit, handleCancel } = props || {}
  const stripe = useStripe() 
  const elements = useElements()

	const { showAlertError } = useAlerts()

	const handleClick = async (e) => {
    e.preventDefault()
    if (!stripe || !elements) {
      return;
    }
    const cardElement = elements.getElement(CardElement);
    const res = await stripe.createToken(cardElement);
		if (res?.token) {
			const { id: stripeToken } = res.token
			const { last4 } = res.token.card
			handleSubmit(stripeToken, last4)
		} else {
			showAlertError('Please check your payment details')
		}
	}

	return (
		<Stack direction="column" spacing={2}>    
      <Box sx={ sx.cardElement }>
        <CardElement />
      </Box>
      <Stack direction="column" spacing={1}>    
      <Button
        color="primary"
        startIcon={<Icon name="CreditCard" color='primary.contrastText' />}
        onClick={handleClick}
        variant="contained"
      >
        Add Credit Card
      </Button>
      <Button
        color="secondary"        
        onClick={handleCancel}
        variant="contained"
      >
        Cancel
      </Button>
      </Stack>
      <Typography color="text.secondary" sx={ sx.caption } variant="caption">
        We support all major credit cards.
        <br />
        Secure SSL connection.
      </Typography>
		</Stack>
	)
}

export default StripeCreditCardElement

const sx = {
  cardElement: {
    px: 1,
    py: 2,
    boxShadow: 1,
    borderRadius: 1,
    '& .ElementsApp input': {
      fontSize: 24 
    }
  },
  caption: {
    textAlign: 'center'
  }
}