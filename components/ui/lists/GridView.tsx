import React from 'react'
import { Box, Grid } from '@mui/material'
import { CardVert } from '../../../components'

type GridViewProps = {
	loading?: boolean
	items: any[]
	editing?: boolean
	buttonText?: string
	handleClick?: (item: any) => void
	component?: any
	xs?: number
	sm?: number
	md?: number
	lg?: number
	xl?: number
	enableBorder?: boolean
	enableGradient?: boolean
	enableOverlay?: boolean
}

const GridView: React.FC<GridViewProps> = (props) => {
	const {
		items,
		editing,
		buttonText,
		handleClick,
		xs = 12,
		sm = 6,
		md = 4,
		lg = 4,
		xl = 4,
		component: Component = CardVert,
		enableBorder = false,
		enableGradient = false,
		enableOverlay = false,
	} = props

	return (
		<Grid container spacing={0}> 
			{items?.map((item, index) => (
				<Grid item xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
          <Box sx={ sx.item } key={item?.id}>
            <Component
              key={index}
              title={item?.title}
              description={item?.description}
              image={item?.image?.url}
              video={item?.video?.url}
              editing={editing}
              buttonText={buttonText}
              handleClick={() => handleClick(item)}
              enableBorder={enableBorder}
              enableGradient={enableGradient}
              enableOverlay={enableOverlay}
            />
          </Box>
				</Grid>
			))}
		</Grid>
	)
}

export default GridView

const sx = {
  item: {
    p: 0.5
  }
}