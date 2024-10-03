import React, { useEffect, useState, useContext } from 'react'
import { Fade, Box } from '@mui/material'
import { muiTheme } from '../../theme'
import { AuthGuard } from '../../components'
import { SectionProps } from '../../types'
import { ThemeProvider, ThemeContext } from '../../context'


const Section: React.FC<SectionProps> = (props) => {
	const {
		enableTransitions = false,
		requireAuth = false,
		requirePaid = false,
		children,
		bgColor = '#ffffff',
		maxWidth,
		py = 6,
		px = 3,
	} = props

	const [width, setWidth] = useState<string | number>(
		muiTheme.breakpoints.values.md
	)

  const { theme: currentTheme } = useContext(ThemeContext)

	// Since breakpoints are modified to
	// to compensate for the extra width of the Editor
	// we need to adjust the width of the Section component manually
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
		<ThemeProvider muiTheme={currentTheme} bgcolor={bgColor}>
			<Fade in={true} timeout={1000}>
				<Box sx={sx.root}>
					<Box
						sx={{
							...sx.container,
							...(enableTransitions && sx.containerTransitions),
							py,
							px,
							maxWidth: width,
						}}
					>
						<AuthGuard requireAuth={requireAuth} requirePaid={requirePaid}>
							{children}
						</AuthGuard>
					</Box>
				</Box>
			</Fade>
		</ThemeProvider>
	)
}

export default Section

const sx = {
	root: {
		width: '100%',
		minHeight: '60px',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		bgcolor: 'background.default',
	},
	container: {
		width: '100%',
		overflowX: 'hidden',
	},
	containerTransitions: {
		transition: 'all 0.3s ease-in-out',
	},
	title: {
		width: '100%',
	},
}
