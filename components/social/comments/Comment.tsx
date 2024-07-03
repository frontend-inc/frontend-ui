import React, { useEffect, useState } from 'react'
import {
	Box,
	Link,
	IconButton,
	Collapse,
	ListItem,
	ListItemIcon,
	ListItemText,
	Typography,
} from '@mui/material'
import { UserAvatar } from '../../../components'
import { useComments } from '../../../hooks'
import { Icon } from '../../../components'
import moment from 'moment'
import CommentForm from './CommentForm'

type CommentProps = {
	url: string
	handle: string
	comment: any
	reply?: boolean
	user?: any
	level?: number
	enableReply?: boolean
	handleDelete?: (comment: any) => void
}

const Comment: React.FC<CommentProps> = (props) => {
	const { url, handle, level = 0, comment: parentComment, handleDelete } = props

	const [openComment, setOpenComment] = useState(false)
	const [showReplies, setShowReplies] = useState(false)

	const handleShowReplies = () => {
		setShowReplies(!showReplies)
	}

	const {
		loading,
		delayedLoading,
		errors,
		comment,
		setComment,
		handleChange,
		createComment,
	} = useComments({
		url,
		handle,
	})

	const handleReply = () => {
		setOpenComment(!openComment)
	}

	const handleSubmit = async () => {
		const newComment = await createComment(comment)
		if (newComment?.id) {
			parentComment.replies.push(newComment)
			setShowReplies(true)
			setOpenComment(false)
		}
	}

	useEffect(() => {
		setComment({
			parent_id: parentComment?.id,
		})
	}, [parentComment])

	return (
		<Box sx={sx.root}>
			<ListItem
				sx={{
					...sx.listItem,
					pl: Math.min(level * 7, 14) + 2,
				}}
				secondaryAction={
					<IconButton onClick={handleReply}>
						<Icon name="MessageSquare" size={20} />
					</IconButton>
				}
			>
				<ListItemIcon sx={sx.listItemIcon}>
					<UserAvatar user={parentComment?.user} />
				</ListItemIcon>
				<ListItemText
					primary={
						<Typography
							variant="body1"
							color="text.primary"
							sx={sx.commentText}
						>
							{parentComment?.body}
						</Typography>
					}
					secondary={
						<Typography variant="body2" color="text.secondary" sx={sx.caption}>
							{`@${parentComment?.user?.username}`} commented{' '}
							{moment(parentComment?.created_at).fromNow()}
						</Typography>
					}
				/>
			</ListItem>
			<Collapse in={openComment}>
				<CommentForm
					pl={Math.min(level * 7, 14)}
					loading={delayedLoading}
					errors={errors}
					comment={comment}
					handleChange={handleChange}
					handleSubmit={handleSubmit}
				/>
			</Collapse>
			{parentComment?.replies?.length > 0 && (
				<>
					{!showReplies && (
						<Box
							sx={{
								pl: Math.min(level * 7, 14),
							}}
						>
							<Link sx={sx.link} onClick={handleShowReplies}>
								Show {parentComment?.replies?.length}{' '}
								{parentComment?.replies?.length > 1 ? 'replies' : 'reply'}
							</Link>
						</Box>
					)}
				</>
			)}
			<Box
				sx={{
					...sx.divider,
					ml: Math.min(level * 7, 14),
				}}
			/>
			<Collapse in={showReplies}>
				{parentComment?.replies?.map((reply) => (
					<Comment
						key={reply.id}
						url={url}
						handle={handle}
						comment={reply}
						level={level + 1}
						handleDelete={handleDelete}
					/>
				))}
			</Collapse>
		</Box>
	)
}

export default Comment

const sx = {
	root: {
		py: 1,
	},
	showRepliesButton: {
		pl: 7,
	},
	listItem: {
		alignItems: 'flex-start',
		'&:hover .MuiBox-root': {
			display: 'block',
		},
	},
	listItemIcon: {
		mt: 1,
    mr: 2
	},
	commentText: {
		mb: 1,
		color: 'text.primary',
		whiteSpace: 'pre-wrap',
		'& span': {
			fontWeight: 500,
		},
	},
	content: {
		width: '100%',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	link: {
		cursor: 'pointer',
		color: 'text.secondary',
		'&:hover': {
			color: 'text.primary',
		},
	},
	caption: {
		fontSize: 14,
	},
	footerText: {},
	showReplyButton: {
		color: 'text.secondary',
	},
	divider: {
		pb: 1,
		borderBottom: '1px solid',
		borderColor: 'divider',
	},
}
