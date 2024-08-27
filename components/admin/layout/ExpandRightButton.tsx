import React, { useContext } from 'react'
import { AdminContext } from '../../../context'
import { IconButton } from '@mui/material'
import { Icon } from '../../../components'

const ExpandRightButton: React.FC = () => {
	const { toggleLayoutRight } = useContext(AdminContext)

	return (
		<IconButton onClick={toggleLayoutRight} sx={sx.button}>
			<Icon name="Menu" />
		</IconButton>
	)
}

export default ExpandRightButton

const sx = {
	button: {
		minWidth: '32px',
	},
}
