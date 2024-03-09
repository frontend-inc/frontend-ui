import React from 'react'
import { Box } from '@mui/material'

type KlaviyoEmbedProps = {
	formId?: string
}

const KlaviyoEmbed: React.FC<KlaviyoEmbedProps> = (props) => {
	const { formId } = props || {}
	if (!formId) return null
	return (
		<Box sx={sx.root}>
			<div className={`klaviyo-form-${formId}`}></div>
		</Box>
	)
}

export default KlaviyoEmbed

const sx = {
	root: {
		py: 2,
	},
}
