import React from 'react'
import { Box, Button } from '@mui/material'
import { ExternalLink } from 'lucide-react'

type CellLinkProps = {
	value: string
	handleClick: () => void
}

const CellLink: React.FC<CellLinkProps> = (props) => {
	const { value, handleClick } = props
	return (
		<Box sx={sx.cell}>
			{value && (
				<Button
					size="small"
					variant="outlined"
					sx={sx.button}
					startIcon={<ExternalLink size={20} />}
					onClick={handleClick}
				>
					{value}
				</Button>
			)}
		</Box>
	)
}

export default CellLink

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
	icon: {
		height: 20,
		width: 20,
		color: 'icon',
	},
}
