import React, { useContext } from 'react'
import { Box, Container } from '@mui/material'
import { ThemeProvider, ThemeContext } from '../../context'

type ColumnProps = {
	children?: React.ReactNode
	bgcolor?: string
  py?: number | string
  gap?: number 
  cols?: number
	maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | null
}

const Column: React.FC<ColumnProps> = (props) => {
	const { children, cols=1, gap=0, py=4, bgcolor, maxWidth=false } = props
  const { theme } = useContext(ThemeContext)
	return (
    <ThemeProvider 
      muiTheme={ theme }
      bgcolor={ bgcolor }
    >
      <Box
				sx={{
          ...sx.box,
					bgcolor,
				}}
			>
        <Container
          sx={{
            ...sx.root,        
            gridTemplateColumns: { 
              sm: `repeat(${Number(cols)}, 1fr)`, 
              xs: '1fr'
            },
            gap,
            py,
            px: Number(py) > 0 ? 2 : `0px !important`,
            bgcolor,
          }}
          //@ts-ignore
          maxWidth={maxWidth}
        >
          {children}
        </Container>
      </Box>
    </ThemeProvider>
	)
}

export default Column

const sx = {  
	root: {    
		py: 4,
	},
  box: {
    p: 0,
    width: "100%"
  }
}
