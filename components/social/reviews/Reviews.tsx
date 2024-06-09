import React, { useState, useContext, useEffect } from 'react'
import {
	AlertModal,
	ReviewButton,
	Review,
	ReviewForm,
	LoadMore,
	Placeholder,
} from '../..'
import { List, Stack, Collapse, Typography } from '@mui/material'
import { useReviews } from '../../../hooks'
import { useAuth } from 'frontend-js'
import { AppContext } from '../../../context'

export type ReviewsProps = {
	handle: string
	url: string
}

const Reviews: React.FC<ReviewsProps> = (props) => {
	const { url, handle } = props
	const { currentUser } = useAuth()

	const [activeReview, setActiveReview] = useState(null)

	const [openReview, setOpenReview] = useState(false)
	const [openDelete, setOpenDelete] = useState(false)
	const [reply, setReply] = useState(false)

	const {
		loading,
		errors,
		query,
		review,
		reviews,
		setReview,
		findReviews,
		handleChange,
		createReview,
		deleteReview,
		totalCount,
		page,
		numPages,
		loadMore,
	} = useReviews({
		url,
		handle,
	})

	const { setAuthOpen } = useContext(AppContext)

	const handleToggleClick = () => {
		if (currentUser?.id) {
			setReview({})
			setReply(!reply)
			setOpenReview(!openReview)
		} else {
			setAuthOpen(true)
		}
	}

	const handleSubmit = async () => {
		await createReview(review)
		setOpenReview(false)
		findReviews({
			...query,
			page: 1,
		})
		setReply(false)
	}

	const handleDeleteReview = (review) => {
		setActiveReview(review)
		setOpenDelete(true)
	}

	const handleDelete = async () => {
		await deleteReview(activeReview?.id)
		setOpenDelete(false)
		findReviews({
			...query,
			page: 1,
		})
	}

	useEffect(() => {
		if (url && handle) {
			findReviews({
				per_page: 20,
			})
		}
	}, [url, handle])

	return (
		<Stack spacing={1} sx={sx.root}>
			<Stack direction="row" sx={sx.reviewHeader}>
				<Typography color="text.primary" variant="subtitle1">
					Reviews ({totalCount})
				</Typography>
				<ReviewButton handleClick={handleToggleClick} />
			</Stack>
			<Collapse in={openReview}>
				<ReviewForm					
					errors={errors}
					loading={loading}
					review={review}
					handleChange={handleChange}
					handleSubmit={handleSubmit}
				/>
			</Collapse>
			<List dense disablePadding>
				{reviews?.map((review, i) => (
					<Review
						key={i}
						review={review}
						handleDelete={handleDeleteReview}
					/>
				))}
			</List>
			{!loading && !openReview && reviews?.length == 0 && (
				<Placeholder
					icon="MessageSquare"
					title="There are no reviews."
					description="Be the first to leave a review."
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

export default Reviews

const sx = {
	root: {
		py: 2,
		pb: 1.5,
		borderColor: 'divider',
	},
	reviewHeader: {
		alignItems: 'center',
		justifyContent: 'space-between',
	},
}
