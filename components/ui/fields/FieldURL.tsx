import React from 'react'
import { Link } from '@mui/material'
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
				<Link href={value} sx={sx.link}>
					{value}
				</Link>
			)}
		</FieldWrapper>
	)
}

export default FieldURL

const sx = {
	link: {
		color: 'text.secondary',
		textDecoration: 'none',
		'&:hover': {
			color: 'text.primary',
			textDecoration: 'underline',
		},
	},
	cell: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		p: '0.5rem',
	},
}
