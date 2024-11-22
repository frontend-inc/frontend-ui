'use client'

import React from 'react'
import { Button } from '../../../components'
import { AuthGuard, IconLoading, TextInput } from '../../../components'

type CommentFormProps = {
	loading: boolean
	errors?: any
	comment: any
	handleChange: (ev: any) => void
	handleSubmit: () => void
}

const CommentForm: React.FC<CommentFormProps> = (props) => {
	const { loading, errors, comment, handleChange, handleSubmit } = props || {}

	return (
		<AuthGuard>
			<div className="pl-0">
				<div className="flex flex-col space-y-4 w-full items-start">
					<TextInput
						errors={errors}
						name="body"
						value={comment?.body}
						handleChange={handleChange}
						placeholder="Leave a comment..."
						className="w-full"
					/>
					<Button
						variant="default"
						onClick={handleSubmit}
						disabled={loading}
						className="flex items-center"
						loading={loading}
					>
						Submit
					</Button>
				</div>
			</div>
		</AuthGuard>
	)
}

export default CommentForm
