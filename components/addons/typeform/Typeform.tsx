import React from 'react'
import Script from 'next/script'
import { Box } from '@mui/material'

export type TypeformProps = {
	typeformId?: string
	justifyContent?: string
}

const Typeform: React.FC<TypeformProps> = (props) => {
	const { typeformId, justifyContent = 'center' } = props
	if (!typeformId) return null
	return (
		<Box
			sx={{
				...sx.root,
				justifyContent,
			}}
		>
			<div data-tf-live={typeformId}></div>
			<Script src="//embed.typeform.com/next/embed.js" />
		</Box>
	)
}

export default Typeform

const sx = {
	root: {
		display: 'flex',
		justifyContent: 'center',
	},
}
