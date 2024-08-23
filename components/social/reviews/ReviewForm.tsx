import React from 'react'
import { Stack, ListItem, Button } from '@mui/material'
import { Drawer, AuthGuard, IconLoading, RatingInput, TextInput } from '../..'
import { useResourceContext } from 'frontend-js'

type ReviewFormProps = {
	loading: boolean
	errors?: any
	review: any
	handleChange: (ev: any) => void
	handleSubmit: () => void
}

const ReviewForm: React.FC<ReviewFormProps> = (props) => {
	const {
		loading,
		errors,
		handleChange,
		create,
		update,
		resource,
		reloadMany,
		openEdit,
		setOpenEdit,
	} = useResourceContext()

	const handleSubmit = async () => {
		let resp
		if (resource?.id) {
			resp = await update(resource)
		} else {
			resp = await create(resource)
		}
		if (resp?.id) {
			setOpenEdit(false)
			reloadMany()
		}
	}

	return (
		<Drawer
			title="Leave a review"
			open={openEdit}
			handleClose={() => setOpenEdit(false)}
			buttons={
				<Button
					fullWidth
					variant="contained"
					onClick={handleSubmit}
					disabled={loading}
					startIcon={<IconLoading loading={loading} />}
				>
					Submit
				</Button>
			}
		>
			<AuthGuard>
				<ListItem disableGutters>
					<Stack sx={sx.form} direction="column" spacing={1}>
						<RatingInput
							errors={errors}
							name="rating"
							value={resource?.rating}
							handleChange={handleChange}
						/>
						<TextInput
							errors={errors}
							name="title"
							value={resource?.title}
							handleChange={handleChange}
							placeholder="Review summary..."
						/>
						<TextInput
							errors={errors}
							multiline
							rows={4}
							name="body"
							value={resource?.body}
							handleChange={handleChange}
							placeholder="Leave a review..."
						/>
					</Stack>
				</ListItem>
			</AuthGuard>
		</Drawer>
	)
}

export default ReviewForm

const sx = {
	root: {
		alignItems: 'flex-start',
	},
	form: {
		width: '100%',
		alignItems: 'flex-start',
	},
	paper: {
		width: '100%',
	},
}
