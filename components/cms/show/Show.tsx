import React, { useState, useEffect } from 'react'
import { Box, Button, Stack } from '@mui/material'
import { ActionType, DisplayFieldType, FormFieldType } from '../../../types'
import Article from './Article'
import Item from './Item'
import Person from './Person'
import Details from '../details/Details'
import YouTubeVideo from './addons/YouTubeVideo'
import VimeoEmbed from './addons/VimeoVideo'
import { Drawer, Form, IconLoading, Placeholder } from '../../../components'
import { useDocuments, flattenDocument } from 'frontend-js'

export type ShowItemProps = {
  handle?: string
	enableBorder?: boolean
	actions: ActionType[]
  fieldName?: string
  contentType?: string
	resource: any
	enableEdit?: boolean
  enableCreate?: boolean
	handleEdit?: () => void
}

export type ShowProps = ShowItemProps & {
	fields: FormFieldType[]  
	displayFields: DisplayFieldType[]
	url: string
	style: 
    'article' | 
    'person' | 
    'item' | 
    'youtube' | 
    'vimeo'
}

const Show: React.FC<ShowProps> = (props) => {
  let { handle } = props
  if(handle == 'index') handle = undefined;

	const {    
		style = 'item',
		resource: _resource,
		fields,
    fieldName,
		displayFields,
		url,
    contentType,
		actions,
		enableBorder,
    enableCreate,
		enableEdit,
	} = props || {}

	const {
		loading,
		errors,
		update,
    create,
		resource,
		setResource,
    findMany,
		removeAttachment,
		handleDataChange,
	} = useDocuments({
		collection: contentType
	})

	const handleRemove = async (name) => {
		await removeAttachment(resource?.id, name)
	}

	const [openModal, setOpenModal] = useState(false)

	const handleEdit = () => {
		setOpenModal(true)
	}

	const handleSubmit = async () => {
  try {
      let resp
      if(resource?.id){
        resp = await update(resource)
      }else{
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
		item: Item,
		article: Article,
		person: Person,
    youtube: YouTubeVideo,
    vimeo: VimeoEmbed, 
	}

	const Component = components[style]

  const handleFetchResource = async () => {
    let resources;
    let searchQuery = {
      page: 1,
      per_page: 1
    }
    if(handle){
      resources = await findMany({
        ...searchQuery,
        filters: {
          AND: [{ handle: { eq: handle }}]
        }        
      })    
    }else{
      resources = await findMany(searchQuery)
    }    
    if(resources?.length > 0){
      setResource(resources[0])
    }
  }

	useEffect(() => {
		if (_resource?.id) {
			setResource(_resource)
		}else{
      if(contentType){
        handleFetchResource()
      }      
    }
	}, [_resource, contentType, handle])

	return (
		<Stack direction="column" spacing={2} sx={sx.root}>
      { resource?.id && (
        <Component
          fieldName={fieldName}
          resource={resource}
          actions={actions}
          enableBorder={enableBorder}
          enableEdit={enableEdit}
          handleEdit={handleEdit}
        />
      )}
			{displayFields?.length > 0 && (
				<Details
					url={url}
					fields={displayFields}
					resource={resource}
					enableBorder={enableBorder}
				/>
			)}
      { !loading && !resource?.id && enableCreate && (
          <Stack direction="column" spacing={2} sx={ sx.inlineForm }>
            <Form
              loading={loading}
              errors={errors}
              fields={fields}
              resource={flattenDocument(resource)}
              handleChange={handleDataChange}
              handleRemove={handleRemove}
            />
            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={handleSubmit}
              startIcon={<IconLoading loading={loading} />}
            >
              Create
            </Button>
          </Stack>
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
    borderRadius: theme => `${theme.shape.borderRadius}px`,
  }
}
