'use client'

import React, { useState } from 'react'
import { Icon, Drawer, Button } from '../../..'
import AiChatForm from './AiChatForm'
import { useUnsplash } from '../../../../hooks'
import { experimental_useObject as useObject } from 'ai/react'
import { APP_SCHEMA, PAGE_SCHEMA } from 'lib/constants'

type AiGenerateAppModalProps = {
  open: boolean
  handleClose: () => void
	handleSuccess: (app: any) => void
}

const AiGenerateAppModal: React.FC<AiGenerateAppModalProps> = (props) => {

  const { 
    open,
    handleClose,
    handleSuccess
  } = props
	
	const [input, setInput] = useState('')

	const handleInputChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
		setInput(ev.target.value)
	}

	const { isLoading, submit, stop } = useObject({
		api: '/api/ai_app',
		schema: APP_SCHEMA,
		onFinish: (resp) => {
			const { object } = resp
			postProcess(object)
			handleClose()
			stop()
		},
	})

	const { handleSearch } = useUnsplash()

	const postProcess = async (object: any) => {
		const page = object?.pages?.[0]
    
		let pageComponents = page?.components ?? []
		const keywords = Array.isArray(object?.image_keywords) ? 
      object.image_keywords.join(' ') : 
      object?.image_keywords

		const { results: images = [] } = await handleSearch(keywords, 50)
		let imageIndex = 0

		pageComponents = pageComponents.map((component) => {
			const getNextImage = () => images[imageIndex++]?.urls.regular ?? ''
			const processItems = (items: any[]) => items.map((item) => ({ ...item, image: getNextImage() }))

			return {
				...component,
				props: {
					...component.props,
					items: component?.props?.items ? processItems(component.props.items) : undefined,
					image: component?.props?.items ? undefined : getNextImage(),
				},
				products: component?.products?.map((product) => ({
					...product,
					props: { ...product.props, image: getNextImage() },
				})),
				collection: component?.collection
					? {
							...component.collection,
							documents: processItems(component.collection.documents),
					  }
					: undefined,
			}
		})

    const homepage = {
      ...page,
      title: 'Homepage',
      components: pageComponents
    }

		handleSuccess({
      ...object,
			pages: [homepage]
		})
	}

	const handleChatSubmit = () => submit(input)

	return (		
    <div className="dark">
      <Drawer
        loading={isLoading}
        title="AI website builder"
        open={open}
        handleClose={ handleClose }
        className="dark"
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
          label=""
          input={input} 
          handleChange={handleInputChange} 
        />
      </Drawer>
    </div>
	)
}

export default AiGenerateAppModal
