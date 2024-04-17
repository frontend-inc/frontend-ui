import React from 'react'
import { Grid } from '@mui/material'
import { Card } from '../..'

type ImageViewProps = {
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
}

const ImageView: React.FC<ImageViewProps> = (props) => {
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
		component: Component = Card,
	} = props

	return (
		<Grid container spacing={2}>
			{items?.map((item, index) => (
				<Grid item xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
					<Component
						key={index}
            direction="row"
						image={item?.image?.url}
						editing={editing}
						buttonText={buttonText}
						handleClick={handleClick}
						width={520}
						height={200}
					/>
				</Grid>
			))}
		</Grid>
	)
}

export default ImageView
