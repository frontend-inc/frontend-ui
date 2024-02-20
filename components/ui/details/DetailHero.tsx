import React, { useEffect } from 'react'
import { useResource } from 'frontend-js'
import { Box, TypographyVariant } from '@mui/material'
import {
	CardVert,
	ImageHoriz,
	CoverHoriz,
	AvatarVert,
} from '../../../components'

type DetailHeroProps = {
	fields: any[]
	url: string
	handle: string
	textVariant?: TypographyVariant
	style?: 'image' | 'cover' | 'avatar' | 'card'
}

const DetailHero: React.FC<DetailHeroProps> = (props) => {
	const { style = 'cover', textVariant = 'subtitle1', url, handle } = props

	const { resource, findOne } = useResource({
		url,
	})

	useEffect(() => {
		if (handle) {
			findOne(handle)
		}
	}, [handle])

	if (!resource) return null
	return (
		<Box sx={sx.root}>
			{style == 'avatar' && (
				<AvatarVert
					image={resource?.image?.url}
					title={resource?.title}
					description={resource?.description}
					textVariant={textVariant}
				/>
			)}
			{style == 'card' && (
				<CardVert
					responsive
					image={resource?.image?.url}
					title={resource?.title}
					description={resource?.description}
					textVariant={textVariant}
				/>
			)}
			{style == 'cover' && (
				<CoverHoriz
					responsive
					image={resource?.image?.url}
					title={resource?.title}
					description={resource?.description}
					textVariant={textVariant}
				/>
			)}
			{style == 'image' && (
				<ImageHoriz
					image={resource?.image?.url}
					title={resource?.title}
					description={resource?.description}
					textVariant={textVariant}
				/>
			)}
		</Box>
	)
}

export default DetailHero

const sx = {
	root: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		width: '100%',
	},
}
