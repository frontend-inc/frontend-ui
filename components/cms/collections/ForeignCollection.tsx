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
  AlertModal
} from '../../../components'
import { Button, Box } from '@mui/material'
import { SYSTEM_FIELDS } from '../../../constants'
import { FieldType } from '../../../types'
import { flattenDocument } from '../../../helpers'

export type ForeignCollectionProps = {
	layout?: 'list' | 'grid'
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
		layout = 'list',
		style = 'card',
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

	const { 
    loading,
    errors, 
    query, 
    resource: _resource,
    setResource,
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
    let resp 
    if(_resource?.id){
      resp = await update(_resource)
    }else{
      resp = await create(_resource)
    }
    if(resp?.id){
      setOpenModal(false)
      setResource({})
      reloadMany()
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

	useEffect(() => {    
		if (resource && field && foreignUrl) {
			const documents = filterDocumentLinks(
				resource,
				field?.foreign_content_type
			)
			const documentIds = documents?.map((document) => document.id)
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
	}, [resource, field, foreignUrl])

	return (
		<Box sx={sx.root}>
			<CollectionList
				layout={layout}
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
		</Box>
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
