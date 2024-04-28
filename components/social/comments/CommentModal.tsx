import React from 'react'
import { Modal } from '../../../components'
import CommentForm from './CommentForm'

type CommentModalProps = {
  open: boolean
  handleClose: () => void
  error?: any
  loading: boolean
  comment: any
  handleChange: (ev: any) => void
  handleSubmit: () => void
}

const CommentModal: React.FC<CommentModalProps> = (props) => {
	const {
		open,
		handleClose,
		error,
		loading,
		comment,
		handleChange,
		handleSubmit,
	} = props

	return (
		<Modal open={open} handleClose={handleClose} title="Leave a comment" p={2}>
			<CommentForm
				loading={loading}
				errors={error}
				comment={comment}
				handleChange={handleChange}
				handleSubmit={handleSubmit}
			/>
		</Modal>
	)
}

export default CommentModal