import React from 'react'
import { Box, Button } from '@mui/material'

// https://help.klaviyo.com/hc/en-us/articles/4418052317339

type KlaviyoButtonProps = {
	formId?: string
	justifyContent?: string
	buttonText?: string
	variant?: 'text' | 'outlined' | 'contained'
}

const KlaviyoButton: React.FC<KlaviyoButtonProps> = (props) => {
	const {
		formId,
		justifyContent = 'center',
		variant = 'contained',
		buttonText = 'Subscribe',
	} = props || {}

	const handleClick = () => {
		// @ts-ignore
		window._klOnsite = window._klOnsite || []
		// @ts-ignore
		window._klOnsite.push(['openForm', 'Tpqv7M'])
	}

	if (!formId) return null
	return (
		<Box
			sx={{
				...sx.root,
				justifyContent,
			}}
		>
			<Button variant={variant} onClick={handleClick}>
				{buttonText}
			</Button>
		</Box>
	)
}

export default KlaviyoButton

const sx = {
	root: {
		display: 'flex',
		flexDirection: 'row',
		width: '100%',
	},
}
