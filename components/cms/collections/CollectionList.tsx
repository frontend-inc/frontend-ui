import React from 'react'
import { Stack, Box } from '@mui/material'
import { CollectionCard } from '../..'

type CollectionListProps = {
	resources: any
	handleClick: (item: any) => void
	variant: 'list' | 'grid'
	style: 'card' | 'avatar' | 'cover' | 'chip'
	buttonText?: string
	enableBorder?: boolean
	enableGradient?: boolean
	enableEdit?: boolean
	enableCreate?: boolean
	enableDelete?: boolean
	handleEdit?: (item: any) => void
	handleDelete?: (item: any) => void
}

const CollectionList: React.FC<CollectionListProps> = (props) => {
	const {
		resources,
		handleClick,
		handleEdit,
		handleDelete,
		variant = 'grid',
		style = 'card',
		buttonText,
		enableBorder = false,
		enableGradient = false,
		enableEdit = false,
		enableCreate = false,
		enableDelete = false,
	} = props

	return (
		<Stack spacing={2}>
			<Box
				sx={{
					...sx.root,
					...(variant == 'grid' ? sx.grid : sx.list),
					...(style == 'chip' && sx.listDense),
				}}
			>
				{resources?.map((resource, index) => (
					<CollectionCard
						key={index}
						variant={variant}
						style={style}
						label={resource?.label}
						title={resource?.title}
						image={resource?.image?.url}
						video={resource?.video?.url}
						description={resource?.description}
						buttonText={buttonText}
						handleClick={() => handleClick(resource)}
						handleEdit={() => handleEdit(resource)}
						handleDelete={() => handleDelete(resource)}
						enableBorder={enableBorder}
						enableGradient={enableGradient}
						enableEdit={enableEdit}
						enableCreate={enableCreate}
						enableDelete={enableDelete}
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
		gap: '16px',
	},
	listDense: {
		gap: '8px',
	},
	grid: {
		display: 'grid',
		gridTemplateColumns: {
			md: '1fr 1fr 1fr',
			xs: '1fr',
		},
		gap: '16px',
	},
}
