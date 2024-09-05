import React from 'react'
import { Label } from 'frontend-ui/components'
import * as COLORS from '@mui/material/colors'

type PublishedLabelProps = {
	published?: boolean
}

const PublishedLabel: React.FC<PublishedLabelProps> = (props) => {
	const { published = false } = props
	return (
		<Label
			label={published ? 'Published' : 'Draft'}
			styles={{
				...sx.draft,
				...(published && sx.published),
			}}
		/>
	)
}

export default PublishedLabel

const sx = {
	draft: {
		color: 'primary.contrastText',
		bgcolor: 'primary.main',
	},
	published: {
		color: 'success.contrastText',
		bgcolor: 'success.main',
	},
}
