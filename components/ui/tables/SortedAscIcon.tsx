import React from 'react'
import { ExpandLess } from '@mui/icons-material'

const SortedAscendingIcon: React.FC = () => {
	return <ExpandLess sx={sx.sortIcon} />
}

export default SortedAscendingIcon

const sx = {
	sortIcon: {
		color: 'text.secondary',
	},
}
