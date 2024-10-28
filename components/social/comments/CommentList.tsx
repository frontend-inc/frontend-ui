'use client'

import React, { useEffect, useState } from 'react'
import { AlertModal, CommentListItem, CommentForm, LoadMore } from '../..'
import { useComments } from '../../../hooks'
import { useAuth } from 'frontend-js'

export type CommentListProps = {
	handle: string
	url: string
}

const CommentList: React.FC<CommentListProps> = (props) => {
	const { url, handle } = props

	const [activeComment, setActiveComment] = useState(null)
	const [openDelete, setOpenDelete] = useState(false)

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

	const handleSubmit = async () => {
		await createComment(comment)
		findComments({
			...query,
			page: 1,
		})
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
		<div className="flex flex-col space-y-4 border-divider">
			<div className="flex flex-col space-y-2 w-full items-start justify-between">
				<div className="text-lg font-semibold text-foreground">
					Comments ({totalCount})
				</div>
			</div>
			<CommentForm
				errors={errors}
				loading={loading}
				comment={comment}
				handleChange={handleChange}
				handleSubmit={handleSubmit}
			/>
			<ul className="space-y-4">
				{comments?.map((comment, i) => (
					<CommentListItem
						key={i}
						url={url}
						handle={handle}
						comment={comment}
						handleDelete={handleDeleteComment}
					/>
				))}
			</ul>
			<LoadMore handlePaginate={loadMore} page={page} numPages={numPages} />
			<AlertModal
				loading={loading}
				open={openDelete}
				handleClose={() => setOpenDelete(false)}
				handleConfirm={handleDelete}
			/>
		</div>
	)
}

export default CommentList
