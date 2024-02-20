import React from 'react'
import { Button, ButtonGroup } from '@mui/material'
import { Plus, Minus } from 'lucide-react'

type QuantitySelectorProps = {
	quantity: number
	size?: 'small' | 'medium' | 'large'
	handleAddQuantity: () => void
	handleRemoveQuantity: () => void
}

const QuantitySelector: React.FC<QuantitySelectorProps> = (props) => {
	const { size, quantity, handleAddQuantity, handleRemoveQuantity } =
		props || {}

	return (
		<ButtonGroup
			sx={{
				...sx.buttonGroup,
				...(size == 'small' && sx.buttonGroupSmall),
			}}
		>
			<Button sx={sx.button} onClick={handleRemoveQuantity}>
				<Minus size={size == 'large' ? 24 : 16} />
			</Button>
			<Button sx={sx.button}>{quantity}</Button>
			<Button sx={sx.button} onClick={handleAddQuantity}>
				<Plus size={size == 'large' ? 24 : 16} />
			</Button>
		</ButtonGroup>
	)
}

export default QuantitySelector

const sx = {
	buttonGroup: {
		bgcolor: 'tertiary.main',
	},
	buttonGroupSmall: {
		height: '40px',
		'& .MuiButton-root': {
			minWidth: '30px',
		},
	},
	button: {
		px: 0,
		width: '100%',
		color: 'text.primary',
		border: 'none',
		'&:hover': {
			border: 'none',
		},
	},
}
