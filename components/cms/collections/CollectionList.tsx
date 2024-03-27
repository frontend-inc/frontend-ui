import React from 'react'
import { Stack, Box } from '@mui/material'
import { CollectionCard } from '../..'

type CollectionListProps = {
	resources: any
	handleClick: (item: any) => void
	layout: 'list' | 'grid'
	style: 'card' | 'avatar' | 'cover'
	buttonText?: string
	enableBorder?: boolean
	enableGradient?: boolean
}

const CollectionList: React.FC<CollectionListProps> = (props) => {
	const {
		resources,
		handleClick,
		layout = 'grid',
		style = 'card',
		buttonText,
		enableBorder = false,
		enableGradient = false,
	} = props

	return (
		<Stack spacing={2}>
			<Box
				sx={{
					...sx.root,
					...(layout == 'grid' ? sx.grid : sx.list),
				}}
			>
				{resources?.map((resource, index) => (
					<CollectionCard
						key={index}
						layout={layout}
						style={style}
						title={resource?.title}
						image={resource?.image?.url}
						video={resource?.video?.url}
						description={resource?.description}
						buttonText={buttonText}
						handleClick={() => handleClick(resource)}
						enableBorder={enableBorder}
						enableGradient={enableGradient}
					/>
				))}
			</Box>
		</Stack>
	)
}

export default CollectionList

const sx = {
	root: {
		width: '100%',
	},
	list: {
		display: 'flex',
		flexDirection: 'column',
		gap: '24px',
	},
	grid: {
		display: 'grid',
		gridTemplateColumns: {
			md: '1fr 1fr 1fr',
			xs: '1fr',
		},
		gap: '24px',
	},
}
