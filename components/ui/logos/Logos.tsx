import React, { useEffect } from 'react'
import { useResource } from 'frontend-js'
import { Stack } from '@mui/material'
import { Icon, GridView, ListView, Placeholder } from '../../../components'
import Logo from './Logo'
import { Typography } from '@mui/material'

type LogosProps = {
	title?: string
	url: string
	layout: 'grid' | 'carousel'
	editing?: boolean
	perPage?: number
	query?: any
	buttonText?: string
	autoPlay?: boolean
	arrows?: boolean
	showDots?: boolean
	enableBorder?: boolean
	enableGradient?: boolean
}

const Logos: React.FC<LogosProps> = (props) => {
	const {
		title,
		layout = 'grid',
		url,
		query: defaultQuery = {},
		perPage = 20,
		editing,
	} = props

	const { loading, findMany, resources } = useResource({
		url,
	})

	useEffect(() => {
		if (url && perPage) {
			findMany({
				...defaultQuery,
				per_page: perPage,
			})
		}
	}, [url, perPage])

	return (
		<Stack spacing={1} sx={sx.root}>
			<Typography variant="caption" sx={sx.caption}>
				{title}
			</Typography>
			{layout == 'grid' && (
				<GridView
					editing={editing}
					loading={loading}
					items={resources}
					component={Logo}
				/>
			)}
			{layout == 'carousel' && (
				<ListView
					flexDirection="row"
					justifyContent="center"
					spacing={4}
					editing={editing}
					items={resources}
					component={Logo}
				/>
			)}
			{!loading && resources?.length === 0 && (
				<Placeholder
					icon={<Icon name="Search" />}
					title="No results found"
					description="Try adjusting your search or filters"
				/>
			)}
		</Stack>
	)
}

export default Logos

const sx = {
	root: {
		width: '100%',
		p: 2,
		bgcolor: 'background.main',
	},
	caption: {
		color: 'text.primary',
		textAlign: 'center',
	},
}
