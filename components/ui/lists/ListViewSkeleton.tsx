import React from 'react'
import { Skeleton, ListItem, ListItemIcon, ListItemText } from '@mui/material'

const ListViewSkeleton = ({ ...props }) => {
	return (
		<ListItem disableGutters>
			<ListItemIcon>
				<Skeleton
					variant="rectangular"
					width={100}
					height={100}
					sx={sx.skeletonImage}
				/>
			</ListItemIcon>
			<ListItemText
				primary={<Skeleton height={20} width={120} />}
				secondary={<Skeleton height={20} width={180} />}
			/>
		</ListItem>
	)
}

export default ListViewSkeleton

const sx = {
	skeletonImage: {
		marginRight: '10px',
	},
}
