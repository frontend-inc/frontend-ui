import React from 'react'
import { Button } from '@mui/material'

type ReviewButtonProps = {
	handleClick: () => void
}

const ReviewButton: React.FC<ReviewButtonProps> = (props) => {
	const { handleClick } = props

	return (
		<Button variant="contained" color="secondary" onClick={handleClick}>
			Leave a review
		</Button>
	)
}

export default ReviewButton
