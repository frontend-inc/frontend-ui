import React from 'react'
import { ExpandMore } from '@mui/icons-material'

const SortedDescIcon: React.FC = () => {
	return <ExpandMore sx={sx.sortIcon} />
}

export default SortedDescIcon

const sx = {
	sortIcon: {
		color: 'text.secondary',
	},
}
