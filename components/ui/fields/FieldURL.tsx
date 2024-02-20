import React from 'react'
import { Button } from '@mui/material'
import { Link2 } from 'lucide-react'
import { FieldWrapper } from '../../../components'

type FieldURLProps = {
	value?: any
	handleClick?: () => void
	label?: string
	rest?: any
}

const FieldURL: React.FC<FieldURLProps> = (props) => {
	const { value, label, handleClick, ...rest } = props

	return (
		<FieldWrapper label={label} {...rest}>
			{value && (
				<Button
					size="small"
					color="primary"
					sx={sx.button}
					startIcon={<Link2 size={20} />}
					onClick={handleClick}
				>
					{value}
				</Button>
			)}
		</FieldWrapper>
	)
}

export default FieldURL

const sx = {
	button: {
		textTransform: 'none',
		fontFamily: (theme) => theme.typography.body2.fontFamily,
		letterSpacing: 0,
	},
	cell: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		p: '0.5rem',
	},
}
