import React, { useState, useContext, useEffect } from 'react'
import {
	AlertModal,
	CommentReplyButton,
	Comment,
	CommentForm,
	LoadMore,
	Placeholder,
} from '../../../components'
import { List, Stack, Collapse, Typography } from '@mui/material'
import { useComments } from '../../../hooks'
import { useAuth } from 'frontend-js'
import { AppContext } from '../../../context'

export type CommentsProps = {
	handle: string
	url: string
}

const Comments: React.FC<CommentsProps> = (props) => {
	const { url, handle } = props
	const { currentUser } = useAuth()

	const [activeComment, setActiveComment] = useState(null)

	const [openComment, setOpenComment] = useState(false)
	const [openDelete, setOpenDelete] = useState(false)
	const [reply, setReply] = useState(false)

	const {
		loading,
		errors,
		query,
		comment,
		comments,
		setComment,
		findComments,
		handleChange,
		createComment,
		deleteComment,
		totalCount,
		page,
		numPages,
		loadMore,
	} = useComments({
		url,
		handle,
	})

	const { setAuthOpen } = useContext(AppContext)

	const handleToggleClick = () => {
		if (currentUser?.id) {
			setComment({})
			setReply(!reply)
			setOpenComment(!openComment)
		} else {
			setAuthOpen(true)
		}
	}

	const handleSubmit = async () => {
		await createComment(comment)
		setOpenComment(false)
		findComments({
			...query,
			page: 1,
		})
		setReply(false)
	}

	const handleDeleteComment = (comment) => {
		setActiveComment(comment)
		setOpenDelete(true)
	}

	const handleDelete = async () => {
		await deleteComment(activeComment?.id)
		setOpenDelete(false)
		findComments({
			...query,
			page: 1,
		})
	}

	useEffect(() => {
		if (url && handle) {
			findComments({
				per_page: 5,
			})
		}
	}, [url, handle])

	return (
		<Stack spacing={1} sx={sx.root}>
			<Stack direction="row" sx={sx.commentHeader}>
				<Typography color="text.primary" variant="subtitle1">
					Comments ({totalCount})
				</Typography>
				<CommentReplyButton handleClick={handleToggleClick} />
			</Stack>
			<Collapse in={openComment}>
				<CommentForm
					pl={0}
					errors={errors}
					loading={loading}
					comment={comment}
					handleChange={handleChange}
					handleSubmit={handleSubmit}
				/>
			</Collapse>
			<List disablePadding>
				{comments?.map((comment, i) => (
					<Comment
						key={i}
						url={url}
						handle={handle}
						comment={comment}
						handleDelete={handleDeleteComment}
					/>
				))}
			</List>
			{!loading && comments?.length == 0 && (
				<Placeholder
          enableBorder
					icon="MessageSquare"
					title="There are no comments."
					description="Be the first to leave a comment."
				/>
			)}
			<LoadMore loadMore={loadMore} page={page} numPages={numPages} />
			<AlertModal
				loading={loading}
				open={openDelete}
				handleClose={() => setOpenDelete(false)}
				handleConfirm={handleDelete}
			/>
		</Stack>
	)
}

export default Comments

const sx = {
	root: {
		borderColor: 'divider',
	},
	commentHeader: {
		alignItems: 'center',
		justifyContent: 'space-between',
	},
}
