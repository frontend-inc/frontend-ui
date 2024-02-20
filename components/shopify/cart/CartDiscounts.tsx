import React, { useState } from 'react'
import { useCart } from 'frontend-shopify'
import { Button, Stack } from '@mui/material'
import { TextInput, IconLoader } from '../../../components'

const CartDiscountCodeInput: React.FC = () => {
	const [discountCode, setDiscountCode] = useState<string | null>(null)

	const {
		loading,
		cartApplyDiscountCode,
	} = useCart()

	const handleSubmit = async () => {
		if (discountCode?.length > 0) {
			await cartApplyDiscountCode(discountCode)
      setDiscountCode('')
		}
	}

	const handleChange = (e) => setDiscountCode(e.target.value)

	return (
		<Stack>
			<Stack direction="row" spacing={0} sx={sx.input}>
				<TextInput
					name="discountCode"
					value={discountCode}
					handleChange={handleChange}
					placeholder="Enter discount code"
				/>
				<Button
					size="small"
					onClick={handleSubmit}
					color="secondary"
					variant="contained"
					endIcon={<IconLoader color="secondary.contrastText" loading={loading} />}
				>
					Apply
				</Button>
			</Stack>
		</Stack>
	)
}

export default CartDiscountCodeInput

const sx = {
	input: {
		alignItems: 'center',
	},
	removeCodes: {
		display: 'flex',
		justifyContent: 'flex-start',
		width: '100%',
	},
	clearButton: {
		color: 'text.secondary',
	},
}
