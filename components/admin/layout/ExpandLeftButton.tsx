import React, { useContext } from 'react'
import { AdminContext } from '../../../context'
import { IconButton } from '@mui/material'
import { Icon } from '../../../components'

const ExpandLeftButton: React.FC = () => {
	const { toggleLayoutLeft } = useContext(AdminContext)

	return (
		<IconButton onClick={toggleLayoutLeft} sx={sx.button}>
			<Icon name={'Menu'} color='text.secondary' />
		</IconButton>
	)
}

export default ExpandLeftButton

const sx = {
	button: {
		minWidth: '32px',
	},
}
