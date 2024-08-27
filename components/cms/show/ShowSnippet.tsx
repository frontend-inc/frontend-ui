import React from 'react'
import { ShowItem } from '../../../components'
import { ShowItemProps } from './ShowItem'

const ShowSnippet: React.FC<ShowItemProps> = (props) => {
	return <ShowItem {...props} style="snippet" />
}

export default ShowSnippet

const sx = {
	paper: {},
	container: {
		borderRadius: 1,
		overflow: 'hidden',
		width: '100%',
		justifyContent: 'flex-start',
		alignItems: {
			md: 'flex-start',
			xs: 'center',
		},
	},
	header: {
		width: '100%',
	},
	imageContainer: {
		width: '100%',
		borderRadius: (theme) =>
			`${theme.shape.borderRadius}px ${theme.shape.borderRadius}px 0 0`,
		overflow: 'hidden',
	},
	closeButton: {
		position: 'absolute',
		top: 10,
		right: 10,
		bgcolor: 'rgb(0,0,0,0.5)',
	},
}
