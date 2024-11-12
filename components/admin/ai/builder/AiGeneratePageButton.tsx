'use client'

import React, { useState } from 'react'
import { Icon, Modal } from '../../..'
import AiChatForm from './AiChatForm'
import { useUnsplash } from '../../../../hooks'
import { experimental_useObject as useObject } from 'ai/react'
import { Button } from '../../../../components'
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from 'frontend-shadcn'
import { PAGE_SCHEMA } from 'lib/constants'

type AiGeneratePageButtonProps = {
	page?: any
  setPage?: any
}

const AiGeneratePageButton: React.FC<AiGeneratePageButtonProps> = (props) => {
	
  const {         
    page,
    setPage 
  } = props

	const [open, setOpen] = useState(false)

  const [input, setInput] = useState('')

  const handleInputChange = (ev) => {
    const { name, value } = ev.target
    setInput(value)
  }

	const {     
    isLoading,
    object,
    submit,
    stop 
  } = useObject({		
    api: '/api/ai_page',
    schema: PAGE_SCHEMA,
    onFinish: (resp) => {
      const { object } = resp         
      postProcess(object)      
      setOpen(false)
      stop()
    },
	})

  const { handleSearch } = useUnsplash()

  const postProcess = async (object) => {

    let pageComponents = object?.components
    let keywords = object?.image_keywords
    if(Array.isArray(keywords)){
      keywords = object.image_keywords.join(' ')
    }
    let resp = await handleSearch(keywords, 50)    
    let imageIndex = 0
    let images = resp?.results
    
    pageComponents = pageComponents.map((component) => {
      if (component?.props?.items?.length > 0) {
        component.props.items = component?.props.items?.map((item) => ({
          ...item,
          image: images[imageIndex++].urls.regular
        }))        
      } else {
        component.props.image = images[imageIndex++].urls.regular
      }
      if(component?.products?.length > 0){
        component.products = component.products.map((product) => ({
          ...product,
          props: {
            ...product.props,
            image: images[imageIndex++].urls.regular
          }          
        }))
      } 
      if(component?.collection && component?.collection?.documents?.length > 0){
        component.collection.documents = component.collection?.documents.map((document) => ({
          ...document,
          image: images[imageIndex++].urls.regular            
        }))        
      } 
      return component
    })   

    console.log("Page components", pageComponents)

    setPage({
      title: object?.title,
      handle: object?.title?.toLowerCase()?.replace(/ /g, '-'),
      description: object?.description,
      template: {
        ...object,
        components: pageComponents
      }        
    })   
  }


	const handleChatSubmit = () => {		
		submit(input)
	}

	return (
		<>
			<TooltipProvider>
				<Tooltip>
					<TooltipTrigger asChild>
						<Button
							className="bg-blue-500 text-white hover:bg-blue-700"
							startIcon={<Icon name="Zap" className='text-white' />}
							onClick={() => setOpen(!open)}
						>
							Generate with AI
						</Button>
					</TooltipTrigger>
					<TooltipContent>Use AI to generate text</TooltipContent>
				</Tooltip>
			</TooltipProvider>
			<Modal
        loading={ isLoading }
				title={'AI generate page'}
				open={open}
				handleClose={() => setOpen(false)}
				buttons={
					<Button
						fullWidth
						className="bg-blue-500 text-white hover:bg-blue-700"
						onClick={handleChatSubmit}
						loading={isLoading}
						startIcon={<Icon name="Zap" className="text-white" />}
					>
						Generate
					</Button>
				}
			>
				<AiChatForm					
					input={input}
					handleChange={handleInputChange}
				/>
			</Modal>
		</>
	)
}

export default AiGeneratePageButton
