import React from 'react'
import { Box, Container } from '@mui/material'

type SectionProps = {
	children: React.ReactNode
  bgcolor?: string
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | false
  py?: number
}  

const Section: React.FC<SectionProps> = (props) => {
	
  const { children, bgcolor, maxWidth, py=4 } = props

	return (
		<Box 
      sx={{
        bgcolor,
        ...sx.root,          
      }}
    >
    <Container 
      disableGutters={ !maxWidth }
      maxWidth={maxWidth || false}
      sx={{
        py,
        px: py > 0 ? 2 : 0,
      }}
    >
      { children }
    </Container>
  </Box>
	)
}

export default Section

const sx = {
  root: {
		width: '100%',
		overflowX: 'scroll',
		'&::-webkit-scrollbar': {
			display: 'none',
		},
	},  
}
