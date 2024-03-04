import React from 'react'
import { Box, Container, Typography } from '@mui/material'

type SectionProps = {
	children: React.ReactNode
  title?: string
  textAlign?: 'left' | 'center'
  bgcolor?: string
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | false
  py?: number
}  

const Section: React.FC<SectionProps> = (props) => {
	
  const { children, title, textAlign='left', bgcolor, maxWidth, py=4 } = props

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
      { title && (
        <Typography 
          sx={{ 
            ...sx.title,
            textAlign 
          }} 
          variant="h6" 
          color="textPrimary"
        >
          {title}
        </Typography>
      )}
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
  title: {
    width: "100%"
  }
}
