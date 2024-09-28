import React, { useState } from 'react'
import { useCart } from 'frontend-shopify'
import { Button, Stack } from '@mui/material'
import { TextInput, IconLoading } from '../../../components'

const ShopifyCartDiscountCodeInput: React.FC = () => {
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
			<Stack direction="row" spacing={0} alignItems="center">
				<TextInput
					name="discountCode"
					value={discountCode}
					handleChange={handleChange}
					placeholder="Enter discount code"
					styles={sx.input}
				/>
				<Button
					onClick={handleSubmit}
					color="secondary"
					variant="contained"
					sx={sx.button}
					endIcon={
						loading && 
              <IconLoading color="secondary.contrastText" />
					}
				>
					Apply
				</Button>
			</Stack>
		</Stack>
	)
}

export default ShopifyCartDiscountCodeInput

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
			borderRadius: (theme) =>
				`${theme.shape.borderRadius}px 0 0 ${theme.shape.borderRadius}px`,
		},
	},
	button: {
		mt: '4px',
		height: 42,
		borderRadius: (theme) =>
			`0 ${theme.shape.borderRadius}px ${theme.shape.borderRadius}px 0`,
	},
}
