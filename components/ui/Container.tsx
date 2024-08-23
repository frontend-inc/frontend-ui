import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import { muiTheme } from '../../theme'

type ContainerProps = {
	maxWidth?: 'sm' | 'md' | 'lg' | 'xl'
	children: React.ReactNode
}

const Container: React.FC<ContainerProps> = (props) => {
	const { children, maxWidth } = props

	const [width, setWidth] = useState<string | number>(
		muiTheme.breakpoints.values.md
	)

	useEffect(() => {
		switch (maxWidth) {
			case 'sm':
				setWidth(muiTheme.breakpoints.values.sm)
				break
			case 'md':
				setWidth(muiTheme.breakpoints.values.md)
				break
			default:
				setWidth('100%')
				break
		}
	}, [maxWidth])

	return (
		<Box sx={sx.root}>
			<Box
				sx={{
					...sx.container,
					maxWidth: width,
				}}
			>
				{children}
			</Box>
		</Box>
	)
}

export default Container

const sx = {
	root: {
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
	},
	container: {
		width: '100%',
		overflowX: 'hidden',
	},
}
