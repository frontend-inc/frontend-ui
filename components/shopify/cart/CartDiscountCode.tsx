import React from 'react'
import { Icon } from '../../../components'
import { IconButton, Button, Stack, Box, Typography } from '@mui/material'
import { useCart } from 'frontend-shopify'
import { useLoaders } from '../../../hooks'

type CartDiscountCodeProps = {	
	discountCode: {
    code: string
    applicable: boolean
  }
  handleDelete?: () => void
}

const CartDiscountCode: React.FC<CartDiscountCodeProps> = (props) => {
	const { discountCode } = props

  const { cartRemoveDiscountCode } = useCart()
  const { loading, loadingWrapper } = useLoaders()

  const handleDelete = async () => {
    await loadingWrapper(() => cartRemoveDiscountCode(discountCode.code))      
  }
  

	return (
		<Box sx={{ 
      ...sx.root,
      ...(loading && sx.loading),
      ...(!discountCode?.applicable && sx.disabled)
    }}>
			<Typography variant="body1" sx={sx.label}>
				Discount code 
			</Typography>
      <Stack spacing={0.5} direction="row" sx={ sx.codeContent }>
        <Icon name="Tag" size={18} />
        <Typography variant="button" sx={ sx.discountCode }>        
          {discountCode.code}
        </Typography>
        <IconButton onClick={handleDelete} size="small">
          <Icon name="X" size={18} />
        </IconButton>
      </Stack>
		</Box>
	)
}

export default CartDiscountCode

const sx = {
	root: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '100%',
	},
	label: {
		color: 'text.secondary',
	},
	value: {
		textAlign: 'right',
	},
  codeContent: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
	discountCode: {
		cursor: 'pointer',
		color: 'text.secondary',
	},
  disabled: {
    opacity: 0.5
  },
  loading: {
    opacity: 0.5
  }
}
