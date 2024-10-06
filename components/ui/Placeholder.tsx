import React from 'react'
import { Stack, Box, Typography } from '../../tailwind'
import { Icon } from '../../components'

type PlaceholderProps = {
	icon?: string
	title?: string
	description?: string
	buttons?: any
	color?: string
}

const Placeholder: React.FC<PlaceholderProps> = (props) => {
	const {
		icon,
		title,
		description,
		buttons,
		color = 'text.secondary',
	} = props

	return (
		<Box
      className='w-full p-4 flex flex-col justify-center items-center'			
		>
			<Stack spacing={1} alignItems="center">
				{icon && <Icon name={icon} size={24} color={color} />}
				<Typography variant="subtitle2" color="text.primary">
					{title}
				</Typography>
				<Typography variant="body1" color="text.secondary">
					{description}
				</Typography>
				{buttons && <Stack direction="row" spacing={1}>{buttons}</Stack>}
			</Stack>
		</Box>
	)
}
export default Placeholder
