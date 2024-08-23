import React from 'react'
import {
	Drawer,
	Image,
	Field,
	Label,
	CircularLoader,
} from '../../../components'
import { Box, Button, Stack, Typography } from '@mui/material'
import { DisplayFieldType } from '../../../types'

type ResourceDetailsProps = {
	loading?: boolean
	open: boolean
	avatar?: React.ReactNode
	handleClose: () => void
	resource: any
	primary: string
	secondary?: string
	label?: string
	image?: string
	enableEdit?: boolean
	enableDelete?: boolean
	handleEdit?: () => void
	handleDelete?: () => void
	fields: DisplayFieldType[]
}

const ResourceDetails: React.FC<ResourceDetailsProps> = (props) => {
	const {
		loading,
		avatar,
		open,
		handleClose,
		resource,
		primary,
		secondary,
		label,
		image,
		fields = [],
		enableEdit,
		enableDelete,
		handleEdit,
		handleDelete,
	} = props || {}

	return (
		<Drawer
			open={open}
			handleClose={handleClose}
			buttons={
				(enableEdit || enableDelete) && (
					<Stack direction="row" spacing={1} sx={{ width: '100%' }}>
						{enableEdit && (
							<Button
								fullWidth
								variant="contained"
								color="primary"
								onClick={handleEdit}
							>
								Edit
							</Button>
						)}
						{enableDelete && (
							<Button
								fullWidth
								variant="contained"
								color="secondary"
								onClick={handleDelete}
							>
								Delete
							</Button>
						)}
					</Stack>
				)
			}
		>
			<Stack direction="column" spacing={1}>
				{loading == true ? (
					<CircularLoader size={44} />
				) : (
					<>
						<Stack direction="column" sx={sx.content} spacing={0.5}>
							{image && (
								<Box sx={sx.image}>
									<Image height={160} src={image} />
								</Box>
							)}
							{avatar && avatar}
							<Typography variant="h5">{primary}</Typography>
							{secondary && (
								<Typography variant="overline">{secondary}</Typography>
							)}
							{label && <Label label={label} />}
						</Stack>
						{fields?.map((field, index) => (
							<Field
								enableBorder
								key={index}
								//@ts-ignore
								field={field}
								resource={resource}
								direction="row"
							/>
						))}
					</>
				)}
			</Stack>
		</Drawer>
	)
}

export default ResourceDetails

const sx = {
	content: {
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	image: {
		width: '160px',
	},
}
