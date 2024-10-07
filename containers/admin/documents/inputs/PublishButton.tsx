import React from 'react'
import { Button } from '@mui/material'
import { Icon, IconLoading } from '../../../../components'

type PublishButtonProps = {
	loading: boolean
	document: any
	handleTogglePublish: () => void
	fullWidth?: boolean
}

const PublishButton: React.FC<PublishButtonProps> = (props) => {
	const { loading, document, handleTogglePublish, fullWidth = false } = props

	return (
		<Button
			variant="contained"
			sx={{
				...sx.root,
				...(document?.published && sx.published),
				...(loading && sx.loading),
				...(fullWidth && sx.fullWidth),
			}}
			onClick={handleTogglePublish}
			startIcon={
				<>
					{document?.published && (
						<Icon name="CheckCircle" color="success.contrastText" />
					)}
				</>
			}
			endIcon={
				loading && (
					<IconLoading
						color={
							document?.published
								? 'success.contrastText'
								: 'primary.contrastText'
						}
					/>
				)
			}
		>
			{document?.published ? 'Published' : 'Publish'}
		</Button>
	)
}

export default PublishButton

const sx = {
	root: {
		height: 36,
		width: {
			sm: 'auto',
			xs: '100%',
		},
		border: 'none',
		boxShadow: 'none',
		transition: 'all 0.3s ease-in-out',
	},
	published: {
		color: 'success.contrastText',
		bgcolor: 'success.main',
		'&:hover': {
			color: 'success.contrastText',
			border: 'none',
			bgcolor: 'success.dark',
		},
	},
	fullWidth: {
		width: '100%',
	},
	loading: {},
}
