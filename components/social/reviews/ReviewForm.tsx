import React from 'react'
import { Paper, Stack, ListItem, Button } from '@mui/material'
import { AuthGuard, IconLoading, RatingInput, TextInput } from '../..'

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
		review,
		handleChange,
		handleSubmit,
	} = props || {}

	return (
		<AuthGuard>
			<ListItem disableGutters>
        <Stack sx={sx.form} direction="column" spacing={1}>
          <RatingInput 
            errors={errors}            
            name="rating"
            value={review?.rating}
            handleChange={handleChange}
          />
          <TextInput
            errors={errors}
            name="title"
            value={review?.title}
            handleChange={handleChange}
            placeholder="Review summary..."
          />          
          <TextInput
            errors={errors}
            multiline
            rows={4}
            name="body"
            value={review?.body}
            handleChange={handleChange}
            placeholder="Leave a review..."
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

export default ReviewForm

const sx = {
	root: {
		alignItems: 'flex-start',
	},
	form: {
		p: 2,
		width: '100%',
		alignItems: 'flex-start',
	},
  paper: {
    width: '100%'
  }
}
