import React from 'react'
import { Stack, CircularProgress } from '@mui/material'
import { useDelayedLoading } from '../../../hooks'

type LoaderProps = {
	loading?: boolean
	delay?: number
}

const Loader: React.FC<LoaderProps> = (props) => {
	const { loading } = props

  if(!loading) return null;
	return (
		<Stack direction="column" sx={ sx.root }>
			<CircularProgress 
        disableShrink
        color="primary" 
        size={40}
      />
		</Stack>
	)
}

export default Loader

const sx = {
	root: {
		height: 400,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
	}	
}
