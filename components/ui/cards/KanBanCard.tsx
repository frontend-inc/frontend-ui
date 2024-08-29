import React from 'react'
import { Box, Button, Stack, Typography } from '@mui/material'
import { Image } from '../../../components'
import { useSortable } from '@dnd-kit/sortable'
import { CardProps } from './Card'

type KanBanCardProps = CardProps & {
	loading?: boolean
	id: string
	enableDragging?: boolean
}

const KanBanCard: React.FC<KanBanCardProps> = (props) => {
	const {
		id,
		loading,
		label,
		primary,
		secondary,
		secondaryAction,
		handleClick,
		image,
    actions, // Todo: rendering actions inteferes with drag/drop 
		enableDragging,
		height = 240,
		slots = {
			item: {},
			image: {},
		},
	} = props || {}

	const { attributes, listeners, setNodeRef } = useSortable({
		id: id,
	})

	return (
		<Stack
			direction="column"
			sx={{
				...sx.root,
				...(loading && sx.rootLoading),
				...(enableDragging && sx.rootDragging),
			}}
			{...slots.item}
		>
			<Stack direction="column" ref={setNodeRef} {...attributes} {...listeners}>
				{image && (
					<Box sx={sx.image}>
						<Image
							label={label}
							src={image}
							height={height}
							alt={primary}
							handleClick={handleClick}
							{...slots.image}
						/>
					</Box>
				)}
				<Stack direction="row" alignItems="flex-start">
					<Stack direction="column" spacing={0.5} sx={sx.content}>
						<Typography sx={sx.title} color="text.primary" variant="subtitle1">
							{primary}
						</Typography>
						<Typography color="text.secondary" variant="body2">
							{secondary}
						</Typography>   
					</Stack>
				</Stack>
			</Stack>
			<Box sx={sx.footer}>				            
        <Button
          onClick={handleClick}
          size="small"
          variant="contained"
          color="secondary"
          sx={sx.button}
        >
          Details
        </Button>
				<Stack direction="row" alignItems="flex-end">          
					{secondaryAction}
				</Stack>
			</Box>
		</Stack>
	)
}

export default KanBanCard

const sx = {
	root: {
		p: 0,
		my: 1,
		width: 260,
		cursor: 'pointer',
		borderRadius: 1,
		border: '1px solid',
		borderColor: 'divider',
		bgcolor: 'background.default',
		transition: 'box-shadow 0.3s',
		overflow: 'hidden',
		'&:hover': {
			boxShadow: 2,
		},
	},
	rootDragging: {
		boxShadow: 2,
		transform: 'rotate(3deg)',
	},
	rootLoading: {
		opacity: 0.5,
	},
	dragHandle: {
		width: 32,
		minWidth: 32,
		height: '100%',
		display: 'flex',
		alignItems: 'flex-start',
		justifyContent: 'center',
		py: 1,
		cursor: 'grab',
		'&:active': {
			cursor: 'grabbing',
		},
	},
	button: {
		textTransform: 'uppercase',
	},
	image: {
		overflow: 'hidden',
		borderRadius: (theme) => `${theme.spacing(1)}px ${theme.spacing(1)}px 0 0`,
		width: '100%',
	},
	content: {
		width: '100%',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		height: '100%',
		p: 1,
	},
	header: {
		ml: 1,
		borderBottom: '1px solid',
		borderColor: 'divider',
	},
	title: {
		width: '100%',
	},
	description: {
		maxWidth: '240px',
	},
	footer: {
		width: '100%',
		display: 'flex',
		justifyContent: 'space-between',
		px: 1,
		pb: 1,
	},
}
