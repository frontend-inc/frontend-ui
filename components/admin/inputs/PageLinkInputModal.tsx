import React, { useState, useEffect } from 'react'
import { Stack, Typography, Box } from '@mui/material'
import { DocumentAutosuggest, Drawer } from 'frontend-ui/components'
import { PageAutosuggest } from 'components'
import { 
  PrimaryButton,
  TextInput,
  Autosuggest,  
  UserAutosuggest,
  CollectionAutosuggest,
  ProductAutosuggest,
  ProductCollectionAutosuggest,
  ShopifyCollectionAutosuggest,
  ShopifyProductAutosuggest 
} from 'frontend-ui/components'

type PageLinkInputModalProps = {  
  open: boolean
  handleClose: () => void
  value: string | number
  handleClick: (path: string) => void
}

const PageLinkInputModal: React.FC<PageLinkInputModalProps> = (props) => {

  const {
    open,
    handleClose,
    value,     
    handleClick    
  } = props || {}

  const [linkType, setLinkType] = useState()
  const [collectionId, setCollectionId] = useState<string | null>(null)
  const [path, setPath] = useState('')
  const [pagePath, setPagePath] = useState('')
  const [handle, setHandle] = useState()

  const LINK_TYPES = [
    { value: 'web', label: 'Landing page'  },
    { value: 'cms', label: 'CMS page' },
    { value: 'user', label: 'User page'},
    { value: 'product', label: 'Product page' },
    { value: 'product_collection', label: 'Product collection page' },
    { value: 'shopify_product', label: 'Shopify product page' },
    { value: 'shopify_collection', label: 'Shopify collection page' },
  ]

  const handleLinkTypeChange = (event) => {
    setLinkType(event.target.value)
    setPath('/')
  }

  const handleSubmit = () => {
    handleClick(path)
  }

  const handlePageChange = (ev) => {
    let currentPath = ev.target.value
    setPagePath(currentPath)
    setCollectionId(null)
    setPath(currentPath)
  }

  const handleCollectionChange = (ev) => {
    setCollectionId(ev.target.value)
  }

  const handleInputChange = (ev) => {
    const { value: handle } = ev.target
    setHandle(handle)   
    if(pagePath){
      setPath(`${pagePath}/${handle}`)      
    } 
  }

  const handlePathChange = (ev) => {
    setPath(ev.target.value)
  }

  
  return(    
    <Drawer  
      open={open}
      handleClose={handleClose}
      title="Create link"
      buttons={
        <PrimaryButton 
          fullWidth
          onClick={ handleSubmit }
          icon={'Plus'}
        >
          Add Link 
        </PrimaryButton>
      }
    >
      <Stack direction='column' width={'100%'} spacing={2}>
        <Autosuggest 
          direction="row"
          label="Link to"
          value={ linkType }
          name='linkType'
          options={ LINK_TYPES }
          handleChange={ handleLinkTypeChange }
        />        
        { linkType == 'web' && (
          <PageAutosuggest 
            direction="row"
            label="Page"
            name='path'
            value={pagePath}          
            valueParam='path'
            handleChange={handlePageChange}
            query={{
              filters: {
                AND: [
                  { page_type: { eq: 'web'}}
                ]
              }
            }}
          />
        )}
        { linkType == 'product' && (
          <PageAutosuggest 
            direction="row"
            label="Page"
            name='path'
            value={pagePath}          
            valueParam='path'
            handleChange={handlePageChange}
            query={{
              filters: {
                AND: [
                  { page_type: { eq: 'product'}}
                ]
              }
            }}
          />
        )}
        { linkType == 'product_collection' && (
          <PageAutosuggest 
            direction="row"
            label="Page"
            name='path'
            value={pagePath}          
            valueParam='path'
            handleChange={handlePageChange}
            query={{
              filters: {
                AND: [
                  { page_type: { eq: 'product_collection'}}
                ]
              }
            }}
          />
        )}
        { linkType == 'shopify_product' && (
          <PageAutosuggest 
            direction="row"
            label="Page"
            name='path'
            value={pagePath}          
            valueParam='path'
            handleChange={handlePageChange}
            query={{
              filters: {
                AND: [
                  { page_type: { eq: 'shopify_product'}}
                ]
              }
            }}
          />
        )}
        { linkType == 'shopify_collection' && (
          <PageAutosuggest 
            direction="row"
            label="Page"
            name='path'
            value={pagePath}          
            valueParam='path'
            handleChange={handlePageChange}
            query={{
              filters: {
                AND: [
                  { page_type: { eq: 'shopify_collection'}}
                ]
              }
            }}
          />
        )}
        { linkType == 'user' && (
          <UserAutosuggest 
            direction="row"
            label="User"
            name='user_id'
            value={handle}          
            valueParam='username'
            handleChange={handleInputChange}
          />
        )}
        { linkType == 'product' && (
          <ProductAutosuggest 
            direction="row"
            label="Product"
            name='product_id'
            value={handle}          
            valueParam='handle'
            handleChange={handleInputChange}
          />
        )}
        { linkType == 'product_collection' && (
          <ProductCollectionAutosuggest 
            direction="row"
            label="Product Collection"
            name='product_collection_id'
            value={handle}          
            valueParam='handle'
            handleChange={handleInputChange}
          />
        )}
        { linkType == 'shopify_product' && (
          <ShopifyProductAutosuggest 
            direction="row"
            label="Shopify Product"
            name='shopify_handle'
            value={handle}          
            handleChange={handleInputChange}
          />
        )}
        { linkType == 'shopify_collection' && (
          <ShopifyCollectionAutosuggest
            direction="row" 
            label="Shopify Collection"
            name='shopify_handle'
            value={handle}          
            handleChange={handleInputChange}
          />
        )}
        { linkType == 'cms' && (
          <CollectionAutosuggest 
            direction="row"
            label="Collection"
            name='collection_id'
            value={collectionId}          
            handleChange={handleCollectionChange}
          />
        )}
        { linkType == 'cms' && collectionId && (
          <DocumentAutosuggest 
            direction="row"
            collectionId={collectionId}
            label="Document"
            name='document_id'
            value={handle}                      
            valueParam='handle'
            handleChange={handleInputChange}
          />
        )}
        { path && (
        <Box sx={ sx.info }>
          <Typography variant="overline" color='text.secondary'>
            { path }
          </Typography>
        </Box>
        )}
      </Stack>
    </Drawer>
  )
}

export default PageLinkInputModal

const sx = {
  info: {
    p: 1,
    borderRadius: 1,
    bgcolor: 'background.paper',    
  }
}