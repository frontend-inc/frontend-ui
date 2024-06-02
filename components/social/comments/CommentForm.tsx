import React from 'react'
import { Stack, ListItem, Button } from '@mui/material'
import { AuthGuard, IconLoading, TextInput } from '../../../components'

type CommentFormProps = {
	pl?: number
	loading: boolean
	errors?: any
	comment: any
	handleChange: (ev: any) => void
	handleSubmit: () => void
}

const CommentForm: React.FC<CommentFormProps> = (props) => {
	const {
		pl = 0,
		loading,
		errors,
		comment,
		handleChange,
		handleSubmit,
	} = props || {}

	return (
		<AuthGuard>
			<ListItem
				sx={{
					pl,
				}}
			>
				<Stack sx={sx.form} direction="column" spacing={1}>
					<TextInput
						errors={errors}
						multiline
						rows={4}
						name="body"
						value={comment?.body}
						handleChange={handleChange}
						placeholder="Leave a comment..."
					/>
					<Button
						variant="contained"
						onClick={handleSubmit}
						disabled={loading}
						startIcon={<IconLoading loading={loading} />}
					>
						Submit
					</Button>
				</Stack>
			</ListItem>
		</AuthGuard>
	)
}

export default CommentForm

const sx = {
	root: {
		alignItems: 'flex-start',
	},
	form: {
		p: 2,
		width: '100%',
		alignItems: 'flex-start',
		bgcolor: 'secondary.light',
	},
}
