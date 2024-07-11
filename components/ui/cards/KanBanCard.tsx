import React from 'react'
import { Box, Button, Stack, Typography } from '@mui/material'
import {
	Image,
	CommentButton,
	DisplayFields,
	FavoriteButton,
	AvgRating,
	UserChip,
} from '../../../components'
import { truncate } from '../../../helpers'
import { CardProps } from '../../../types'
import { Actions } from '../../../components'
import { useSortable } from '@dnd-kit/sortable'
import { buildActions } from '../../../helpers'

type KanBanCardProps = CardProps & {
	id: string
	loading?: boolean
	ref?: any
	attributes?: any
	listeners?: any
	enableDragging?: boolean
	handleComment: () => void
}

const KanBanCard: React.FC<KanBanCardProps> = (props) => {
	const {
		id,
		loading,
		actions,
		resource,
		displayFields = [],
		height = 200,
		textVariant = 'subtitle2',
		handleClick,
		objectFit = 'cover',
		enableDragging = false,
		enableGradient = false,
		enableOverlay = false,
		enableComments,
		enableFavorites,
		enableRatings,
		enableEdit,
		enableDelete,
		handleEdit,
		handleDelete,
		handleComment,
		enableUsers,
	} = props || {}

	const { attributes, listeners, setNodeRef } = useSortable({
		id: id,
	})

	const { title, image } = resource || {}

	return (
		<Stack
			direction="column"
			sx={{
				...sx.root,
				...(enableDragging && sx.rootDragging),
				...(loading && sx.rootLoading),
			}}
		>
			<Stack direction="column" ref={setNodeRef} {...attributes} {...listeners}>
				{image?.url && (
					<Box sx={sx.image}>
						<Image
							src={image?.url}
							height={height}
							objectFit={objectFit}
							alt={title}
							disableBorderRadius
							handleClick={handleClick}
							enableGradient={enableGradient}
							enableOverlay={enableOverlay}
						/>
					</Box>
				)}
				<Stack direction="row" alignItems="flex-start">
					<Stack direction="column" spacing={0.5} sx={sx.content}>
						<Typography
							sx={sx.title}
							color="text.primary"
							variant={textVariant}
						>
							{truncate(title)}
						</Typography>
						{enableRatings == true && (
							<AvgRating resource={resource} size="small" />
						)}
						<DisplayFields fields={displayFields} resource={resource} />
						{enableUsers && <UserChip user={resource?.user} />}
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
					{enableComments == true && <CommentButton resource={resource} />}
					{enableFavorites == true && (
						<FavoriteButton handle={resource?.handle} />
					)}
					<Actions
						numVisible={0}
						actions={buildActions({
							enableEdit,
							enableDelete,
							handleEdit,
							handleDelete,
							actions,
						})}
						resource={resource}
					/>
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
