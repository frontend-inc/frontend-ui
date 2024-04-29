import React, { useState, useEffect, useContext } from 'react'
import { AppContext } from '../../../context'
import { useResource } from 'frontend-js'
import { useRouter } from 'next/router'
import { filterDocumentLinks } from '../../../helpers'
import { 
  Drawer, 
  LoadMore, 
  CollectionList, 
  Form, 
  IconLoading,
  AlertModal,
  Icon
} from '../../../components'
import { Stack, Button, Box } from '@mui/material'
import { SYSTEM_FIELDS } from '../../../constants'
import { FieldType } from '../../../types'
import { flattenDocument } from '../../../helpers'

export type ForeignCollectionProps = {
	variant?: 'list' | 'grid'
	style?: 'card' | 'avatar' | 'cover'
	field: any
  fields: FieldType[]
	resource: any
	url: string
	handle: string
	navigateUrl?: any
	foreignUrl?: string
	perPage?: number
	query?: any
	buttonText?: string
  enableEdit?: boolean
  enableCreate?: boolean
  enableDelete?: boolean
	enableBorder?: boolean
	enableGradient?: boolean
	enableLoadMore?: boolean
}

const ForeignCollection: React.FC<ForeignCollectionProps> = (props) => {
	
  const {
		field,
    fields,
		resource,
		variant = 'list',
		style = 'card',
    url,
		foreignUrl,
		navigateUrl,
		perPage = 5,
		buttonText,
		query: defaultQuery = null,
		enableBorder = false,
		enableGradient = false,
		enableLoadMore = true,
    enableCreate = false,
    enableEdit = false,
    enableDelete = false,
	} = props

	const router = useRouter()

  const [openModal, setOpenModal] = useState(false)
  const [openDeleteModal, setOpenDeleteModal] = useState(false)
	const { clientUrl } = useContext(AppContext)

	const { addLinks } = useResource({
		name: 'document',
		url,
	})

	const { 
    loading,
    errors, 
    query, 
    resource: _resource,
    setResource,
    setResources,
    update,
    create,
    destroy,
    resources, 
    findMany, 
    removeAttachment,
    page, 
    numPages, 
    loadMore,
    reloadMany 
   } = useResource({
      name: 'document',
			url: foreignUrl,
		})

	const handleClick = (item) => {
		if (clientUrl && navigateUrl && item?.handle) {
			router.push(`${clientUrl}${navigateUrl}/${item?.handle}`)
		}
	}

	const handleDataChange = (ev) => {
		const { name } = ev.target
		const value =
			ev.target.type === 'checkbox' ? ev.target.checked : ev.target.value
		if (SYSTEM_FIELDS.includes(name)) {
			setResource((prev) => ({
				...prev,
				[name]: value,
			}))
		} else {
			setResource((prev) => ({
				...prev,
				data: {
					...prev.data,
					[name]: value,
				},
			}))
		}
	}

  const handleAdd = () => {
    setResource({})
    setOpenModal(true)
  }

  const handleEdit = (item) => {
    setResource(item)
    setOpenModal(true)
  }

  const handleSubmit = async () => {
		try {
			let resp
			if (_resource?.id) {
				resp = await update(_resource)
			} else {
				resp = await create(_resource)
        if (resp?.id) {
          await addLinks(resource?.handle, [resp.id])                    
        }
			}
			if(resp?.id) {
        setResource({})
        setOpenModal(false)
        let documentIds = getDocumentIds()
        documentIds.push(resp.id)
        handleLoadDocuments(documentIds)
			}
		} catch (err) {
			console.log('Error', err)
		}
	}

  const handleDeleteClick = (item) => {
    setResource(item)
    setOpenDeleteModal(true)
  }

  const handleDelete = async () => {
    await destroy(_resource?.id)
    setOpenDeleteModal(false)
    setOpenModal(false)
    setResource({})
    reloadMany()
  }

  const handleRemove = async (name) => {
		await removeAttachment(resource?.id, name)
	}

  const getDocumentIds = () => {
    return filterDocumentLinks(
      resource,
      field?.foreign_content_type
    )?.map((link) => link?.id)    
  }

  const handleLoadDocuments = async (documentIds) => {
    findMany({
      ...query,
      ...defaultQuery,
      filters: {
        AND: [
          {
            id: {
              in: documentIds,
            },
          },
        ],
      },
      per_page: perPage,
      page: 1,
    })
  }

	useEffect(() => {    
		if (resource && field && foreignUrl) {
      const documentIds = getDocumentIds()
			handleLoadDocuments(documentIds)
		}
	}, [resource, field, foreignUrl])

	return (
		<Stack direction="column" spacing={1} sx={sx.root}>
      { enableCreate && (
        <Box>
          <Button 
            color="secondary"
            variant="contained"
            onClick={ handleAdd }
            startIcon={
              <Icon name="Plus" size={20} />
            }
          >
            Add 
          </Button> 
        </Box>
      )}
			<CollectionList
				variant={variant}
				style={style}
				resources={resources}
				handleClick={handleClick}
				buttonText={buttonText}
				enableBorder={enableBorder}
				enableGradient={enableGradient}
        enableEdit={ enableEdit }
        enableCreate={ enableCreate }
        enableDelete={ enableDelete }
        handleEdit={ handleEdit }
        handleDelete={ handleDeleteClick }
			/>
			{enableLoadMore && (
				<LoadMore page={page} numPages={numPages} loadMore={loadMore} />
			)}
      <Drawer 
        open={ openModal }
        handleClose={() => setOpenModal(false) }
        title={ _resource?.id ? 'Edit' : 'Add' }
        actions={
          <Button 
            fullWidth 
            variant="contained"
            color="primary"
            onClick={ handleSubmit }
            startIcon={ 
              <IconLoading loading={ loading } />
            }
            >
            { _resource?.id ? 'Update' : 'Save' }
          </Button>      
        }
      >
        <Form  
          loading={ loading }
          errors={errors}
          fields={ fields }
          resource={ flattenDocument(_resource) }
          handleChange={ handleDataChange }
          handleRemove={ handleRemove }          
        />
      </Drawer>
      <AlertModal 
        open={ openDeleteModal }
        handleClose={ () => setOpenDeleteModal(false) }
        title="Are you sure you want to delete this item?"
        description="This action cannot be reversed."
        handleConfirm={ handleDelete }
      />
		</Stack>
	)
}

export default ForeignCollection

const sx = {
	root: {
		width: '100%',
	},
	content: {
		width: '100%',
	},
	list: {
		display: 'flex',
		flexDirection: 'column',
		gap: '16px',
	},
	grid: {
		display: 'grid',
		gridTemplateColumns: {
			md: '1fr 1fr 1fr',
			xs: '1fr',
		},
		gap: '16px',
	},
	item: {
		p: 2,
	},
}
