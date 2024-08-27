import React from 'react'
import { Stack, Link } from '@mui/material'
import { Icon, Label, FieldWrapper } from '../../../components'

type FieldFileProps = {
	value?: any
	handleClick?: () => void
	label?: string
	rest?: any
	color?: string
}

const FieldFile: React.FC<FieldFileProps> = (props) => {
	const { value, label, color = 'text.secondary', handleClick, ...rest } = props
	return (
		<FieldWrapper label={label} color={color} {...rest}>
			<Stack direction="row" spacing={1}>
				<Icon name="File"  color="text.primary" />
				{value?.content_type && (
					<Link color={color} href={value?.url} sx={sx.link} target="_blank">
						{value?.content_type}
					</Link>
				)}
			</Stack>
		</FieldWrapper>
	)
}

export default FieldFile

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
