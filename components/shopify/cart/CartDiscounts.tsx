import React, { useState } from 'react'
import { useCart } from 'frontend-shopify'
import { Button, Stack } from '@mui/material'
import { TextInput, IconLoader } from '../../../components'

const CartDiscountCodeInput: React.FC = () => {
	const [discountCode, setDiscountCode] = useState<string | null>(null)

	const { loading, cartApplyDiscountCode } = useCart()

	const handleSubmit = async () => {
		if (discountCode && discountCode != '') {
			await cartApplyDiscountCode(discountCode)
			setDiscountCode('')
		}
	}

	const handleChange = (e) => setDiscountCode(e.target.value)

	return (
		<Stack>
			<Stack direction="row" spacing={0}>
				<TextInput
					name="discountCode"
					value={discountCode}
					handleChange={handleChange}
					placeholder="Enter discount code"
          styles={ sx.input }
				/>
				<Button					
					onClick={handleSubmit}
					color="secondary"
					variant="contained"
          sx={ sx.button }
					endIcon={
						<IconLoader color="secondary.contrastText" loading={loading} />
					}
				>
					Apply
				</Button>
			</Stack>
		</Stack>
	)
}

export default CartDiscountCodeInput

const sx = {
	removeCodes: {
		display: 'flex',
		justifyContent: 'flex-start',
		width: '100%',
	},
	clearButton: {
		color: 'text.secondary',
	},
  input: {
    '& .MuiInputBase-input': {
      borderRadius: theme => `${theme.shape.borderRadius}px 0 0 ${theme.shape.borderRadius}px`,
    }
  },
  button: {    
    fontSize: 13,
    borderRadius: theme => `0 ${theme.shape.borderRadius}px ${theme.shape.borderRadius}px 0`,
  }
}
