import React, { useState, useEffect, useContext } from 'react'
import { AppContext } from '../../../context'
import { useAuth } from 'frontend-js'
import { Button, Stack } from '@mui/material'
import { ActionType, DisplayFieldType, FormFieldType } from '../../../types'
import Article from './Article'
import Product from './Product'
import Profile from './Profile'
import Document from './Document'
import Event from './Event'
import Place from './Place'
import Details from '../details/Details'
import YouTubeVideo from './addons/YouTubeVideo'
import VimeoEmbed from './addons/VimeoVideo'
import { Drawer, Form, IconLoading } from '../..'
import { useDocuments, flattenDocument } from 'frontend-js'

export type ShowItemProps = {
	handle?: string
	enableBorder?: boolean
	actions: ActionType[]
	fieldName?: string
	url?: string
	resource: any
	enableEdit?: boolean
	enableCreate?: boolean
  enableFavorites?: boolean
  enableLikes?: boolean
  enableSharing?: boolean
  enableBuyNow?: boolean
  enableStripePaymentLink?: boolean
	handleEdit?: () => void
}

type ShowStyleTypes =
	| 'product'
	| 'article'
	| 'profile'
	| 'document'
	| 'youtube'
	| 'vimeo'

export type ShowProps = ShowItemProps & {
	fields: FormFieldType[]
	displayFields: DisplayFieldType[]
	url: string
	style: ShowStyleTypes
}

const Show: React.FC<ShowProps> = (props) => {
	let { handle } = props
	if (handle == 'index') handle = undefined
	const {
		style = 'item',
		resource: _resource,
		fields,
		fieldName,
		displayFields,
		url,
		actions,
		enableBorder,
		enableEdit,
    enableFavorites,
    enableLikes,
    enableSharing,
    enableBuyNow,
    enableStripePaymentLink
	} = props || {}

  const { setAuthOpen } = useContext(AppContext)
  const { currentUser } = useAuth()

	const {
		delayedLoading: loading,
		errors,
		update,
		create,
		resource,
		setResource,
		removeAttachment,
		handleDataChange,
	} = useDocuments({
		url
	})

	const handleRemove = async (name) => {
		await removeAttachment(resource?.id, name)
	}

	const [openModal, setOpenModal] = useState(false)

	const handleEdit = () => {
    if(!currentUser?.id) return setAuthOpen(true);
		setOpenModal(true)
	}

	const handleSubmit = async () => {
    if(!currentUser?.id) return setAuthOpen(true);
		try {
			let resp
			if (resource?.id) {
				resp = await update(resource)
			} else {
				resp = await create(resource)
			}
			if (resp?.id) {
				setOpenModal(false)
			}
		} catch (e) {
			console.error(e)
		}
	}

	const components = {
    article: Article,
    event: Event,
		product: Product,		
		profile: Profile,
    place: Place,
		document: Document,
		youtube: YouTubeVideo,
		vimeo: VimeoEmbed,
	}

	const Component = components[style]

	useEffect(() => {
		if (_resource?.id) {
			setResource(_resource)
		}
	}, [_resource])

	return (
		<Stack direction="column" spacing={2} sx={sx.root}>
			{resource?.id && (
				<Component
					fieldName={fieldName}
					resource={resource}
					actions={actions}          
					enableBorder={enableBorder}
					enableEdit={enableEdit}
					handleEdit={handleEdit}
          enableFavorites={enableFavorites}
          enableLikes={enableLikes}
          enableSharing={enableSharing}   
          enableBuyNow={enableBuyNow}
          enableStripePaymentLink={enableStripePaymentLink}       
				/>
			)}
			<Drawer
				open={openModal}
				handleClose={() => setOpenModal(false)}
				title={resource?.id ? 'Edit' : 'Add'}
				actions={
					<Button
						fullWidth
						variant="contained"
						color="primary"
						onClick={handleSubmit}
						startIcon={<IconLoading loading={loading} />}
					>
						{resource?.id ? 'Update' : 'Save'}
					</Button>
				}
			>
				<Form
					loading={loading}
					errors={errors}
					fields={fields}
					resource={flattenDocument(resource)}
					handleChange={handleDataChange}
					handleRemove={handleRemove}
				/>
			</Drawer>
		</Stack>
	)
}

export default Show

const sx = {
	root: {
		width: '100%',
	},
	inlineForm: {
		border: '1px solid',
		borderColor: 'divider',
		p: 4,
		width: '100%',
		borderRadius: (theme) => `${theme.shape.borderRadius}px`,
	},
}
