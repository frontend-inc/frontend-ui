import React from 'react'
import { Stack, Box } from '@mui/material'
import { CollectionCard } from '../..'
import { ActionType } from '../../../../types'
import { buildActions } from '../../../helpers'

type CollectionListProps = {
	resources: any
  actions: ActionType[]
	variant: 'list' | 'grid'
	style: 'card' | 'avatar' | 'cover' | 'chip'
	buttonText?: string
	enableBorder?: boolean
	enableGradient?: boolean
  enableOverlay?: boolean
	enableEdit: boolean
	enableCreate: boolean
	enableDelete: boolean
  handleClick: (item: any) => void
	handleEdit: (item: any) => void
	handleDelete: (item: any) => void
}

const CollectionList: React.FC<CollectionListProps> = (props) => {
	const {
		resources,
    actions,
		handleClick,
		handleEdit,
		handleDelete,
		variant = 'grid',
		style = 'card',
		buttonText,
		enableBorder = false,
		enableGradient = false,
    enableOverlay = false,
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
            item={resource}
						buttonText={buttonText}
            handleClick={() => handleClick(resource)}
            actions={ buildActions({
              enableEdit,
              enableDelete,
              handleEdit: () => handleEdit(resource),
              handleDelete: () => handleDelete(resource), 
              actions          
            })}
						enableBorder={enableBorder}
						enableGradient={enableGradient}
            enableOverlay={enableOverlay}
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
